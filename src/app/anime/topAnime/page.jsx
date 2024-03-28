"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { getApiData } from "@/lib/api-libs";
import { useEffect, useState } from "react";

export default function Page() {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const data = await getApiData("top/anime", `page=${page}&sfw=true`)
    setTopAnime(data);
  };

  useEffect (() => {
      fetchData();
    },
    [page]);

  return (
    <div className="dark:bg-slate-800 bg-slate-200 min-h-screen">
      <HeaderMenu title={`Top Anime Teratas`} count={`halaman ke ${page}`}/>
      <AnimeList api={topAnime} />
      <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage} />
    </div>
  );
}
