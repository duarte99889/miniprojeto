// pages/posts/[slug].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import { getPosts } from './Posts';
import RootLayout from '../layout';

// Tipagem dos dados do Contentful
type Post = {
  fields: {
    title: string;
    description: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
};

type Props = {
  post: Post;
};

// Página de um post individual
const PostPage = ({ post }: Props) => {
  return (
    <RootLayout>
      <div>
        <h1>{post.fields.title}</h1>
        {post.fields.image && (
          <img src={post.fields.image.fields.file.url} alt={post.fields.title} />
        )}
        <p>{post.fields.description}</p>
      </div>
    </RootLayout>
  );
};

// Função getStaticPaths para gerar os caminhos dinâmicos com base nos títulos dos posts
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();

  const paths = posts.map((post: Post) => ({
    params: { slug: post.fields.title.replace(/\s+/g, '-').toLowerCase() },
  }));

  return {
    paths,
    fallback: false, // Se `false`, retorna 404 para rotas não encontradas
  };
};

// Função getStaticProps para pegar os dados do post específico com base no slug
export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params!;
  const posts = await getPosts();

  // Encontrar o post que corresponde ao slug
  const post = posts.find((p: Post) =>
    p.fields.title.replace(/\s+/g, '-').toLowerCase() === slug
  );

  return {
    props: {
      post,
    },
  };
};

export default PostPage;
