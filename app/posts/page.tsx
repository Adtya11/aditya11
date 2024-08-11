import { getPosts } from '../db/queries';

export default async function Page() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div className={`h-screen text-6xl text-center`}>
      My blogs{" "}
      <div className="text-center text-4xl p-6">
        This is my blog page, here I write about softwares, web development and tools that I find useful.
      </div>
    </div>
    
  );
}
