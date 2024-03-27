import { Calendar, Crown, Users } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import FormatNumber from "@/lib/FormatNumber";

export default function SeasonUpComing({ api }) {
  const sortedAnimeData = api.data?.slice(0, 25); // Mengambil 25 anime pertama
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-5 grid-cols-2 gap-4 px-4">
      {sortedAnimeData?.map((anime, index) => {
        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            passHref
            className="cursor-pointer hover:text-indigo-800 transition-all border-2 border-slate-800"
            key={index}
          >
            <div className="relative z-40">
              <Image
                src={anime.images.webp.image_url}
                alt={anime.title}
                width={1000}
                height={1000}
                className="w-full h-64 sm:h-64 md:h-72 xl:h-80 object-cover"
              />
              <h2 className="flex items-center gap-1 absolute z-30 top-0 left-0 text-white font-semibold px-2 py-1 text-md md:text-lg bg-red-600/80 border-b border-r border-black">
                <Crown /> {1 + index}
              </h2>

              <div className="absolute z-20 bottom-0 left-0 w-full bg-gradient-to-t from-black ">
                <h2 className="text-white font-bold pt-6 pb-1 px-2 text-md md:text-lg font-sans">
                  {anime.name}
                </h2>
              </div>

              <div className="absolute z-30 inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity"></div>
            </div>
            <h2 className="flex items-center gap-1 bottom-0 left-0 py-1 text-white bg-red-800 font-medium px-2 text-sm md:text-md">
              <Users />
              <FormatNumber number={anime.favorites} />
            </h2>
          </Link>
        );
      })}
    </div>
  );
}
