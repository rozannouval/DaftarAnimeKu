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
        <div className="px-4 flex items-center justify-between flex-col-reverse sm:flex-row dark:bg-black font-bold tracking-wider container mx-auto">
          <div className="flex items-center">
            <Menubar className="bg-transparent border-none p-0">
              <MenubarMenu>
                <MenubarTrigger className="py-2.5 px-4 hover:bg-blue-100 hover:text-black rounded-none">
                  <h3 className="text-xl font-bold font-serif">Anime</h3>
                </MenubarTrigger>
                <MenubarContent>
                  <Link
                    href="/"
                    className="hover:bg-blue-100 hover:text-black "
                  >
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
                  <MenubarSeparator />
                </MenubarContent>
              </MenubarMenu>

              <Link
                href="/characters"
                className="py-2.5 px-4 hover:bg-blue-100 hover:text-black rounded-none"
              >
                <h3 className="text-xl font-bold font-serif">Karakter</h3>
              </Link>

              <MenubarMenu>
                <MenubarTrigger className="py-2.5 px-4 hover:bg-blue-100 hover:text-black rounded-none">
                  <h3 className="text-xl font-bold font-serif">Bantuan</h3>
                </MenubarTrigger>
                <MenubarContent>
                  <Link
                    href="/"
                    className="hover:bg-blue-100 hover:text-black "
                  >
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
      </div>
    </header>
  );
}
