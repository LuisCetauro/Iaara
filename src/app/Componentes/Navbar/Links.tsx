"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkType {
  title: string;
  path: string;
}

function Links() {
  const pathName = usePathname();

  const link = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Sobre",
      path: "/Sobre",
    },
    {
      title: "Mural",
      path: "/Mural",
    },
    {
      title: "Contato",
      path: "/Contato",
    },
  ];

  return (
    <div className="mt-2">
      {link.map((link: LinkType) => (
        <Link href={link.path} key={link.title}>
          <span
            className={`text-cor8 ml-4 p-1 rounded-full border-4 md:ml-12 lg:ml-20 ${
              pathName === link.path ? "border-cor5 " : "border-cor2 "
            } `}
          >
            {link.title}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default Links;
