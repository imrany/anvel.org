import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/Link"
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
        <nav className="fixed left-0 right-0 top-0 index-10 h-[45px] text-[13px] border-b-[1px] border-gray-200 px-8">
            <div className="flex items-center justify-between h-full">
                <div className="flex items-center gap-x-5">
                    <Image
                        className="mr-5"
                        src="/next.svg"
                        alt="Next.js Logo"
                        width={80}
                        height={27}
                        priority
                    />
                    <Link href="/learn">Learn</Link>
                    <Link href="/about">About</Link>
                    <Link href="/download">Download</Link>
                    <Link href="/blog">Blog</Link>
                </div>
                <div className="flex items-center gap-x-5">
                    <a href="https://github.com/imrany/anvel" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
            </div>
        </nav>
        <main>
            {children}
        </main>
      </body>
    </html>
  );
}
