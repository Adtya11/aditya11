import { fetchPost, insertPost } from "@/app/db/queries";
import { InsertPost as Post } from "@/app/db/schema";
import PostLayout, {
  renderDate,
  renderHeading,
  renderTextBlock,
  renderTitle,
  renderUrlText,
  renderSpace,
  renderEmbedApp,
  renderTypeScriptCodeSnippet,
  renderSpecialWord,
  renderBulletPoint,
} from "./postLayout";
import reactElementToJSXString from "react-element-to-jsx-string";
import parse from "html-react-parser";
import { parseDate } from "./utils";
import { headers } from 'next/headers'

type paramsType = {
  post: string;
};

export default async function Page({ params }: { params: paramsType }) {
  const header = headers()
  const ip = (header.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]
  const post: Post = (await fetchPost(params.post))[0];
  return <PostLayout child={parse(post.content)} ip={ip} />;
}
