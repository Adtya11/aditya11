import { post } from "../db/queries";
import { parseDate } from "../posts/[post]/utils";
import Link from "next/link";

export default async function PostTile({
  post,
  key,
}: {
  post: post;
  key: number;
}) {
  const slug = `/posts/${post.slug}`;
  return (
    <Link href={slug}>
      <div className="flex flex-col mt-5 text-black">
        <div className="text-4xl text-left hover:text-blue-800">{post.title}</div>
        <div className="text-base text-left">{parseDate(post.updatedAt)}</div>
        <div className="text-xl text-justify pt-4 italic">
          {post.description}
        </div>
        <div className="flex flex-row text-base space-x-2 mt-3">{((post.tags as any).tags as Array<string>).map(tag => renderTag(tag))}</div>
      </div>
    </Link>
  );
}

function renderTag(tag: string): JSX.Element {
  return (
    <div className="px-3 py-2 bg-gray-100 rounded-lg">
      # {tag}
    </div>
  )
}