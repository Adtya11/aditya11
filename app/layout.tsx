"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { dancingScript } from "@/fonts";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const inter = Inter({ subsets: ["latin"] });

const NavBar = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState(0);
  const [boxShadow, setBoxShadow] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setClientWindowHeight(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const backgroundTransparacyVar = clientWindowHeight / 400;
    if (backgroundTransparacyVar < 1) {
      setBoxShadow(backgroundTransparacyVar * 0.1);
    }
  }, [clientWindowHeight]);
  const Icon = menuOpen ? XMarkIcon : Bars3Icon;
  return (
    <div
      className="w-full backdrop-blur sticky top-0 left-0 z-50"
      style={{
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
      }}
    >
      <nav className="py-4 px-4 lg:px-8 bg-white">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className={dancingScript.className}
            style={{ fontSize: 30, fontWeight: "bold" }}
          >
            <Link href="/">Aditya</Link>
          </div>

          {/* Hamburger Button */}
          <button
            className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon className="h-6 w-6 text-gray-800" />
          </button>
          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-8 text-gray-600">
            <li className="hover:text-black">
              <Link href="/posts">Posts</Link>
            </li>
            <li className="hover:text-black">
              <Link href="/">Videos</Link>
            </li>
            <li className="hover:text-black">
              <Link href="/">About Me</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="lg:hidden mt-4 space-y-2 bg-gray-50 p-4 rounded-md">
            <li>
              <Link href="/posts" className="block py-2 hover:text-black">
                Posts
              </Link>
            </li>
            <li>
              <Link href="/" className="block py-2 hover:text-black">
                Videos
              </Link>
            </li>
            <li>
              <Link href="/" className="block py-2 hover:text-black">
                About Me
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

const DividerLine = () => <hr />;
const Footer = () => {
  return (
    <>
      <DividerLine />
      <div className="flex flex-wrap justify-center gap-4 py-4" id="footer">
        {renderFooterImageTile(
          "/github.svg",
          "github",
          "https://github.com/Adtya11"
        )}
        {renderFooterImageTile(
          "/linkedin.svg",
          "linkedin",
          "https://www.linkedin.com/in/adityasrivastava11/"
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
            content="width=device-width, initial-scale=1.0"
          />
        </head>
        <body className={`${inter.className} bg-white`}>
          <NavBar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}
