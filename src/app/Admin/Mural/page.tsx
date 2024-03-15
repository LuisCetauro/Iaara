import { getAdmin, getPosts } from "@/lib/data";
import { auth } from "@/lib/auth";
import Post from "@/app/Componentes/postCard/Post";
import { DeletePost } from "@/app/Componentes/DeletePost";

export default async function Admin() {
  const posts = await getPosts();
  const session = await auth();
  let isAdmin = false;

  const adminUser = await getAdmin(session?.user?.email);
  if (adminUser && adminUser.isAdmin === true) {
    isAdmin = true;
  }

  return (
    <>
      {isAdmin ? (
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <Post post={post} />
              <DeletePost post={post} />
            </div>
          ))}
        </div>
      ) : (
        <div>Como voce veio parar aqui? Volte</div>
      )}
      <div></div>
    </>
  );
}
