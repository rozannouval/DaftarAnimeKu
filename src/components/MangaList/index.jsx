import { Crown, Star } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default function MangaList({ api }) {
  // Sort anime data by rank
  const sortedAnimeData = api.data?.sort((a, b) => a.rank - b.rank);

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-5 grid-cols-2 gap-4 px-4 pb-4">
      {sortedAnimeData?.map((anime, index) => {
        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            passHref
            className="cursor-pointer hover:text-indigo-800 transition-all"
            key={index}
          >
            <div className="relative border-2 border-blue-900 rounded">

              <div className="grid md:grid-cols-2 sm:grid-cols-1 font-sans">
                <h2 className="flex items-center justify-center gap-1 px-2 bg-blue-600 text-white font-bold py-1 text-md md:text-lg border-b-2 border-blue-900">
                  <Crown className="h-6 w-6" /> {anime.rank}
                </h2>

                {/* Anime Score */}
                <h2 className="flex items-center gap-1 text-blue-700 bg-blue-100 font-bold px-4 py-1 text-md md:text-lg border-b-2 border-l-2 border-blue-900">
                  <Star className="h-5 w-5"/>
                  {anime.score}
                </h2>
              </div>

              <Image
                src={anime.images.webp.image_url}
                alt={anime.title}
                width={1000}
                height={1000}
                className="w-full h-64 sm:h-64 md:h-72 xl:h-80 object-cover"
              />

              <h2 className="absolute z-10 bottom-0 left-0 right-0 bg-gradient-to-t from-black text-white font-bold pb-1 pt-6 px-2 text-md md:text-lg">
                {anime.title}
              </h2>

              <div className="absolute z-40 inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity"></div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}