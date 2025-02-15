import Image from "next/image";

import { CriarComentario } from "../Componentes/Comentario/Comentario";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description:
    "Estamos sempre abertos a sugestões para melhorar. Sua opinião é importante para nós. Entre em contato conosco e compartilhe suas ideias. Juntos, podemos tornar nossa experiência ainda melhor.",
};

function Contact() {
  return (
    <>
      <div className=" lg:flex 2xl:text-3xl ">
        <div className="relative w-4/5 ml-10 mt-4 border-4 border-cor6 rounded-xl h-60 md:w-4/5 md:ml-12 md:mt-12 md:h-80 lg:mt-20 lg:h-96">
          <Image src="/contatoteste.jpeg" alt="" fill className="" />
        </div>
        <div className="border-4 border-cor6 rounded-lg mt-10 w-4/5 ml-10 pb-0 md:mt-16 md:ml-16 lg:mt-12 lg:pb-12 lg:mr-12">
          <CriarComentario />
        </div>
      </div>
      <div className="hidden  2xl:block  w-2/5 ml-24 text-sm">
        <p>
          A IAara é uma plataforma criada para melhorar o seu dia a dia.Voce é
          nossa prioridade e por isso queremos escutar o que voce tem para
          dizer, use esse espaço para dar suas sugestôes.
        </p>
      </div>
    </>
  );
}

export default Contact;
