import React from 'react';

type BlogPost = {
  id: string;
  slug: string;
  title: string;
  description: string;
  text: string;
};

type BlogPostCardProps = {
  post: BlogPost;
};

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {

  const readingEstimate = Math.ceil(post.text.split(" ").length / 200) // 200 is lowered AVG reading speed for human

  return (
    <div className="border border-gray-700 rounded-md bg-gray-800 text-white shadow-md p-4 transition-transform transform hover:scale-105">
      <h2 className="text-xl font-semibold mb-2 text-blue-400">{post.title}</h2>
      <p className="text-gray-300 mb-4">{post.description}</p>
      <p className="text-sm text-gray-400 mb-4">Read-time estimate: {readingEstimate} minutes</p>
      <a
        href={`/blog/${post.slug}`}
        className="text-blue-500 hover:text-blue-400 underline text-sm"
      >
        Read More
      </a>
    </div>
  );
};

export default BlogPostCard;