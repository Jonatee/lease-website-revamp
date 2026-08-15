import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CRE Advisory Firm - AvinellCantagali",
  description:
    "Capital Advisory | Lagos | Purpose-Built to Bridge Capital. We are a trusted bridge between capital and opportunity.",
  openGraph: {
    title: "CRE Advisory Firm - AvinellCantagali",
    description:
      "Capital Advisory | Lagos | Purpose-Built to Bridge Capital. We are a trusted bridge between capital and opportunity.",
    type: "website",
    url: "https://avinellcantagali.com/",
    siteName: "AvinellCantagali",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRE Advisory Firm - AvinellCantagali",
    description:
      "Capital Advisory | Lagos | Purpose-Built to Bridge Capital. We are a trusted bridge between capital and opportunity.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-US"
      className={`${dmSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
