import Link from "next/link";
import { getPosts } from "./Postas";

interface Post {
  id: string;
  title: string;
  slug: string;
  except: string;
  author: string;
  authorImage: string;
  coverImage: string;
}

async function fetchPosts(): Promise<Post[]> {
  const entries = await getPosts();
  console.log(
    "Slugs dos posts:",
    entries.map((entry) => entry.slug),
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return entries.map((entry: any) => ({
    id: entry.id,
    title: entry.title,
    slug: entry.slug, // Usando o slug
    except: entry.except,
    author: entry.author,
    authorImage: entry.authorImage,
    coverImage: entry.coverImage,
  }));
}

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
      }}
    >
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            width: "400px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <Link href={`/posts/${post.slug}`} legacyBehavior>
            <a style={{ textDecoration: "none", color: "inherit" }}>
              <img
                src={post.coverImage}
                alt={post.title}
                style={{ width: "100%", height: "auto" }}
              />
              <div style={{ padding: "16px", flexGrow: 1 }}>
                <h2 style={{ fontSize: "1.5em", margin: "0 0 10px" }}>
                  {post.title}
                </h2>
              </div>
            </a>
          </Link>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "16px",
              borderTop: "1px solid #ccc",
              backgroundColor: "#f9f9f9",
            }}
          >
            <img
              src={post.authorImage}
              alt={post.author}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />
            <p style={{ fontStyle: "italic", margin: "0" }}>
              by: {post.author}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
