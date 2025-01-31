import { updatePassword } from "@/lib/action";
import { auth } from "@/lib/auth";

export default async function UpdatePassword() {
  const session = await auth();
  const email = session?.user?.email;
  console.log(email);
  if (!email) return null;
  return (
    <form action={updatePassword} className="flex flex-col mt-2">
      <input
        type="hidden"
        placeholder="email"
        name="email"
        defaultValue={email}
        className="border-4 border-cor5 bg-cor6  rounded-2xl p-2 w-3/5  lg:w-2/5 text-cor8 text-center mb-2 md:h-16  "
      />
      <input
        type="text"
        placeholder="Senha"
        name="password"
        className="border-4 border-cor5 bg-cor6  rounded-2xl p-2 w-3/5  lg:w-2/5 text-cor8 text-center mb-2 md:h-16  "
      />
      <input
        type="text"
        placeholder="Nova senha"
        name="newPassword"
        className="border-4 border-cor5 bg-cor6  rounded-2xl p-2 w-3/5  lg:w-2/5 text-cor8 text-center mb-2 md:h-16 "
      />
      <input
        type="text"
        placeholder="Confirme a nova senha"
        name="newPasswordcheck"
        className="border-4 border-cor5 bg-cor6  rounded-2xl p-2 w-3/5  lg:w-2/5 text-cor8 text-center mb-2 md:h-16 "
      />
      <button className="border-4 border-cor5 bg-cor6 rounded-2xl p-2 w-3/5  lg:w-2/5 text-cor8">
        Alterar senha
      </button>
    </form>
  );
}
