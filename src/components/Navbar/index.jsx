import Link from "next/link";
import InputSearch from "./inputSearch";

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
    <header className="">
      <div className="flex md:flex-row justify-between md:items-center p-4 gap-2 text-purple-800 bg-white dark:bg-slate-200 sm:px-0 md:px-8 lg:px-16 xl:px-32 2xl:px-64 px-1 bg-gradient-to-t from-slate-300">
        <Link href="/" className="flex dark:text-black">
          <h1 className="font-bold text-3xl font-sans">DaftarAnimeKu</h1>
          <p className="font-normal font-sans">1st</p>
        </Link>
        <h1 className="font-bold text-3xl font-sans">Anime & Manga</h1>
      </div>

      <div className="flex items-center justify-between dark:bg-black bg-fuchsia-600 text-white sm:mx-0 md:mx-8 lg:mx-16 xl:mx-32 2xl:mx-64 mx-0 font-bold tracking-wider">
        <div className="flex items-center">
          <Menubar className="bg-transparent border-none gap- p-0">
            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer py-2.5 px-4 hover:bg-slate-200 hover:text-black rounded-none">
                <h3 className="text-xl">Anime</h3>
              </MenubarTrigger>
              <MenubarContent>
                <Link href="/" className="hover:bg-slate-200 hover:text-black ">
                  <MenubarItem className="cursor-pointer">
                    <h3>Beranda - Anime</h3>
                  </MenubarItem>
                </Link>
                <Link
                  href="/topAnime"
                  className="hover:bg-slate-200 hover:text-black "
                >
                  <MenubarItem className="cursor-pointer">
                    <h3>Peringkat Anime</h3>
                  </MenubarItem>
                </Link>
                <Link
                  href="/topCharacter"
                  className="hover:bg-slate-200 hover:text-black "
                >
                  <MenubarItem className="cursor-pointer">
                    <h3>Karakter Terpopuler</h3>
                  </MenubarItem>
                </Link>
                <MenubarSeparator />
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer py-2.5 px-4 hover:bg-slate-200 hover:text-black rounded-none">
                <h3 className="text-xl">Manga</h3>
              </MenubarTrigger>
              <MenubarContent>
                <Link
                  href="/manga"
                  className="hover:bg-slate-200 hover:text-black "
                >
                  <MenubarItem className="cursor-pointer">
                    <h3>Beranda - Manga</h3>
                  </MenubarItem>
                </Link>
                <Link
                  href="/manga/topManga"
                  className="hover:bg-slate-200 hover:text-black "
                >
                  <MenubarItem className="cursor-pointer">
                    <h3>Peringkat Manga</h3>
                  </MenubarItem>
                </Link>
                <Link
                  href="/manga/MangaPopuler"
                  className="hover:bg-slate-200 hover:text-black "
                >
                  <MenubarItem className="cursor-pointer">
                    <h3>Manga Terpopuler</h3>
                  </MenubarItem>
                </Link>
                <MenubarSeparator />
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer py-2.5 px-4 hover:bg-slate-200 hover:text-black rounded-none">
                <h3 className="text-xl">Bantuan</h3>
              </MenubarTrigger>
              <MenubarContent>
                <Link href="/" className="hover:bg-slate-200 hover:text-black ">
                  <MenubarItem className="cursor-pointer">
                    <h3>Tentang</h3>
                  </MenubarItem>
                </Link>
                <Link
                  href="/topAnime"
                  className="hover:bg-slate-200 hover:text-black "
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