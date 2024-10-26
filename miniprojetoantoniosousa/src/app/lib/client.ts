import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "", // Defina essas variáveis no .env
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

export default client;
