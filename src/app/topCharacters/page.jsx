"use client";

import CharList from "@/components/CharList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";

import { getApiData } from "@/lib/api-libs";

export default function Page() {
  const [page, setPage] = useState(1);
  const [topChar, setTopChar] = useState({});

  const fetchData = async () => {
    const data = await getApiData("top/characters", `page=${page}`);

    setTopChar(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="dark:bg-slate-800 bg-slate-200 min-h-screen">
      <HeaderMenu title={`KARAKTER POPULER`} count={`halaman ke ${page}`} />
      <CharList api={topChar} />
      <Pagination page={page} lastPage={topChar.pagination?.last_visible_page} setPage={setPage} />
    </div>
  );
}
