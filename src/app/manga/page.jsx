import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";
import { getApiData } from "@/lib/api-libs";
// import Banner from "@/components/AnimeList/Banner";

export default async function Page() {
  const topManga = await getApiData("top/manga", `limit=10&type=lightnovel`);

  return (
    <div className="bg-slate-200 dark:bg-slate-800">
      <section className="pb-4">
        {/* <Banner api={topManga} /> */}
        <Header
          title="LIGHT NOVEL PERINGKAT TERATAS"
          linkHref="/manga/topLightNovel"
          linkTitle="Lihat Semua"
        />
        <AnimeList api={topManga} />
      </section>
    </div>
  );
}
