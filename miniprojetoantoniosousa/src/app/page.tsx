import Link from "next/link";
import { getPosts } from "./Posts/Posts";  // Função que você já tem para pegar os posts

// Tipagem dos dados do Post
type Post = {
  id: string;
  title: string;
};

// Função que buscará os dados do Contentful no servidor
async function fetchPosts() {
  const entries = await getPosts();
  return entries.map((entry: any) => ({
    id: entry.sys.id,  // Contentful usa o campo sys.id para o ID
    title: entry.fields.title,
  }));
}

export default async function Home() {
  // Faz o fetch dos posts no lado do servidor
  const posts = await fetchPosts();

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
