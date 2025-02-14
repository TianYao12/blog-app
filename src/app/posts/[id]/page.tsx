import LikeButton from "@/components/LikeButton";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";

export default async function Page({params}: { params: {id: string}}) {
    const post = await prisma.post.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })

    if (!post) {
        notFound(); // you can also make a file called "not-found.tsx" under [id] to make a custom not found page
    }
    return (
        <main className="px-7 pt-24 text-center">
            <h1 className="text-5xl font-semibold mb-7">
                {post.title}
            </h1>
            <p className="max-w-[700px] mx-auto">{post.body}</p>
            <LikeButton />
        </main>
    )
}