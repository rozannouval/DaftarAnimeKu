import Header from "@/components/AnimeList/Header";
import { getApiData } from "@/lib/api-libs";
import { Crown, Star } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
// import GeneralList from "@/components/GeneralList";
import Link from "next/link";

export default async function Page({ params }) {
  const { keyword } = params;

  const decodeKeyword = decodeURI(keyword); //agar keyword Enter tidak %20

  const searchAnime = await getApiData("anime", `q=${decodeKeyword}&sfw=true`);
  const sortedAnimeData = searchAnime.data?.sort((a, b) => b.score - a.score);

  return (
    <div className="bg-slate-200 dark:bg-slate-800 min-h-screen">
      <section className="container mx-auto">
        <Header title={`Hasil dari pencarian ${decodeKeyword}...`} />
        <div className="grid md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-5 grid-cols-2 gap-4 px-4 pb-4">
          {sortedAnimeData?.map((anime, index) => {
            return (
              <Link
                href={`/anime/${anime.mal_id}`}
                passHref
                className="cursor-pointer hover:text-indigo-800 transition-all border-2 border-blue-900 rounded-lg text-center"
                key={index}
              >
                <div className="relative">
                  <Image
                    src={anime.images.webp.image_url}
                    alt={anime.title}
                    width={1000}
                    height={1000}
                    className="w-full h-64 sm:h-64 md:h-72 xl:h-80 object-cover rounded-md"
                  />

                  <h2 className="absolute z-10 w-full bottom-0 left-0 bg-gradient-to-t from-black text-white font-bold pb-1 pt-6 px-2 text-md md:text-lg rounded-b-md">
                    {anime.title}
                  </h2>

                  <div className="absolute z-40 inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity rounded-md"></div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
