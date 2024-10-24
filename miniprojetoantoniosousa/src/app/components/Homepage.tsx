import { GetStaticProps } from 'next';
import { getPosts } from '../Posts/Posts';
import RootLayout from '../layout';
// Tipagem dos dados do Contentful
type Post = {
  fields: {
    title: string;
    description: string;
  };
};

type Props = {
  posts: Post[];
};

// Componente da página principal (HomePage) que renderiza os posts
const HomePage = ({ posts }: Props) => {
  return (
    <RootLayout>  {/* Envolvendo o conteúdo dentro do layout principal */}
      <div>
        <h1>Posts</h1>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <h2>{post.fields.title}</h2>
              <p>{post.fields.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </RootLayout>
  );
};

// Função getStaticProps para buscar os dados de posts no build
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();  // Pega os posts do Contentful

  return {
    props: {
      posts,
    },
    revalidate: 60,  // Atualiza a página a cada 60 segundos
  };
};

export default HomePage;
