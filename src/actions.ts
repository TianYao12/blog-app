"use server";
import prisma from "@/lib/db";

export async function createPost(formData: FormData) {
    const title = formData.get("title") as string;
    const body = formData.get("body") as string;

    await prisma.post.create({
        data: {
            title,
            body
        }
    })
    
}

export async function signUp(formData: FormData) {
    console.log("broski")
}