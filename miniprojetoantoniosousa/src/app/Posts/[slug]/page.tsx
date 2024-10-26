import { getPostBySlug, getPosts } from "../Postas";

import { notFound } from "next/navigation";

interface PostPageProps {
  params: { slug: string; except: string; coverImage: CoverImage };
}
interface CoverImage {
  fields: {
    file: {
      url: string;
    };
  };
}

// Esta função é responsável por renderizar a página
export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    // Redireciona para uma página 404 se o post não for encontrado
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <h1>aqui</h1>
      <p>{post.content}</p>
      <img
        src={post.coverImage ?? ""} // Ou uma URL de imagem padrão
        alt={post.title}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}

// Usamos esta função para gerar as rotas estáticas
export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
