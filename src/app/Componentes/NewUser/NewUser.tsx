import { AddUserCredentials } from "@/lib/action";

export default async function NewUser() {
  return (
    <div className="border-8 border-cor5 rounded-xl text-2xl md:ml-12 2xl:w-80">
      <form className="flex flex-col" action={AddUserCredentials}>
        <input
          className=" text-center mb-4 2xl:mt-2  placeholder-cor6"
          type="text"
          placeholder="Username"
          name="username"
        />
        <input
          className=" text-center mb-4  placeholder-cor6"
          type="text"
          placeholder="Email"
          name="email"
        />
        <input
          className=" text-center mb-4  placeholder-cor6"
          type="password"
          placeholder="Password"
          name="password"
        />
        <input
          className=" text-center mb-4  placeholder-cor6"
          type="password"
          placeholder="Password"
          name="passwordcheck"
        />
        <button
          className="p-4 bg-cor6 border-4 border-cor5  w-3/5 rounded-full ml-16 mb-4 md:ml-28 lg:ml-20"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
