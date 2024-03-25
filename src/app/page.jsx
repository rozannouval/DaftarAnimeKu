import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";
import CharList from "@/components/CharList";
import { getApiData } from "@/lib/api-libs";
import Schedules from "@/components/Schedules";
import SeasonUpComing from "@/components/SeasonUpComing";

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
    `filter=${hariIni}&kids=false&limit=5&page=1&sfw=true`
  );

  // Mendapatkan data anime teratas
  const topAnime = await getApiData("top/anime", "limit=5&sfw=true");

  // Mendapatkan data karakter teratas
  const topChar = await getApiData("top/characters", "limit=10");

  // Mendapatkan data karakter teratas
  const upComing = await getApiData("seasons/upcoming", "limit=10");

  return (
    <div className="bg-slate-200 dark:bg-slate-800">
      <section>
      <Header
          title="MUSIM YANG AKAN DATANG..."
          linkHref="/upComing"
          linkTitle="Lihat Semua"
        />
        <SeasonUpComing api={upComing} />
      </section>
      <section>
        <Header
          title="ANIME TERBARU"
          linkHref="/schedules"
          linkTitle="Lihat Semua"
        />
        <Schedules api={schedules} />
      </section>
      <section>
        <Header
          title="PERINGKAT TERATAS"
          linkHref="/topAnime"
          linkTitle="Lihat Semua"
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header
          title="KARAKTER TERPOPULER"
          linkHref="/topCharacters"
          linkTitle="Lihat Semua"
        />
        <CharList api={topChar} />
      </section>
    </div>
  );
}
