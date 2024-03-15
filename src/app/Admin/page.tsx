import { auth } from "@/lib/auth";
import { getAdmin, getComentario } from "@/lib/data";
import Link from "next/link";
import { DeleteComent } from "../Componentes/DeleteComentario";

export default async function AdminContact() {
  const comentarios = await getComentario();
  const session = await auth();
  let isAdmin = false;

  const adminUser = await getAdmin(session?.user?.email);
  if (adminUser && adminUser.isAdmin === true) {
    isAdmin = true;
  }

  return (
    <>
      {isAdmin ? (
        <div>
          <div className=" w-2/5 ml-32 mb-4 text-center rounded-full p-1 md:ml-56 border-4 border-cor5 bg-cor6 mt-2  lg:w-1/5 lg:ml-12 text-cor8">
            <Link href="/Admin/Mural">Admin/Mural</Link>
          </div>
          {comentarios ? (
            <div className=" text-center text-sm lg:w-3/5 lg:ml-60">
              {comentarios.map((comentario) => (
                <div className=" mb-8  " key={comentario.slug}>
                  <h1 className="mt-2">Autor: {comentario.nome}</h1>
                  <h1 className="mt-2">Contato: {comentario.contato}</h1>
                  <div className="w-4/5 ml-12">
                    <p className="mt-2">{comentario.desc}</p>
                  </div>
                  <div className="mt-4 mb-4">
                    <DeleteComent comentario={comentario} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div>
          <h1>Como voce veio parar aqui? Volte</h1>
        </div>
      )}
    </>
  );
}
