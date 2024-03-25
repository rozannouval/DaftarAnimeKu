import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Button from "@/components/Utilities/Button";
import Footer from "@/components/Footer";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "DaftarAnimeKu - Anime",
  description: "dibuat oleh RN dari Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${gabarito.className} text-slate-700 dark:text-slate-100`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        <div className="dark:bg-black sm:px-0 md:px-8 lg:px-16 xl:px-32 2xl:px-64 px-0">
          {children}
          <Button />
        </div>
        <Footer />
      </body>
    </html>
  );
}
