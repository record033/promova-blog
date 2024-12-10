import Search from '@/components/search/Search'
import BlogPostsList from '@/components/blogPostsList/BlogPostsList'

import { Metadata } from 'next'
import { Suspense } from 'react';


export const metadata: Metadata = {
  title: "Scientific blog",
  description: "Short articles about popular science for all ages",
  keywords: [
    "science blog",
    "space exploration",
    "programming tutorials",
    "biology articles",
    "geology insights",
    "scientific discoveries",
    "technology trends",
    "coding guides",
    "astronomy updates",
    "life sciences",
    "earth sciences",
    "physics concepts",
    "chemistry experiments",
    "mathematics discussions",
    "AI and machine learning",
    "robotics advancements",
    "scientific research",
    "STEM education",
    "scientific innovation",
    "science news"
  ],
  openGraph: {
    title: "Scientific blog",
    description: "Short articles about popular science for all ages"
  }
};

export default function BlogPage() {
  return (
    <div className="flex flex-col justify-between items-center gap-10 pt-5 pb-10">
      <h1 className="text-4xl">Blog</h1>
      <Search />
      <Suspense>
        <BlogPostsList />
      </Suspense>
    </div>
  );
}