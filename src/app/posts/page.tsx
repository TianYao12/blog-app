import Link from "next/link";
import axios from "axios";

export default async function Posts() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await axios.get("https://dummyjson.com/posts?limit=10");
  const data = await response.data;
  return (
    <main className="text-center pt-16 px-10">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All Posts</h1>
      <ul>
        {data.posts.map((post) => (
          <li key={post.id} className="mb-5">
            <Link href={`/posts/${post.id}`} className="text-2xl font-bold">{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
