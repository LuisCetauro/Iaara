import Image from "next/image";
import Link from "next/link";
import { auth } from "../lib/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div className="flex-col w-screen  ">
      <div className="  mt-8  lg:flex-row lg:flex">
        <div className="w-4/5 ml-8 h-3/5 md:ml-16  pb-6 text-center lg:w-5/5 lg:ml-0 ">
          <div>
            <h1 className=" md:text-center md:mt-12 md:text-2xl lg:mt-4 lg:pb-6  pb-4 ">
              Bem vindo a Iaara! Agilize o fluxo do rio chamado vida!
            </h1>
            <p className="md:h-60 md:text-2xl lg:w-4/5 lg:ml-20 text-sm pb-4  ">
              A Iaara é uma empresa criada para agilizar seu dia a dia,
              proporcionando maneiras fáceis e interativas de compartilhar suas
              vivências. Foi criada em 2024 e desde então estamos revolucionando
              o mercado. Venha conhecer mais e fazer parte da nossa jornada, vem
              pra Iaara!
            </p>
          </div>
          <div className="pb-0 lg:mt-16 lg:ml-12  ">
            <Link href="/About">
              <button className="border-4 border-cor5 bg-cor6 rounded-full p-2 mr-2 text-cor8">
                Conheça
              </button>
            </Link>
            <Link href="/Contact">
              <button className=" border-4 border-cor5 bg-cor6 rounded-full p-2 mr-2 text-cor8">
                Contact
              </button>
            </Link>
            {session ? (
              <></>
            ) : (
              <Link href="/Cadastro">
                <button className=" border-4 border-cor5 bg-cor6 rounded-full p-2 text-cor8">
                  Cadastre-se
                </button>
              </Link>
            )}
          </div>
        </div>
        <div className="w-screen  mt-4 lg:flex lg:mt-20  ">
          <div className="relative w-full h-56 md:h-72 md:w-4/5 md:ml-16 lg:border-8 lg:border-cor6 rounded-3xl ">
            <Image
              src="/hometeste.jpeg"
              alt=""
              fill
              className="lg:rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
