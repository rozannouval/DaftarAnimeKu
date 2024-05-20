import { Calendar, Users } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import FormatNumber from "@/lib/FormatNumber";

export default function SeasonUpComing({ api }) {
  const sortedAnimeData = api.data?.slice(0, 25);
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-5 grid-cols-2 gap-4 px-4 pb-4">
      {sortedAnimeData?.map((anime, index) => {
        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            passHref
            className="cursor-pointer hover:text-indigo-800 transition-all border-2 border-primary-blue rounded-lg"
            key={index}
          >
            <div className="relative z-40 rounded-lg">
              <Image
                src={anime.images.webp.image_url}
                alt={anime.title}
                width={1000}
                height={1000}
                className="w-full h-64 sm:h-64 md:h-72 xl:h-80 object-cover rounded-lg"
              />
              <div className="absolute z-30 top-0 left-0 w-full bg-gradient-to-b from-black text-white">
                <h2
                  className="flex items-center justify-center text-center gap-2 font-bold pb-10 px-2 text-md md:text-lg font-sans "
                >
                  <Calendar /> {anime.aired.prop.from.day} -
                  {anime.aired.prop.from.month} -{anime.aired.prop.from.year}
                </h2>
              </div>

              <div className="absolute z-20 bottom-0 left-0 w-full bg-gradient-to-t from-black">
                <h2 className="text-white font-bold pt-8 mt-10 pb-1 px-2 text-md md:text-lg font-sans">
                  {anime.title}
                </h2>
              </div>

              <div className="absolute z-30 inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity"></div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
