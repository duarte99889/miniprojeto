import client from "../lib/client";

export const getPosts = async () => {
  const response = await client.getEntries({
    content_type: 'post', // Nome do Content Type que você criou no Contentful
  });

  return response.items;
};
