import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "A iaara é um projeto que visa ser uma plataforma para organizar seus grupos.",
};

function About() {
  return (
    <>
      <div>
        <div className=" mt-4 lg:w-full lg:mt-16 md:ml-10 md:pb-10 lg:flex lg:flex-row lg:ml-0">
          <div className="text-center w-4/5 ml-8  md:text-3xl lg:pb-16">
            <h1 className="text-black">Sobre nós:</h1>
            <p className="text-black">
              A Iaara é uma empresa criada e mantida por um único dev, um
              pequeno projeto paralelo com a intenção de facilitar a organização
              dos seus grupos.
            </p>
            <div className="hidden relative mt-8 lg:w-full lg:h-72 lg:block">
              <Image
                src="/aboutteste.webp"
                fill
                alt=""
                className="rounded-2xl"
              />
            </div>
          </div>
          <div className="flex flex-col   justify-center gap-4   mt-4  md:text-3xl text-center text-sm lg:text-xl lg:-mt-12 2xl:-mt-16 2xl:text-base text-cor8">
            <div className="border-4 border-cor5 bg-cor6  rounded-2xl w-4/5 ml-8 p-2  md:p-8 lg:p-6">
              <h2>Visão</h2>
              <p>
                Ser reconhecida como a maneira de se conectar e organizar seus
                grupos do dia a dia.
              </p>
            </div>
            <div className="border-4 border-cor5 bg-cor6  rounded-2xl ml-8 w-4/5 p-2 md:p-8 lg:p-6">
              <h2>Valores</h2>
              <div className="flex flex-row gap-2 mt-2  md:-ml-6 lg:gap-4  lg:-ml-2">
                <p className="border-4 border-cor5 bg-cor7  rounded-2xl  p-2  ">
                  Praticidade
                  <br />
                  <br />
                  Soluções diretas e intuitivas.
                </p>
                <p className="border-4 border-cor5 bg-cor7  rounded-2xl p-1">
                  Comunidade
                  <br />
                  <br />
                  Experiencia moldada e voltada para a comunidade
                </p>
                <p className="border-4 border-cor5 bg-cor7  rounded-2xl p-1">
                  Renovação
                  <br />
                  <br />
                  Buscando a melhora constante e sustentável
                </p>
              </div>
            </div>
            <div className="md:p-8 border-4 border-cor5 bg-cor6 w-4/5 ml-8 p-2  rounded-2xl mb-4 lg:p-6">
              <h2>Missão</h2>
              <p>
                Na Iaara, nossa missão é simplificar e enriquecer a vida das
                pessoas, proporcionando maneiras fáceis e interativas de
                compartilhar suas vivências
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
