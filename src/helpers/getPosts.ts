import { EntrySkeletonType, Entry } from 'contentful'
import client from '@/helpers/contentful'
import { BlogPost } from '@/types';


const POSTS_PER_PAGE = 4;

type GetPostsResponse = {
  totalPages: number;
  posts: BlogPost[]
}




const getItemFields = (entryItem: Entry): BlogPost => {
  return {
    ...entryItem.fields,
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   imageUrl: (entryItem.fields as any).blogImage.fields.file.url, 
   date: new Date(entryItem.sys.updatedAt)
  } as BlogPost
}

export const getPosts = async (search: string, currentPage: number): Promise<GetPostsResponse> => {

  const response = await client.getEntries<EntrySkeletonType<BlogPost>>({ content_type: 'blogPost' });

  console.log(response.items[0].fields)


  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;

  let filteredItems = response.items.map(getItemFields);

  if (search) {
    filteredItems = filteredItems.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
    )
  }


  const currentPosts = filteredItems.slice(startIndex, startIndex + POSTS_PER_PAGE);
  const totalPages = Math.ceil(filteredItems.length / POSTS_PER_PAGE);



  return {
    posts: currentPosts,
    totalPages,
  }
}


export const getAllPosts = async (): Promise<BlogPost[]> => {

  const response = await client.getEntries<EntrySkeletonType<BlogPost>>({ content_type: 'blogPost' });


  return response.items.map(getItemFields)

}




export const getPostBySlug = async (slug: string): Promise<BlogPost> => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response = await client.getEntries<EntrySkeletonType<BlogPost>>({ content_type: 'blogPost', 'fields.slug[match]': slug} as any);


 return getItemFields(response.items[0])
}