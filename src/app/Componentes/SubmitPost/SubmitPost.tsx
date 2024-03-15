import { addPost } from "@/lib/action";
import { auth } from "@/lib/auth";

export default async function SubmitPost() {
  const session = await auth();
  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="Title" name="title" />
        <input type="textarea" placeholder="Description" name="desc" />
        <input name="slug" defaultValue="saagsadr2378" />
        <input
          className="w-0"
          name="userId"
          defaultValue={`${session?.user?.id}`}
        />
        <input type="text" placeholder="Caminho da imagem" name="img" />
        <button>Criar</button>
      </form>
    </div>
  );
}
