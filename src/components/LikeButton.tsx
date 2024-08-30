"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState<number>(0);
  return (
    <div className="flex flex-col gap-5 w-full items-center">
        <button
        className="bg-blue-700 rounded-[5px] w-[50px] text-white p-2 mt-10"
        onClick={() => setLikes((prev) => prev + 1)}
        >
        Like
        </button>
        {likes}
    </div>
  );
}
