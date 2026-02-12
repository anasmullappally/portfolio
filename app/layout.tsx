import type { Metadata } from "next";
import { Anton, Roboto_Flex } from "next/font/google";
import { ReactLenis } from "lenis/react";

import "lenis/dist/lenis.css";
import "./globals.css";

import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import StickyEmail from "@/components/StickyEmail";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";
import StructuredData from "@/components/StructuredData";

import { ThemeProvider } from "@/components/ThemeProvider";

const antonFont = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const robotoFlex = Roboto_Flex({
  weight: ["100", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-roboto-flex",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anasmullappally.com"),
  title: {
    default: "Anas Mullappally | Full Stack Developer",
    template: "%s | Anas Mullappally",
  },
  description:
    "Personal portfolio of Anas Mullappally - Full Stack Developer specializing in modern, high-performance web applications using Next.js, React, and Node.js.",
  keywords: [
    "Anas Mullappally",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Tailwind CSS",
    "GSAP Animations",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Anas Mullappally", url: "https://anasmullappally.com" }],
  creator: "Anas Mullappally",
  openGraph: {
    title: "Anas Mullappally | Full Stack Developer",
    description:
      "Explore the portfolio of Anas Mullappally, a Full Stack Developer dedicated to building scalable and user-centric web solutions.",
    url: "https://anasmullappally.com",
    siteName: "Anas Mullappally Portfolio",
    images: [
      {
        url: "/og-image.png", // Ensure this image exists in public folder
        width: 1200,
        height: 630,
        alt: "Anas Mullappally Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anas Mullappally | Full Stack Developer",
    description: "Full Stack Developer specializing in modern web applications.",
    images: ["/og-image.png"],
    creator: "@anasmullappally", // Replace with real handle if known
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://anasmullappally.com",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${antonFont.variable} ${robotoFlex.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactLenis
            root
            options={{
              lerp: 0.1,
              duration: 1.4,
            }}
          >
            <Navbar />
            <Preloader />
            <CustomCursor />
            <main className="relative z-10">{children}</main>
            <ParticleBackground />
            <ScrollProgressIndicator />
            <StickyEmail />
            <Footer />
          </ReactLenis>
        </ThemeProvider>
      </body>
    </html>
  );
}

