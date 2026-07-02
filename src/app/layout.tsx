import type { Metadata } from "next";
import { Mukta } from "next/font/google";
import "./globals.css";

const mukta = Mukta({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mukta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medicare | Advanced Patient Management & Healthcare Portal",
  description:
    "Medicare is a secure, state-of-the-art digital healthcare platform connecting patients with trusted general practitioners and medical specialists. Streamline appointment scheduling, securely view electronic health records (EHR), and manage clinical diagnostics in real-time",
  icons: {
    icon: "icon.svg",
  },
  keywords: [
    "Medicare app",
    "doctor dashboard portal",
    "book doctor appointment online",
    "digital healthcare platform",
    "electronic health records provider",
    "clinical patient management software",
    "Faisalabad medical clinic",
    "telehealth consultation tracking",
    "secure patient dashboard",
  ],
  authors: [{ name: "Medicare Engineering Team" }],
  creator: "Medicare Dev Team",
  publisher: "Medicare Health Networks",

  openGraph: {
    title: "Medicare | Transforming Patient Care & Digital Clinical Workflows",
    description:
      "Access your clinical records, view live laboratory analytics, and consult securely with top healthcare professionals through the Medicare Portal.",
    url: "https://medicare-nu-ashy.vercel.app",
    siteName: "Medicare Health Portal",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-snippet": -1,
    },
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
