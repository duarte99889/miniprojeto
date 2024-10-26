import client from "../lib/client";

export interface PostType {
  id: string;
  title: string;
  except: string;
  coverImage: string;
}

// Função para buscar todos os posts
export async function getPosts() {
  const entries = await client.getEntries({ content_type: 'post' });
  return entries.items.map((entry: any) => ({
    id: entry.sys.id,
    title: entry.fields.title,
    slug: entry.fields.slug,
    content: entry.fields.except,
    author: entry.fields.author.fields.name,
    authorImage: entry.fields.author.fields.picture.fields.file.url,
    coverImage: entry.fields.coverImage?.fields.file.url || '', // Verificação adicional aqui
  }));
}

// Função para buscar um post específico pelo slug
export async function getPostBySlug(slug: string) {
  const entries = await client.getEntries({
    content_type: 'post',
    'fields.slug': slug,
  });

  if (entries.items.length === 0) {
    return null;
  }

  const entry = entries.items[0];
  return {
    id: entry.sys.id as string,
    title: entry.fields.title as string,
    content: entry.fields.except as string,
    slug: entry.fields.slug as string,
    coverImage: entry.fields.coverImage as string,
  };
}
