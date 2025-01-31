import { getAdmin, getEstoque } from "@/lib/data";
import { auth } from "@/lib/auth";
import { DeleteItem, UpdateQuantity, UpdateValue } from "@/lib/action";
import NewItem from "@/app/Componentes/Estoque/NewItemForm";

export default async function Admin() {
  const session = await auth();
  const estoque = await getEstoque();
  let isAdmin = false;

  const adminUser = await getAdmin(session?.user?.email);
  if (adminUser && adminUser.isAdmin === true) {
    isAdmin = true;
  }

  return (
    <section>
      {isAdmin ? (
        <div>
          <h1>Itens :</h1>
          {estoque ? (
            <div className=" text-center text-sm lg:w-3/5 lg:ml-60">
              {estoque.map((item) => (
                <div className=" mb-8  " key={item.id}>
                  <h1 className="mt-2">Item: {item.nome}</h1>
                  <div className="w-4/5 ml-12">
                    {/** Atualizar Valores*/}
                    <div>
                      <p className="mt-2">Valor: {item.Valor}</p>
                      <form action={UpdateValue}>
                        <input
                          type="number"
                          name="Valor"
                          className="border-4 border-cor5 bg-cor6  rounded-2xl p-2 w-3/5  lg:w-2/5 text-cor8"
                        />
                        <input
                          type="hidden"
                          defaultValue={item.slug}
                          name="slug"
                        />
                        <button className="border-4 border-cor5 bg-cor6  rounded-2xl p-2 w-3/5  lg:w-2/5 text-cor8">
                          Alterar Valor
                        </button>
                      </form>
                    </div>
                    {/** Atualizar Quantidade */}
                    <div>
                      <p>Quantidade: {item.Quantidade}</p>
                      <form action={UpdateQuantity}>
                        <input
                          type="number"
                          name="Quantidade"
                          className="border-4 border-cor5 bg-cor6  rounded-2xl p-2 w-3/5  lg:w-2/5 text-cor8"
                        />
                        <input
                          type="hidden"
                          defaultValue={item.slug}
                          name="slug"
                        />
                        <button className="border-4 border-cor5 bg-cor6  rounded-2xl p-2 w-3/5  lg:w-2/5 text-cor8">
                          Alterar quantidade
                        </button>
                      </form>
                    </div>
                    <p className="mt-2">Código: {item.slug}</p>
                  </div>
                  <form action={DeleteItem}>
                    <input type="hidden" defaultValue={item.slug} name="slug" />
                    <button className="border-4 border-cor5 bg-cor6 rounded-2xl p-2 w-3/5  lg:w-2/5 text-cor8">
                      Deletar item
                    </button>
                  </form>
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div>Como voce veio parar aqui? Volte</div>
      )}
    </section>
  );
}
