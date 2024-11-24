import { fetchPost, insertPost } from "@/app/db/queries";
import { InsertPost as Post } from "@/app/db/schema";
import PostLayout, {
  renderDate,
  renderHeading,
  renderTextBlock,
  renderTitle,
  renderUrlText,
  renderSpace,
  renderSubHeading,
  renderEmbedApp,
  renderTypeScriptCodeSnippet,
  renderSpecialWord,
  renderBulletPoint,
  renderImage,
} from "./postLayout";
import reactElementToJSXString from "react-element-to-jsx-string";
import parse from "html-react-parser";
import { parseDate } from "./utils";
import { headers } from "next/headers";

type paramsType = {
  post: string;
};

// const post = {
//   id: 2,
//   title: "Asynchronous JavaScript through event loop",
//   slug: "asynchronous-javascript-through-event-loop",
//   content: content,
//   description: "Asynchronous JavaScript through event loop description",
//   thumbnail: "",
//   updatedAt: new Date(2024, 11, 22),
//   tags: {
//     tags: ["event-loop", "javascript-working", 'asynchronous-programming'],
//   },
//   likes: 0,
// };

export default async function Page({ params }: { params: paramsType }) {
  const header = headers();
  // const ip = (header.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0];
  const post: Post = (await fetchPost(params.post))[0];
  //await insertPost(post);
  return <PostLayout child={parse(post.content)} />;
}
