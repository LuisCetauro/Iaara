import { auth, signIn } from "@/lib/auth";
import { getPosts } from "@/lib/data";
import Post from "../Componentes/postCard/Post";
import CreatePostIcon from "../Componentes/CreatePostIcon/CreatePostIcon";

export default async function Blog() {
  const posts = await getPosts();
  const session = await auth();

  return (
    <>
      <div>
        <div className="pb-2">
          {posts.map((post) => (
            <div key={post.id}>
              <Post post={post} />
            </div>
          ))}
        </div>
        {session ? <CreatePostIcon /> : <></>}
      </div>
    </>
  );
}
