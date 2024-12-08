import React from 'react';
import './styles.css'

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
  return (
    <div className="blog-post-card">
      <h2 className="blog-post-title">{post.title}</h2>
      <p className="blog-post-description">{post.description}</p>
      <a href={`/blog/${post.slug}`} className="blog-post-link">
        Read More
      </a>
    </div>
  );
};

export default BlogPostCard;