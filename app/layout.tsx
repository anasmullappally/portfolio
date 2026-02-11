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
  title: "Anas Mullappally | Full Stack Developer",
  description:
    "Personal portfolio of Anas Mullappally - Full Stack Developer specializing in modern web applications.",
  keywords: ["Anas Mullappally", "Full Stack Developer", "Next.js Developer"],
  authors: [{ name: "Anas Mullappally" }],
  openGraph: {
    title: "Anas Mullappally | Portfolio",
    description:
      "Explore projects and experience of Anas Mullappally, Full Stack Developer.",
    type: "website",
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

