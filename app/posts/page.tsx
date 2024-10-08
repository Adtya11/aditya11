import { getPosts } from "../db/queries";
import PostTile from "./postTile";

export default async function Page() {
  const posts = await getPosts();
  return (
    <div className={`text-gray-900 h-[80vh] text-6xl text-center`}>
      My blogs
      <div className="text-gray-700 w-9/12 text-4xl p-6 mx-auto">
        This is my blog page, here I write about softwares, web development and
        tools that I find useful.
        <div className="pt-10">
        {posts.map((post, key) => (
          <PostTile post={post} key={key} />
        ))}
        </div>
      </div>
    </div>
  );
}
