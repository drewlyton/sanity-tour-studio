import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "76wb6ddc",
  dataset: "production",
  useCdn: process.env.NODE_ENV === "production", // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.SANITY_TOKEN, // Only if you want to update content with the client
});
