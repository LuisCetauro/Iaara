import { deleteComentario } from "@/lib/action";

interface Props {
  comentario: {
    nome: string;
    desc: string;
    contato: string;
    slug: string;
    createdAt: Date;
  };
}

export async function DeleteComent({ comentario }: Props) {
  return (
    <>
      <div>
        <form action={deleteComentario}>
          <input type="hidden" defaultValue={comentario.slug} name="slug" />
          <button className="border-4 border-cor5 bg-cor6 mb-14 rounded-2xl p-2 w-3/5  lg:w-2/5">
            Deletar Comentario
          </button>
        </form>
      </div>
    </>
  );
}
