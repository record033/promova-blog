"use client"
import React, { useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import posts from '@/app/posts.json'
import BlogPostCard from '@/components/blogPostCard/BlogPostCard'
import NavigationButtons from '@/components/navigationButtons/NavigationButtons'



const POSTS_PER_PAGE = 4;

const BlogPostsList: React.FC = () => {

    const searchParams = useSearchParams();
    const searchQuery = searchParams.get('search') || ''

    const currentPage = +(searchParams.get('page') || "1")
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;

    const filteredPosts = useMemo(
        () => {
            if (searchQuery.length === 0) { return posts }
            return posts.filter((post) =>
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.text.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }, [searchQuery]
    )

    const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

    return (
        <>
            <div className={"container mx-auto px-5 max-w-6xl lg:px-8 flex flex-col gap-5"}>
                {currentPosts.map((post) => (
                    <BlogPostCard key={post.id} post={post} />
                ))}
            </div>
            <NavigationButtons currentPage={currentPage} totalPages={totalPages} />
        </>
    )
}

export default BlogPostsList