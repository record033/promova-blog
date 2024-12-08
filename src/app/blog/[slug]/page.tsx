import posts from "@/app/posts.json";

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

export default function PostPage({ params }: PageProps) {
    const post = posts.find((post) => post.slug === params.slug);

    if (!post) {
        return <p>Post not found</p>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <div>
                <h2>Details</h2>
                <p>{post.text}</p>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}