import { auth, signIn, signOut } from "../../../lib/auth";
import Links from "./Links";
import Link from "next/link";
import { getAdmin } from "@/lib/data";
import Image from "next/image";

export default async function NavBar() {
  const session = await auth();
  let isAdmin = false;

  const adminUser = await getAdmin(session?.user?.email);
  if (adminUser && adminUser.isAdmin === true) {
    isAdmin = true;
  }

  return (
    <div className=" w-screen  h-20 text-white  border-b-8 border-cor5 bg-cor6 flex justify-center gap-2 2xl:gap-60">
      <Link href="/">
        <div className="mt-3 mr-12 border-2 border-cor5 w-20 h-12 relative  ">
          <Image src="/teste.jpg" alt="" fill />
        </div>
      </Link>
      <div className="-ml-16 mt-1 lg:mt-3 lg:ml-20 ">
        <Links />
      </div>

      <div>
        {session && session.user ? (
          <div className="flex mt-12 -ml-28 text-sm md:ml-12 ">
            <div className="mr-4  lg:ml-12 text-cor8">
              {isAdmin && <Link href="/Admin">Admin</Link>}
            </div>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button className="text-cor8" type="submit">
                SingOut
              </button>
            </form>
          </div>
        ) : (
          <div>
            <form
              action={async () => {
                "use server";
                await signIn();
              }}
            >
              <button
                className="mt-11 text-sm border-2 border-cor5 rounded-full -ml-12  md:ml-16 md:mt-2 text-cor8"
                type="submit"
              >
                SingIn
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
