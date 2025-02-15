import NewUser from "../Componentes/NewUser/NewUser";

export default function Cadastro() {
  return (
    <>
      <div className="lg:flex">
        <div>
          <div className="text-center mt-4 mb-8 text-xl w-4/5 ml-12 lg:w-full">
            <h1 className="lg:ml-8">
              Cadastre-se agora para aproveitar dos nossos serviços
            </h1>
          </div>
          <div className=" w-4/5 ml-11 mb-12 lg:w-full">
            <NewUser />
            <div className="text-center bg-blue-400 w-3/5 rounded-full p-2 ml-20 md:ml-36 "></div>
          </div>
        </div>
        <div className="hidden ml-60 text-center mt-32 lg:block ">
          <h1>Benefícios de fazer parte da IAARA</h1>
          <p className="ml-12 mt-12 w-4/5">
            Voce poderá postar e compartilhar seus próprios momentos, e em um
            momento futuro ter seus proprios grupos , personalizando seu feed
            como voce quiser
          </p>
        </div>
      </div>
    </>
  );
}
