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
      <ol>
        <li> Teste de prettier</li>
        <li>mais um teste </li>
        <li>maais um teste </li>
        <li> Teste </li>
        <li> Teste de prettier</li>
        <li>maais um teste </li>
        <li> Teste de prettier</li>
        <li>maais um teste </li>
      </ol>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
