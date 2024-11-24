"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { dancingScript } from "@/fonts";

const inter = Inter({ subsets: ["latin"] });

const NavBar = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState(0);
  const [boxShadow, setBoxShadow] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setClientWindowHeight(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 400;

    if (backgroundTransparacyVar < 1) {
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  return (
    <div
      className="w-full backdrop-blur sticky top-0 left-0"
      style={{
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
      }}
    >
      <nav className="py-8 text-lg">
        <ul className="flex">
          <div className="flex w-4/6 mx-10">
            <li
              className={dancingScript.className}
              style={{ fontSize: 30, fontWeight: "bold", marginLeft: 190 }}
            >
              <Link href="/">Aditya</Link>
            </li>
          </div>
          <div className="flex w-2/6 text-gray-600 justify-center">
            <li className="w-1/3 hover:text-black">
              <Link href="/posts">Posts</Link>
            </li>
            <li className="w-1/3 hover:text-black">
              <Link href="/">Videos</Link>
            </li>
            <li className="w-1/3 hover:text-black">
              <Link href="/">About Me</Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

const DividerLine = () => <hr />;
const Footer = () => {
  return (
    <>
      <DividerLine />
      <div className="flex ml-40 py-4" id="footer">
        {renderFooterImageTile(
          "/github.svg",
          "github",
          "https://github.com/Adtya11"
        )}
        {renderFooterImageTile(
          "/linkedin.svg",
          "linkedin",
          "https://www.linkedin.com/in/adityasrivastava11/inkedin"
        )}
        {renderFooterImageTile(
          "/stack-overflow.svg",
          "stackoverflow",
          "https://stackoverflow.com/users/12202820/aditya-srivastava"
        )}
        {renderFooterImageTile(
          "/twitter.svg",
          "twitter",
          "https://twitter.com/shivashi_11"
        )}
        {renderFooterImageTile("/youtube.svg", "youtube", "")}
      </div>
      <div />
    </>
  );
};
const renderFooterImageTile = (src: string, alt: string, url: string) => {
  return (
    <a href={url} target="_blank">
      <button type="button" className="px-3 py-2 hover:bg-gray-100 rounded-lg">
        <Image src={src} width={30} height={30} alt={alt} />
      </button>
    </a>
  );
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=0.1"
          />
        </head>
        <body className={`${inter.className} min-w-[1024px]`}>
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
