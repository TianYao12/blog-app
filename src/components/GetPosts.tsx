import axios from "axios";
import Link from "next/link";
import prisma from "@/lib/db";

export default async function GetPosts() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const posts = await prisma.post.findMany();

    return (
        <ul>
            {posts.map((post) => (
            <li key={post.id} className="mb-5">
                <Link href={`/posts/${post.id}`} className="text-2xl font-bold">{post.title}</Link>
            </li>
            ))}
      </ul>
    )
}