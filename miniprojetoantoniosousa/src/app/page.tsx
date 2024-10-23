import Link from "next/link";
export default function Home() {
  const posts = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
  ];
  return (
    <div>
      <h1>Lista de Posts</h1>
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
