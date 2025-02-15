"use client";

import { useRouter } from "next/navigation";

export default function CreatePostIcon() {
  const router = useRouter();
  return (
    <div
      className="fixed top-20 left-2 mt-1 border-4 border-cor5 bg-cor6  rounded-2xl p-2 text-cor8"
      onClick={() => {
        router.push("/CreatePost");
      }}
    >
      <button>Poste!</button>
    </div>
  );
}
