"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { getApiData } from "@/lib/api-libs";
import { useEffect, useState } from "react";

export default function Page() {
  const [page, setPage] = useState(1);
  const [topManga, setTopManga] = useState([]);

  const fetchData = async () => {
    const data = await getApiData("top/manga", `page=${page}&sfw=true`);
    setTopManga(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="dark:bg-slate-800 bg-slate-200 min-h-screen">
      <HeaderMenu title={`MANGA TERATAS`} count={`halaman ke ${page}`} />
      <AnimeList api={topManga} />
      <Pagination
        page={page}
        lastPage={topManga.pagination?.last_visible_page}
        setPage={setPage}
      />
    </div>
  );
}
