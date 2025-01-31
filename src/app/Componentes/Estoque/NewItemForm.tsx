import { addNewItem } from "@/lib/action";

export default function NewItemForm() {
  return (
    <form action={addNewItem} className="flex flex-col mt-2">
      <input
        type="text"
        placeholder="nome"
        name="nome"
        className="border-4 border-cor5 bg-cor6  rounded-2xl p-2 w-3/5  lg:w-2/5 text-cor8 text-center mb-2 md:h-16  "
      />
      <input
        type="number"
        placeholder="Valor"
        name="Valor"
        className="border-4 border-cor5 bg-cor6  rounded-2xl p-2 w-3/5  lg:w-2/5 text-cor8 text-center mb-2 md:h-16  "
      />
      <input
        type="number"
        placeholder="Quantidade"
        name="Quantidade"
        className="border-4 border-cor5 bg-cor6  rounded-2xl p-2 w-3/5  lg:w-2/5 text-cor8 text-center mb-2 md:h-16 "
      />
      <input
        type="text"
        placeholder="Código"
        name="slug"
        className="border-4 border-cor5 bg-cor6  rounded-2xl p-2 w-3/5  lg:w-2/5 text-cor8 text-center mb-2 md:h-16 "
      />
      <button className="border-4 border-cor5 bg-cor6 rounded-2xl p-2 w-3/5  lg:w-2/5 text-cor8">
        Adicionar novo Item
      </button>
    </form>
  );
}
