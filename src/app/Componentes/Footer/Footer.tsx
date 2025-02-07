import Image from "next/image";

export default function Footer() {
  return (
    <div className="fixed bottom-0 w-screen text-white  h-12 bg-cor6 border-t-8 border-cor5 flex justify-center items-center">
      <div className=" flex flex-row">
        <div className="flex flex-row">
          <p className="mt-2 ml-8 text-sm md:ml-52 lg:text-lg lg:ml-96 text-cor8">
            Karen Cris Store
          </p>
          <p className="mt-2 ml-8 text-sm md:ml-52 lg:text-lg lg:ml-12 text-cor8">
            A Moda passa, o estilo permanece.
          </p>
        </div>
        <div className="relative ml-2  w-16 h-12 -mt-1 md:ml-52 lg:ml-96">
          <Image src="/logo.svg" alt="" fill />
        </div>
      </div>
    </div>
  );
}
