import posts from '@/app/posts.json'
import { BlogPost } from '@/types'


const POSTS_PER_PAGE = 4;

type GetPostsResponse = {
  totalPages: number;
  posts: BlogPost[]
}

export const getPosts = async (search: string, currentPage: number): Promise<GetPostsResponse> => {

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;

  let filteredPosts: BlogPost[] = posts;

  if(search) {
    filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase()) ||
      post.text.toLowerCase().includes(search.toLowerCase())
    )
  }


  const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

 

  return {
    posts: currentPosts,
    totalPages,
  }
}