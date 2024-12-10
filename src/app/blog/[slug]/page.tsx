
import { redirect } from 'next/navigation'
import posts from "@/app/posts.json";
import NavBackButton from '@/components/NavBackButton'

type PageProps = {
    params: Promise<{
        slug: string;
    }>
};

export const generateMetadata = async ({ params }: PageProps) => {
    const slug = (await params).slug
    const post = posts.find((post) => post.slug === slug);
    return {
        title: post?.title,
        description: post?.description,
        openGraph: {
            title: post?.title,
            description: post?.description,
        }
    }
}

export default async function PostPage({ params }: PageProps) {
    const slug = (await params).slug
    const post = posts.find((post) => post.slug === slug);

    if (!post) {
        redirect("/404")
    }

    return (
        <div className="container mx-auto px-5 max-w-3xl mt-10 flex flex-col items-center">
            <article className="mt-8 space-y-6 text-center">
                <h2 className="text-4xl font-bold text-gray-200">{post.title}</h2>
                <p className="text-lg text-gray-300">{post.description}</p>
                <section className="mt-6 text-left">
                    <h3 className="text-2xl font-semibold text-gray-200 mb-4 text-center">Article</h3>
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">{post.text}</p>
                </section>
            </article>
            <NavBackButton />
        </div>
    );
}

export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}