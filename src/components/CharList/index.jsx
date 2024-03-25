import { Users } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import FormatNumber from "@/lib/FormatNumber";

export default function CharList({ api }) {
  // Sort characters data by favorites
  const sortedAnimeData = api.data?.sort((a, b) => b.favorites - a.favorites);

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-5 grid-cols-2 gap-4 px-4">
      {sortedAnimeData?.map((characters, index) => {
        return (
          <Link
            href={`/characters/${characters.mal_id}/full`}
            passHref
            className="cursor-pointer hover:text-indigo-800 transition-all pb-2 hover:"
            key={index}
          >
            <div className="relative">
              <Image
                src={characters.images.webp.image_url}
                alt={characters.name}
                width={350}
                height={350}
                className="w-full h-64 sm:h-64 md:h-72 xl:h-80 object-cover pb-2 border-2 border-indigo-900"
              />
              {/* RANK */}
              <h2 className="absolute z-10 top-0 left-0 flex flex-col text-white font-bold px-2 py-1 text-md md:text-2xl bg-slate-800/75">
                # {1 + index}
              </h2>
              {/* Score */}
              <h2 className="flex items-center gap-1 absolute z-10 top-32 right-0 text-white font-medium px-2 py-1 text-sm md:text-xl bg-indigo-800/60">
                <Users />
                <FormatNumber number={characters.favorites} />
              </h2>

              <h2 className="absolute z-10 bottom-0 left-0 right-0 bg-gradient-to-t from-black text-white font-bold pb-1 pt-6 px-2 text-md md:text-xl">
                {characters.name}
              </h2>

              <div className="absolute z-20 inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity"></div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
