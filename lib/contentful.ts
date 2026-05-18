import { createClient } from "contentful";

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
});

export const fetchBlogPosts = async () => {
  try {
    const response = await contentfulClient.getEntries({
      content_type: "blog",
      order: ["-fields.publishDate"],
    });
    return response.items;
  } catch (error) {
    console.error("Error fetching blog posts from Contentful:", error);
    return [];
  }
};

export const fetchBlogPostBySlug = async (slug: string) => {
  try {
    const response = await contentfulClient.getEntries({
      content_type: "blog",
      "fields.slug": slug,
      limit: 1,
    });
    return response.items[0];
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    return null;
  }
};
