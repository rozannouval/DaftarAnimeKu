import Header from "@/components/AnimeList/Header";
import { getApiData } from "@/lib/api-libs";
import MangaList from "@/components/MangaList";

export default async function Page() {
  const topManga = await getApiData("top/manga", `limit=10&type=lightnovel`);

  return (
    <div className="bg-slate-200 dark:bg-slate-800">
      <section className="pb-4">
        <Header
          title="LIGHT NOVEL PERINGKAT TERATAS"
          linkHref="/manga/topLightNovel"
          linkTitle="Lihat Semua"
        />
        <MangaList api={topManga} />
      </section>
    </div>
  );
}
