import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Felipe Gonçalves — Portfolio",
    template: "%s — Felipe Gonçalves",
  },
  description:
    "Felipe Gonçalves — Engineering, Software Development and Machine Learning.",
};

export const viewport: Viewport = {
  themeColor: "#050d14",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <div className="page">
          <main className="page-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
