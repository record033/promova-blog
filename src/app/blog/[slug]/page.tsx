import Image from "next/image"
import { redirect } from 'next/navigation'
import NavBackButton from '@/components/NavBackButton'
import { getPostBySlug, getAllPosts } from '@/helpers/getPosts';
import { BlogPostText } from '@/components/BlogPostText'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

type PageProps = {
    params: Promise<{
        slug: string;
    }>
};

export const generateMetadata = async ({ params }: PageProps) => {
    const slug = (await params).slug
    const post = await getPostBySlug(slug)
    return {
        title: post?.title,
        description: post?.description,
        openGraph: {
            title: post?.title,
            description: post?.description,
        }
    }
}
export const revalidate = 3600

export default async function PostPage({ params }: PageProps) {

    const slug = (await params).slug

    const post = await getPostBySlug(slug)

    if (!post) {
        redirect("/404")
    }

    const readingEstimate = Math.ceil(documentToPlainTextString(post.text).split(" ").length / 200) // 200 is lowered AVG reading speed for human

    return (
        <div className="container mx-auto px-5 max-w-3xl mt-10 flex flex-col items-center">
            <p className="text-sm text-gray-400 mb-4">Appoximate reading time is {readingEstimate} min</p>
            <article className="mt-8 space-y-6 text-center">
                <h2 className="text-4xl font-bold text-gray-200">{post.title}</h2>
                <p className="text-lg text-gray-300">{post.description}</p>
                <p>updated At: {new Intl.DateTimeFormat('en-US').format(post.date)}</p>
                <Image alt={post.description} src={post.imageUrl} width={300} height={300} />
                <section className="mt-6 text-left">
                    <h3 className="text-2xl font-semibold text-gray-200 mb-4 text-center">Article</h3>
                    <BlogPostText richText={post.text} />
                </section>
            </article>
            <NavBackButton />
        </div >
    );
}

export async function generateStaticParams() {
    const posts = await getAllPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }));
}