/*Aqui é o layout doq vai aparecer enquanto a pagina carrega,
 a pagina com nome "loading" ja aprecera no loading do root */

import Link from "next/link";

function NotFound() {
  return (
    <>
      <div>
        <h2>A página não encontrada</h2>
        <Link href="/">Home</Link>
      </div>
    </>
  );
}

export default NotFound;
