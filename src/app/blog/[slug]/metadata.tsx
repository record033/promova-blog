import { Metadata, ResolvingMetadata } from 'next'
import PostPage from './page'

type Props = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {

    const id = (await params).id
    console.log(params)
    return {
        title: "Scientific Blog",
        openGraph: {
            images: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fscience&psig=AOvVaw3XOGQa669y94w8VyGvERcb&ust=1733780871800000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIienJ6TmYoDFQAAAAAdAAAAABAE',
            ],
        },
    }
}

export default function Page() {
    return <PostPage />
}