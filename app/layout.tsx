import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://johnjudge.me"),
  title: "John Judge | Software Engineer",
  description:
    "Premium personal website for John Judge. Placeholder content is in place now, with resume and project narratives ready for a later content pass.",
  alternates: {
    canonical: "https://johnjudge.me",
  },
  openGraph: {
    title: "John Judge | Software Engineer",
    description:
      "Premium personal website for John Judge with placeholder content wired into a polished single-page experience.",
    url: "https://johnjudge.me",
    siteName: "JohnJudge.me",
    type: "website",
    images: [
      {
        url: "/og-card.svg",
        width: 1200,
        height: 630,
        alt: "John Judge personal website preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Judge | Software Engineer",
    description:
      "Premium personal website for John Judge with placeholder content and a polished single-page layout.",
    images: ["/og-card.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

