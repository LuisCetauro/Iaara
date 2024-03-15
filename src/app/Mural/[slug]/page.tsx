import Image from "next/image";
import { getPost } from "@/lib/data";
import { RedirectToBlog } from "@/lib/action";

interface params {
  params: {
    slug: string;
  };
}

const isValidImageSrc = (src: string) => {
  return (
    src.startsWith("/") ||
    src.startsWith("http://") ||
    src.startsWith("https://")
  );
};

const SinglePostPage = async ({ params }: params) => {
  const { slug } = params;

  try {
    const post = await getPost(slug);

    const result = isValidImageSrc(post.img);
    const date = new Date(post.createdAt);
    const formattedDate = date.toLocaleString();

    return (
      <div className="w-screen md:text-2xl lg:mt-4 lg:w-screen pb-20">
        {post ? (
          <div className="md:w-screen lg:flex-row lg:flex">
            {result && (
              <div className="relative w-full h-64  mt-3 mb-3 md:w-96 md:ml-44 md:h-96 lg:w-full lg:ml-4">
                <Image
                  src={post.img || null}
                  alt=""
                  fill
                  className="rounded-3xl border-4 border-cor6"
                />
              </div>
            )}
            <div className="border-4 border-cor6 rounded-2xl text-center md:w-4/5 md:ml-20 lg:w-4/5 lg:ml-40 ">
              <div className="">
                <h1 className="mt-1 mb-1 ml-1 font-serif text-lg">
                  {post?.title}
                </h1>
                <h1 className="mb-1">Autor: {post?.username}</h1>
                <span>
                  Compartilhado em:
                  {formattedDate}
                </span>
              </div>
              <div className=" w-4/5 ml-12 mt-1 min-h-36 text-lg md:mt-4 md:text-3xl lg:min-h-60 ">
                <p>{post?.desc}</p>
              </div>
              <form action={RedirectToBlog}>
                <button className="border-4 border-cor7 rounded-3xl p-4 bg-cor7  float-left w-8 h-12 -mt-56  relative ml-2">
                  <Image src="/arrow-left.png" alt="" fill />
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        <div></div>
      </div>
    );
  } catch (error) {
    return <div>Something went wrong:</div>;
  }
};

export default SinglePostPage;
