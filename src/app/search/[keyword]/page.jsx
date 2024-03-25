import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";
import { getApiData } from "@/lib/api-libs";

export default async function Page({ params }) {
  const { keyword } = params;

  const decodeKeyword = decodeURI(keyword); //agar keyword Enter tidak %20

  const searchAnime = await getApiData("anime", `q=${decodeKeyword}&sfw=true`);

  return (
    <div className="bg-slate-200 dark:bg-slate-800 min-h-screen">
      <section>
        <Header title={`Hasil dari pencarian ${decodeKeyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </div>
  );
}
