import { AddPost } from "@/lib/action";
import { auth } from "@/lib/auth";
import { getUser } from "@/lib/data";

export async function CreatePost() {
  const session = await auth();

  const user = await getUser(session?.user?.email);

  const specialSlug = Math.floor(Math.random() * 10000000);

  return (
    <div className="pb-20 -mt-44 lg:mt-0">
      <form
        action={AddPost}
        className=" border-8 border-cor6 rounded-lg flex flex-col mt-0 md:w-96 md:ml-48 lg:mt-32 lg:mr-16 "
      >
        <input
          className=" text-center mt-2  placeholder-cor6"
          type="text"
          placeholder="Title"
          name="title"
        />
        <input
          className="text-center  min-h-20 placeholder-cor6"
          type="textarea"
          placeholder="Description"
          name="desc"
        />
        <input type="hidden" name="slug" defaultValue={`${specialSlug}`} />
        <input
          type="hidden"
          name="username"
          defaultValue={`${user?.username}`}
        />
        <input type="hidden" name="email" defaultValue={`${user?.email}`} />

        <input
          className=" text-center  placeholder-cor6"
          type="text"
          placeholder="Caminho da imagem"
          name="img"
        />
        <button className=" border-4 bg-cor6 border-cor5 w-40 rounded-full ml-24 mt-4 mb-2 text-cor8">
          Criar
        </button>
      </form>
    </div>
  );
}
