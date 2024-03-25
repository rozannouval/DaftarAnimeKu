import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";
import { getApiData } from "@/lib/api-libs";
// import Banner from "@/components/AnimeList/Banner";

export default async function Page() {
  const topManga = await getApiData("top/manga", `limit=15&sfw=true`);

  return (
    <div className="bg-slate-200 dark:bg-slate-800">
      <section>
        {/* <Banner api={topManga} /> */}
        <Header
          title="PERINGKAT TERATAS"
          linkHref="/manga/topManga"
          linkTitle="Lihat Semua"
        />
        <AnimeList api={topManga} />
      </section>
    </div>
  );
}
