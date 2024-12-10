
import posts from "@/app/posts.json";
import NavBackButton from '@/components/navBackButton/NavBackButton'

type Post = {
    id: number;
    slug: string;
    title: string;
    description: string;
    text: string;
};

type PageProps = {
    params: {
        slug: string;
    };
};

export const generateMetadata = ({ params }: PageProps) => {
    const post = posts.find((post) => post.slug === params.slug);
    return {
        title: post?.title,
        description: post?.description,
        openGraph: {
            title: post?.title,
            description: post?.description,
        }
    }
}

export default function PostPage({ params }: PageProps) {
    const post = posts.find((post) => post.slug === params.slug);

    if (!post) {
        return (
            <div className="container mx-auto px-5 max-w-3xl text-center mt-10">
                <h1 className="text-2xl font-bold text-red-500">Post not found</h1>
                <NavBackButton />
            </div>
        );
    }

    return (
        <div className="container mx-auto px-5 max-w-3xl mt-10 flex flex-col items-center">
            <article className="mt-8 space-y-6 text-center">
                <h2 className="text-4xl font-bold text-gray-200">{post.title}</h2>
                <p className="text-lg text-gray-300">{post.description}</p>
                <section className="mt-6 text-left">
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4 text-center">Article</h2>
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