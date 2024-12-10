import React from 'react'

import { getPosts } from '@/helpers/getPosts'
import BlogPostCard from './BlogPostCard';
import NavigationButtons from './NavigationButtons';

type BlogPostsListProps = {
    search: string;
    page: number;
}

export const BlogPostsList: React.FC<BlogPostsListProps> = async ({ search, page }) => {

    const { posts, totalPages } = await getPosts(search, page)


    return (
        <>
            <div className={"container mx-auto px-5 max-w-6xl lg:px-8 flex flex-col gap-5"}>
                {posts.map((post) => (
                    <BlogPostCard key={post.id} post={post} />
                ))}
            </div>
            <NavigationButtons currentPage={page} totalPages={totalPages} />
        </>
    )

}