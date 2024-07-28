import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KukuFM Landing Page",
  description: "Discover the latest and greatest in music with KukuFM. Explore categories like Motivation, Horror, Love, New Releases, and more.",
  keywords: "KukuFM, music, Motivation, Horror, Love, New Releases, Top Hits, Classics",
  author: "Your Name or Company",
  openGraph: {
    title: "KukuFM Landing Page",
    description: "Discover the latest and greatest in music with KukuFM. Explore categories like Motivation, Horror, Love, New Releases, and more.",
    url: "https://kukufm.com/",
    image: "/images/og-image.jpg",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "KukuFM Landing Page",
    description: "Discover the latest and greatest in music with KukuFM. Explore categories like Motivation, Horror, Love, New Releases, and more.",
    image: "/images/twitter-image.jpg"
  }
};

export default function RootLayout({ children }) {
  const { title, description, keywords, author, openGraph, twitter } = metadata;

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <meta property="og:title" content={openGraph.title} />
        <meta property="og:description" content={openGraph.description} />
        <meta property="og:url" content={openGraph.url} />
        <meta property="og:image" content={openGraph.image} />
        <meta property="og:type" content={openGraph.type} />
        <meta name="twitter:card" content={twitter.card} />
        <meta name="twitter:site" content={twitter.site} />
        <meta name="twitter:title" content={twitter.title} />
        <meta name="twitter:description" content={twitter.description} />
        <meta name="twitter:image" content={twitter.image} />
        <title>{title}</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
