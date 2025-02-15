import { addComentario } from "@/lib/action";

export async function CriarComentario() {
  const specialSlug = Math.floor(Math.random() * 10000000);
  return (
    <div className="text-center text-white ">
      <form className="flex flex-col text-white " action={addComentario}>
        <input
          className=" text-center mb-2 md:h-16  placeholder-cor6"
          type="text"
          placeholder="Nome"
          name="nome"
        />
        <input
          className=" text-center mb-2 md:h-16  placeholder-cor6"
          type="text"
          placeholder="Contato"
          name="contato"
        />
        <input
          className=" text-center h-28 md:h-36   placeholder-cor6 text-sm"
          type="text"
          placeholder="Digite aqui sua sugestão de como melhorar"
          name="desc"
        />
        <input
          className="w-0"
          type="text"
          placeholder="slug"
          defaultValue={`${specialSlug}`}
          name="slug"
        />
        <button
          className="bg-cor6 border-4 border-cor5 w-3/5 mb-4 ml-16 p-2 rounded-xl md:p-4 md:ml-28  lg:ml-32 text-cor8"
          type="submit"
        >
          Enviar Comentário
        </button>
      </form>
    </div>
  );
}
