import Link from "next/link";
import InputSearch from "./inputSearch";

import Logo from "@/app/favicon.ico";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="">
      <div className="flex md:flex-row justify-start md:items-center p-8 gap-2 text-blue-700 dark:bg-slate-200 bg-blue-100 text-5xl">
        <Link href="/" className="flex items-center gap-2 dark:text-black">
          <h1 className="font-extrabold font-mono">DaftarAnimeKu</h1>
        </Link>
      </div>

      <div className="px-4 flex items-center justify-between dark:bg-black bg-blue-700 text-slate-50 font-bold tracking-wider">
        <div className="flex items-center">
          <Menubar className="bg-transparent border-none p-0">
            <MenubarMenu>
              <MenubarTrigger className="py-2.5 px-4 hover:bg-blue-100 hover:text-black rounded-none">
                <h3 className="text-xl font-bold font-serif">Anime</h3>
              </MenubarTrigger>
              <MenubarContent>
                <Link href="/" className="hover:bg-blue-100 hover:text-black ">
                  <MenubarItem className="cursor-pointer">
                    <h3>Beranda - Anime</h3>
                  </MenubarItem>
                </Link>
                <Link
                  href="/anime/topAnime"
                  className="hover:bg-blue-100 hover:text-black "
                >
                  <MenubarItem className="cursor-pointer">
                    <h3>Peringkat Anime</h3>
                  </MenubarItem>
                </Link>
                <Link
                  href="/characters/topCharacters"
                  className="hover:bg-blue-100 hover:text-black "
                >
                  <MenubarItem className="cursor-pointer">
                    <h3>Karakter Terpopuler</h3>
                  </MenubarItem>
                </Link>
                <MenubarSeparator />
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger className="py-2.5 px-4 hover:bg-blue-100 hover:text-black rounded-none">
                <h3 className="text-xl font-bold font-serif">Manga</h3>
              </MenubarTrigger>
              <MenubarContent>
                <Link
                  href="/manga"
                  className="hover:bg-blue-100 hover:text-black "
                >
                  <MenubarItem className="cursor-pointer">
                    <h3>Beranda - Manga</h3>
                  </MenubarItem>
                </Link>
                <Link
                  href="/manga/topManga"
                  className="hover:bg-blue-100 hover:text-black "
                >
                  <MenubarItem className="cursor-pointer">
                    <h3>Peringkat Manga</h3>
                  </MenubarItem>
                </Link>
                <Link
                  href="/manga/MangaPopuler"
                  className="hover:bg-blue-100 hover:text-black "
                >
                  <MenubarItem className="cursor-pointer">
                    <h3>Manga Terpopuler</h3>
                  </MenubarItem>
                </Link>
                <MenubarSeparator />
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className="py-2.5 px-4 hover:bg-blue-100 hover:text-black rounded-none">
                <h3 className="text-xl font-bold font-serif">Bantuan</h3>
              </MenubarTrigger>
              <MenubarContent>
                <Link href="/" className="hover:bg-blue-100 hover:text-black ">
                  <MenubarItem className="cursor-pointer">
                    <h3>Tentang</h3>
                  </MenubarItem>
                </Link>
                <Link
                  href="/topAnime"
                  className="hover:bg-blue-100 hover:text-black "
                >
                  <MenubarItem className="cursor-pointer">
                    <h3>Hubungi Kami</h3>
                  </MenubarItem>
                </Link>
                <MenubarSeparator />
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
        <div className="p-2">
          <InputSearch />
        </div>
      </div>
    </header>
  );
}
