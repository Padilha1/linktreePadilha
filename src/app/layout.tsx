import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Matheus Padilha - Projeto Linktree",
  robots: {
    follow: true,
    index: true,
    // max-video-preview:-1,
    // max-image-preview:large,
  },
  description:
    "Projeto pessoal apenas para mostrar links úteis sobre projetos meus - Matheus Padilha",
  other: {
    "og:locale": "pt_BR",
    "og:type": "website",
    "og:description":
      "Projeto pessoal apenas para mostrar links úteis sobre projetos meus - Matheus Padilha",
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-bg-light bg-cover text-light-text dark:bg-bg-dark  dark:text-dark-text`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
