import Header from "@/components/AnimeList/Header";
import { getApiData, getNestedApiData } from "@/lib/api-libs";
import SeasonUpComing from "@/components/SeasonUpComing";

import Banner from "@/assets/img/banner.png";
import Image from "next/image";
import Rekomendasi from "@/components/Rekomendasi";
import MangaList from "@/components/MangaList";

export default async function Page() {
  // Mendapatkan hari ini dalam format yang sesuai dengan API Anda
  /* const daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const today = new Date().getDay();
  const hariIni = daysOfWeek[today];

  // Mendapatkan data jadwal untuk hari ini
  const schedules = await getApiData(
    "schedules",
    `filter=${hariIni}&kids=false&limit=5&sfw=true`
  ); */

  let rekomendasi = await getNestedApiData("recommendations/anime", "entry")
  rekomendasi = { data: rekomendasi.slice(0, 5) };

  const topAnime = await getApiData("top/anime", "limit=5&sfw=true");

  const upComing = await getApiData("seasons/upcoming", "limit=5");

  return (
    <div className="bg-blue-100 border-x border-slate-500 dark:bg-slate-800 pt-2 pb-4">
      <div className="flex items-center mx-0 font-bold tracking-wider px-2">
        <Image
          src={Banner}
          alt={Banner}
          width={1000}
          height={1000}
          className="w-full h-64 border-8 object-cover border-gray-700"
        />
      </div>

      <section className="py-2 px-4 m-2 font-bold text-xl font-serif text-blue-800 bg-blue-300">
        <h1>Selamat Datang di DaftarAnimeKu!</h1>
      </section>

      <section className="py-2">
        <Header
          title="PERINGKAT TERATAS"
          linkHref="/anime/topAnime"
          linkTitle="Lihat Semua"
        />
        <MangaList api={topAnime} />
      </section>

      <section className="py-2">
        <Header
          title="MUSIM YANG AKAN DATANG..."
          linkHref="/anime/upComing"
          linkTitle="Lihat Semua"
        />
        <SeasonUpComing api={upComing} />
      </section>

      <section className="py-2">
        <Header title="DIREKOMENDASIKAN" />
        <Rekomendasi api={rekomendasi} />
      </section>
    </div>
  );
}
