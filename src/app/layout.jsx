import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DaftarAnimeKu - Anime",
  description: "dibuat oleh RN dari Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body
        className={`${inter.className} text-slate-700 dark:text-slate-100`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        <div className="dark:bg-black">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
