"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
    const title = formData.get("title") as string;
    const body = formData.get("body") as string;

    await prisma.post.create({
        data: {
            title,
            body
        }
    })
    revalidatePath("/posts") // used in APi routes and server actions to manually rerender page
    
}

export async function signUp(formData: FormData) {
    console.log("broski")
}