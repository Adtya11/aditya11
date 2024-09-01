import { post } from "../db/queries";
import Image from "next/image";
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
      <div className="flex flex-row mt-5">
        <div className="w-1/2 justify-center items-center px-5">
          <Image src={post.thumbnail} width={700} height={500} alt="pop" />
        </div>
        <div className="w-1/2 text-left text-black">
          <div className="text-base">{parseDate(post.updatedAt)}</div>
          <div className="text-4xl">{post.title}</div>
          <div className="text-xl text-justify pt-4 mr-16">{post.description}</div>
        </div>
      </div>
    </Link>
  );
}
