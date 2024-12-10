import type { MetadataRoute } from "next";
import posts from "@/app/posts.json";

const SITE_URL = "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date().toISOString(),
    },
  ];

  const dynamicRoutes = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticRoutes, ...dynamicRoutes];
}