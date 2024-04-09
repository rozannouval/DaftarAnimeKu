import Header from "@/components/AnimeList/Header";
import { getApiData } from "@/lib/api-libs";
import MangaList from "@/components/GeneralList";

export default async function Page({ params }) {
  const { keyword } = params;

  const decodeKeyword = decodeURI(keyword); //agar keyword Enter tidak %20

  const searchAnime = await getApiData("anime", `q=${decodeKeyword}&sfw=true`);

  return (
    <div className="bg-slate-200 dark:bg-slate-800 min-h-screen">
      <section>
        <Header title={`Hasil dari pencarian ${decodeKeyword}...`} />
        <MangaList api={searchAnime} />
      </section>
    </div>
  );
}
