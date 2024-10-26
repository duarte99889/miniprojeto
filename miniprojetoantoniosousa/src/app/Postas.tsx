import client from "./lib/client";

interface CoverImage {
  fields: {
    file: {
      url: string;
    };
  };
}

// Função para buscar todos os posts
export async function getPosts() {
  const entries = await client.getEntries({ content_type: "post" });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return entries.items.map((entry: any) => {
    const coverImage = entry.fields.coverImage as CoverImage | undefined; // Tipo específico
    return {
      id: entry.sys.id,
      title: entry.fields.title,
      slug: entry.fields.slug,
      content: entry.fields.except,
      author: entry.fields.author.fields.name,
      authorImage: entry.fields.author.fields.picture.fields.file.url,
      coverImage: coverImage ? coverImage.fields.file.url : null, // Verifica se coverImage é válido
    };
  });
}

// Função para buscar um post específico pelo slug
export async function getPostBySlug(slug: string) {
  const entries = await client.getEntries({
    content_type: "post",
    "fields.slug": slug,
  });

  if (entries.items.length === 0) {
    return null;
  }

  const entry = entries.items[0];
  const coverImage = entry.fields.coverImage as CoverImage | undefined; // Tipo específico
  return {
    id: entry.sys.id as string,
    title: entry.fields.title as string,
    content: entry.fields.except as string,
    slug: entry.fields.slug as string,
    coverImage: coverImage ? coverImage.fields.file.url : null, // Verifica se coverImage é válido
  };
}
