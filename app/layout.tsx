import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://johnjudge.me"),
  title: "John Judge | Software Engineer II at Microsoft",
  description:
    "John Judge is a software engineer at Microsoft focused on Azure-backed platform services, security, and reliability across the Windows driver ecosystem.",
  alternates: {
    canonical: "https://johnjudge.me",
  },
  openGraph: {
    title: "John Judge | Software Engineer II at Microsoft",
    description:
      "Software engineer at Microsoft building secure, scalable cloud-backed platform systems for the Windows driver ecosystem.",
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
    title: "John Judge | Software Engineer II at Microsoft",
    description:
      "Software engineer at Microsoft focused on Azure services, security, distributed systems, and operational excellence.",
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
