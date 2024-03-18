import { CreatePost } from "../Componentes/CreatePost/CreatePost";

export default async function CreatePostPage() {
  return (
    <>
      <div className="lg:flex lg:flex-row">
        <div className=" h-96 text-center  md:ml-20 md:mt-12 lg:w-4/5 lg:mt-32 ">
          <h1 className=" w-3/5 ml-16 mt-2 lg:ml-28">
            Vou te ensinar a enviar uma imagem para o seu Post!
          </h1>
          <div className="w-4/5 ml-8 mt-8 text-sm ">
            <p>Entre no site Pexels.com ou pinterest</p>
            <p className="mt-4">
              Selecione uma imagem ,e clique nela e segure, abra ela em outra
              guia.
            </p>
            <p>
              Cole o link que está no navegador e copie no caminho da imagem.
            </p>
          </div>
        </div>
        <CreatePost />
      </div>
    </>
  );
}
