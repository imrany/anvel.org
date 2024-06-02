import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link"
import { FaGithub } from "react-icons/fa";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anvel - Share files with easy.",
  description: "Share files with easy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="h-[50px] text-[13px] border-b-[1px] border-gray-200 px-8">
            <div className="flex items-center justify-between h-full">
                <div className="flex items-center gap-x-5">
                    <Link href="/">
                    <Image
                        className="mr-5"
                        src="/anvel.png"
                        alt="Next.js Logo"
                        width={80}
                        height={27}
                        priority
                    />
                    </Link>
                    <Link href="/learn">Learn</Link>
                    <Link href="/about">About</Link>
                    <Link href="/download">Download</Link>
                    <Link href="/blog">Blog</Link>
                </div>
                <div className="flex items-center gap-x-5">
                    <a href="https://github.com/imrany/anvel" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-xl text-gray-500 hover:text-black"/>
                    </a>
                </div>
            </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
