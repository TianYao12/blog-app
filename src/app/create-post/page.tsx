import { createPost } from "@/actions";
export default function Page() {
  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5"> Create Post</h1>
      <form
        className="flex flex-col max-w-[400px] mx-auto gap-2 my-10"
        action={createPost}
      >
        <input
          className="border rounded px-3 h-10"
          type="text"
          name="title"
          placeholder="Create Post"
          required
        />
        <textarea
          name="body"
          placeholder="Body content for new post"
          className="border rounded px-3 py-2"
          rows={6}
          required
        />
        <button
          type="submit"
          className="h-full bg-blue-700 px-5 rounded text-white"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
