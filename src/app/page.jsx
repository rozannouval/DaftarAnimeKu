import Header from "@/components/AnimeList/Header";
import { getApiData } from "@/lib/api-libs";
import SeasonUpComing from "@/components/SeasonUpComing";

import Banner from "@/assets/img/banner.png";
import Image from "next/image";
import GeneralList from "@/components/GeneralList";

export default async function Page() {
  const topAnime = await getApiData("top/anime", "limit=5&sfw=true");

  const upComing = await getApiData("seasons/upcoming", "limit=5&sfw=true");

  return (
    <div className="bg-slate-200 dark:bg-slate-800 pt-2 pb-4">
      <div className="flex items-center justify-center mx-0 font-bold tracking-wider px-2">
        <Image
          src={Banner}
          alt={Banner}
          width={1000}
          height={1000}
          className="border-8 object-cover border-gray-700"
        />
      </div>

      <section className="py-2 m-2 font-bold text-xl font-serif text-blue-800 bg-blue-300 text-center">
        <h1 className="container xl:mx-auto">
          Selamat Datang di DaftarAnimeKu!
        </h1>
      </section>

      <section className="py-2 md:container mx-0 md:mx-auto">
        <div className="bg-primary-purple text-white p-4 rounded-lg">
          <Header
            title="PERINGKAT TERATAS"
            linkHref="/anime/topAnime"
            linkTitle="Lihat Semua"
          />
          <GeneralList api={topAnime} />
        </div>
      </section>

      <section className="py-2 md:container mx-0 md:mx-auto">
        <div className="p-4 bg-primary-purple text-white rounded-lg">
        <Header
          title="MUSIM YANG AKAN DATANG..."
          linkHref="/anime/upComing"
          linkTitle="Lihat Semua"
        />
        <SeasonUpComing api={upComing} />
        </div>
      </section>
    </div>
  );
}
