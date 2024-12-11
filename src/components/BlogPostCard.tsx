import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

import { BlogPost } from '@/types'


type BlogPostCardProps = {
  post: BlogPost;
};

const BlogPostCard: React.FC<BlogPostCardProps> = async ({ post }) => {


  return (
    <div className="border border-gray-700 rounded-md bg-gray-800 text-white shadow-md p-4 transition-transform transform hover:scale-105 lg:flex lg:items-center lg:gap-4">
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-2 text-blue-400">{post.title}</h2>
        <p className="text-gray-300 mb-4">{post.description}</p>
        <Link className="text-blue-500 hover:text-blue-400 underline text-sm" href={`/blog/${post.slug}`}>
          Read More
        </Link>
      </div>
      <div className="flex-shrink-0">
        <Link href={`/blog/${post.slug}`}>
          <Image
            alt={post.description}
            src={post.imageUrl}
            width={300}
            height={300}
            className="rounded-md"
            blurDataURL="data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzMzIiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzIyMiIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzMzMiIG9mZnNldD0iNzAlIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIGZpbGw9IiMzMzMiIC8+CiAgPHJlY3QgaWQ9InIiIHdpZHRoPSI3MDAiIGhlaWdodD0iNDc1IiBmaWxsPSJ1cmwoI2cpIiAvPgogIDxhbmltYXRlIHhsaW5rOmhyZWY9IiNyIiBhdHRyaWJ1dGVOYW1lPSJ4IiBmcm9tPSItNzAwIiB0bz0iNzAwIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgIC8+Cjwvc3ZnPg=="
          />
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;