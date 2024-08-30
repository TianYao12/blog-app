import GetPosts from "@/components/GetPosts";
import { Suspense } from "react";

export default async function Posts() {
    
  return (
    <main className="text-center pt-16 px-10">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All Posts</h1>
      <Suspense fallback="Loading...">
        <GetPosts />
      </Suspense>
    </main>
  );
}
