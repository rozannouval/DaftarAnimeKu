import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";
import CharList from "@/components/CharList";
import { getApiData, getNestedApiData } from "@/lib/api-libs";
import Schedules from "@/components/Schedules";
import SeasonUpComing from "@/components/SeasonUpComing";

import Banner from "@/assets/img/banner.png";
import Image from "next/image";
import Rekomendasi from "@/components/Rekomendasi";

export default async function Page() {
  // Mendapatkan hari ini dalam format yang sesuai dengan API Anda
  const daysOfWeek = [
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
  );

  let rekomendasi = await getNestedApiData("recommendations/anime", "entry")
  rekomendasi = {data: rekomendasi.slice(0, 5)}

  // Mendapatkan data anime teratas
  const topAnime = await getApiData("top/anime", "limit=5&sfw=true");

  // Mendapatkan data karakter teratas
  const topChar = await getApiData("top/characters", "limit=5&sfw=true");

  // Mendapatkan data karakter teratas
  const upComing = await getApiData("seasons/upcoming", "limit=10&sfw=true");

  return (
    <div className="bg-slate-200 dark:bg-slate-800 pt-2 pb-4">
      <div className="flex items-center mx-0 font-bold tracking-wider">
        <Image
          src={Banner}
          width={1000}
          height={1000}
          className="w-full h-64 border-8 object-cover border-gray-700"
        />
      </div>
      <section className="py-2">
      <Header
          title="MUSIM YANG AKAN DATANG..."
          linkHref="/anime/upComing"
          linkTitle="Lihat Semua"
        />
        <SeasonUpComing api={upComing} />
      </section>
      <section className="py-2">
        <Header
          title="REKOMENDASI ANIME UNTUK ANDA..."
        />
        <Rekomendasi api={rekomendasi} />
      </section>
      <section className="py-2">
        <Header
          title="ANIME TERBARU"
          linkHref="/anime/schedules"
          linkTitle="Lihat Semua"
        />
        <Schedules api={schedules} />
      </section>
      <section className="py-2">
        <Header
          title="PERINGKAT TERATAS"
          linkHref="/anime/topAnime"
          linkTitle="Lihat Semua"
        />
        <AnimeList api={topAnime} />
      </section>
      <section className="py-2">
        <Header
          title="KARAKTER TERPOPULER"
          linkHref="/characters/topCharacters"
          linkTitle="Lihat Semua"
        />
        <CharList api={topChar} />
      </section>
    </div>
  );
}
