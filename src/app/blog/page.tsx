import Search from '@/components/Search'
import { BlogPostsList } from '@/components/BlogPostsList'

import { Metadata } from 'next'
import { PageProps } from '@/types'


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

const BlogPage: React.FC<PageProps> = async ({ searchParams }) => {
  const search = ((await searchParams).search || "") as string

  const page = +((await searchParams).page || "1")

  return (
    <div className="flex flex-col justify-between items-center gap-10 pt-5 pb-10">
      <h1 className="text-4xl">Blog</h1>
      <Search search={search} />
      <BlogPostsList page={page} search={search} />
    </div>
  );
}

export default BlogPage