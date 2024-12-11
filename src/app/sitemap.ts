import type { MetadataRoute } from "next";
import {getAllPosts} from '@/helpers/getPosts'

const SITE_URL = "https://promova-blog.vercel.app/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts()
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