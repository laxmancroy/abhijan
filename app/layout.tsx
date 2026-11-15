import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const PoppinsFont = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Abhijan",
  description: "A education platform for diploma job preperation students.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${PoppinsFont.variable} antialiased`}
    >
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
