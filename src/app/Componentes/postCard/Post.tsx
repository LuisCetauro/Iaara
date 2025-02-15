"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface post {
  post: {
    title: string;
    desc: string;
    img: string;
    userId: string;
    slug: string;
    createdAt: Date;
  };
}

export default function Post({ post }: post) {
  const router = useRouter();
  const date = new Date(post.createdAt);
  const formattedDate = date.toLocaleString();
  const [imageState, setImageState] = useState(false);

  const isValidImageSrc = (src: string) => {
    return (
      src.startsWith("/") ||
      src.startsWith("http://") ||
      src.startsWith("https://")
    );
  };

  useEffect(() => {
    if (isValidImageSrc(post.img)) {
      setImageState(true);
    } else {
      setImageState(false);
    }
  }, [post.img]);

  return (
    <>
      <div className=" mt-12 text-center mb-12 md:text-2xl lg:w-4/5 lg:ml-32 ">
        {post.img && (
          <div className="">
            <h1 className="h-8 md:h-16 lg:-ml-28">{post.title}</h1>
            {imageState && (
              <div className="relative w-4/5  h-40 ml-10 md:h-96 lg:w-3/5 lg:ml-56 ">
                <Image
                  className="rounded-xl border-cor6 border-4"
                  src={post.img}
                  alt={post.desc}
                  fill
                  onClick={() => {
                    router.push(`/Mural/${post.slug}`);
                  }}
                />
              </div>
            )}
          </div>
        )}
        {imageState && (
          <span className="float float-right   -mr-12 -mt-24 transform rotate-90 md:-mt-48 lg:-mt-36">
            {formattedDate}
          </span>
        )}
        <div>
          <p className="pb-4  min-h-16 md:min-h-32 lg:-ml-16">{post.desc}</p>
          <Link
            className="border-4 border-cor5 bg-cor6  rounded-2xl p-2 text-cor8 2xl:-ml-20 "
            href={`/Mural/${post.slug}`}
          >
            Conheça
          </Link>
          <div className="h-4"></div>
        </div>
      </div>
    </>
  );
}
