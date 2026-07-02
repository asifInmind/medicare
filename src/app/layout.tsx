import type { Metadata } from "next";
import { Mukta } from "next/font/google";
import "./globals.css";

const mukta = Mukta({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mukta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medicare",
  description:
    "Secure healthcare provider portal for patient management and clinical workflows.",
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: "icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${mukta.variable} h-full antialiased font-sans`}
    >
      <body>{children}</body>
    </html>
  );
}
