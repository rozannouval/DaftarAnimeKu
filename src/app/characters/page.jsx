import CharList from "@/components/CharList";

import { getApiData } from "@/lib/api-libs";
import Header from "@/components/AnimeList/Header";

export default async function Page() {

    const topChar = await getApiData("top/characters", `limit=10`);

  return (
    <div className="min-h-screen bg-slate-200 border-x border-slate-500 dark:bg-slate-800 pt-2 pb-4">
      <Header title={`KARAKTER POPULER`} linkHref="/characters/topCharacters"
          linkTitle="Lihat Semua"/>
      <CharList api={topChar} />
    </div>
  );
}
