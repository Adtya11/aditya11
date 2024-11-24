
import { ReactNode, useEffect, useRef } from "react";
import { parseDate } from "./utils";

interface Props {
  child: ReactNode;
}

export default async function PostLayout({ child }: Props) {
  return (
    <div className="text-justify mx-auto w-7/12 mt-14">
      {child}
    </div>
  );
}

export function renderTitle(title: string) {
  return <div className="text-6xl pb-7">{title}</div>;
}

export function renderDate(date: Date) {
  return <div className="pb-2">Last updated on {parseDate(date)}</div>;
}

export function renderTextBlock(text: string) {
  return (
    <div className="inline tracking-wide text-xl leading-relaxed">{text}</div>
  );
}

export function renderUrlText(text: string, url?: string) {
  return (
    <span className="tracking-wide text-xl leading-relaxed text-pink-600">
      <a href={url} target="_blank">
        {text}
      </a>
    </span>
  );
}

export function renderHeading(text: string) {
  return <div className="text-4xl pb-6 pt-10">{text}</div>;
}

export function renderSubHeading(text: string) {
  return <div className="text-3xl pb-6 pt-10">{text}</div>;
}

export function renderSpace() {
  return <div className="mb-2"></div>;
}

export function renderEmbedApp(src: string, title: string) {
  return (
    <div className="glitch-embed-wrap mb-2 mt-2">
      <iframe
        src={src}
        title={title}
        allow="geolocation; microphone; camera; midi; encrypted-media; xr-spatial-tracking; fullscreen"
        allowFullScreen
        width="100%"
        height="450vh"
      ></iframe>
    </div>
  );
}

export const renderTypeScriptCodeSnippet = (code: string) => {
  return (
    <div className="mb-2 mt-2">
      <div className="bg-gray-50 text-black rounded-md">
        <pre className="whitespace-pre-wrap">{code}</pre>
      </div>
    </div>
  );
};

export function renderSpecialWord(text: string) {
  return (
    <span className="tracking-wide text-xl leading-relaxed text-blue-500">
      {text}
    </span>
  );
}

export function renderBulletPoint(text: string) {
  return (
    <ul className="list-disc pl-5">
      <li className="tracking-wide text-xl leading-relaxed">{text}</li>
    </ul>
  );
}

export function renderImage(url: string, title: string) {
  return (<>
    <img 
  src={url} 
  alt="Styled Image" 
  style={{ width: '300px', height: 'auto', borderRadius: '10px' }} 
/>
<p className="text-center">{title}</p></>
  )
}