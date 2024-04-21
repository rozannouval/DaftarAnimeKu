import { getApiData } from "@/lib/api-libs";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const topAnime = await getApiData("top/anime", "limit=5&sfw=true");

  const sortedAnimeData = topAnime.data?.sort((a, b) => a.rank - b.rank);
  return (
    <div className="px-4 py-4">
        <h3 className="font-bold text-3xl font-sans">Kumpulan Koleksi Saya</h3>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-5 grid-cols-2 gap-4 py-4 min-h-screen">
        {sortedAnimeData?.map((anime, index) => {
          return (
            <Link
              href={`/anime/${anime.mal_id}`}
              passHref
              className="cursor-pointer hover:text-indigo-800 transition-all"
              key={index}
            >
              <div className="relative border-2 border-blue-900 rounded">
                <Image
                  src={anime.images.webp.image_url}
                  alt={anime.title}
                  width={1000}
                  height={1000}
                  className="w-full h-64 sm:h-64 md:h-72 xl:h-80 object-cover"
                />

                <h2 className="absolute z-10 bottom-0 left-0 bg-gradient-to-t from-black text-white font-bold pb-1 pt-6 px-2 text-md md:text-lg">
                  {anime.title}
                </h2>

                <div className="absolute z-40 inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity"></div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
