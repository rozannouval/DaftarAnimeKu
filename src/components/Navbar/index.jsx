import Link from "next/link";
import InputSearch from "./inputSearch";
import UserAuthButton from "./UserAuthButton";

import Logo from "@/app/favicon.ico";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function Navbar() {
  return (
    <header className="bg-primary-blue text-gray-200">
      <div className="flex md:flex-row flex-col justify-between items-center p-8 gap-2 container max-auto">
        <Link href="/" className="flex items-center">
          <h1 className="font-extrabold font-sans text-3xl md:text-5xl">
            DaftarAnimeKu
          </h1>
        </Link>

        <UserAuthButton/>
      </div>

      <div className="bg-primary-purple text-white">
        <div className="px-4 flex items-center justify-between flex-col md:flex-row dark:bg-black font-bold tracking-wider container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 items-center text-center w-full md:w-auto">
            <Link href="/" className="py-4 px-8 transition-all duration-500 hover:bg-primary-blue w-full md:w-auto">
              BERANDA
            </Link>
            <Link href="/anime/topAnime" className="py-4 px-8 transition-all duration-500 hover:bg-primary-blue w-full md:w-auto">
              PERINGKAT
            </Link>
            <Link href="/characters" className="py-4 px-8 transition-all duration-500 hover:bg-primary-blue w-full md:w-auto">
              KARAKTER
            </Link>
            <Link href="/Tentang" className="py-4 px-8 transition-all duration-500 hover:bg-primary-blue w-full md:w-auto">
              TENTANG
            </Link>
          </div>

          <div className="py-2 px-4 w-[90%] md:w-auto">
            <InputSearch className="w-full"/>
          </div>
        </div>
      </div>
    </header>
  );
}
