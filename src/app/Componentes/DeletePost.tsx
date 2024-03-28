import { deletePost } from "@/lib/action";

interface Props {
  post: {
    title: string;
    desc: string;
    img: string;
    userId: string;
    slug: string;
    createdAt: Date;
  };
}

export async function DeletePost({ post }: Props) {
  return (
    <>
      <div>
        <form action={deletePost}>
          <input type="hidden" defaultValue={post.slug} name="slug" />
          <button
            className="border-4 border-cor5 bg-cor6  rounded-2xl p-2 float-left -mt-24 ml-2 text-cor8"
            type="submit"
          >
            Deletar Post
          </button>
        </form>
      </div>
    </>
  );
}
