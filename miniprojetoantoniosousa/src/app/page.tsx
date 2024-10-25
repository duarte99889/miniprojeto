import Link from "next/link";
import { getPosts } from "./Posts/Posts";

// Função que buscará os dados do Contentful no servidor
async function fetchPosts() {
  const entries = await getPosts();
  return entries.map((entry: any) => ({
    id: entry.sys.id,  // Contentful usa o campo sys.id para o ID
    title: entry.fields.title,
    except: entry.fields.except,
    author: entry.fields.author.fields.name, // Nome do autor
    authorImage: entry.fields.author.fields.picture.fields.file.url, // URL da imagem do autor
    coverImage: entry.fields.coverImage.fields.file.url, // URL da imagem de capa
  }));
}

export default async function Home() {
  // Faz o fetch dos posts no lado do servidor
  const posts = await fetchPosts();

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
      {posts.map((post) => (
        <div key={post.id} style={{
          border: '1px solid #ccc', 
          borderRadius: '8px', 
          width: '400px', 
          height: '500px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden', 
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        }}>
          <Link href={`/posts/${post.id}`}>
            <img 
              src={post.coverImage} 
              alt={post.title} 
              style={{ width: '100%', height: 'auto' }} 
            />
            <div style={{ padding: '16px', flexGrow: 1 }}>
              <h2 style={{ fontSize: '1.5em', margin: '0 0 10px' }}>{post.title}</h2>
              <p style={{ fontSize: '1em', margin: '0 0 10px' }}>{post.except}</p>
            </div>
          </Link>
          <div style={{
            display: 'flex', 
            alignItems: 'center', 
            padding: '16px', 
            borderTop: '1px solid #ccc',
            backgroundColor: '#f9f9f9' // Opcional: adicionar um fundo para destacar a área do autor
          }}>
            <img 
              src={post.authorImage} 
              alt={post.author} 
              style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} 
            />
            <p style={{ fontStyle: 'italic', margin: '0' }}>by: {post.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

