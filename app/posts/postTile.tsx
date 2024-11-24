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
      <div className="flex flex-col mt-5 text-black p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
        {/* Title */}
        <div className="text-lg sm:text-2xl md:text-4xl text-left font-semibold hover:text-blue-800">
          {post.title}
        </div>

        {/* Date */}
        <div className="text-sm sm:text-base text-left text-gray-500 mt-2">
          {parseDate(post.updatedAt)}
        </div>

        {/* Description */}
        <div className="text-sm sm:text-lg text-justify pt-4 italic text-gray-700">
          {post.description}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap text-sm sm:text-base gap-2 mt-3">
          {(post.tags as any).tags.map((tag: any) => renderTag(tag))}
        </div>
      </div>
    </Link>
  );
}

function renderTag(tag: string): JSX.Element {
  return (
    <div className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full border border-gray-200">
      # {tag}
    </div>
  );
}