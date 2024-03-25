"use client";

import SeasonUpComing from "@/components/SeasonUpComing";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { getApiData } from "@/lib/api-libs";
import { useEffect, useState } from "react";

export default function Page() {
  const [page, setPage] = useState(1);
  const [upComing, setUpComing] = useState([]);

  const fetchData = async () => {
    const data = await getApiData("seasons/upcoming", `page=${page}&sfw=true`)
    setUpComing(data);
  };

  useEffect (() => {
      fetchData();
    },
    [page]);

  return (
    <div className="dark:bg-slate-800 bg-slate-200 min-h-screen">
      <HeaderMenu title={`MUSIM YANG AKAN DATANG`} count={`halaman ke ${page}`}/>
      <SeasonUpComing api={upComing} />
      <Pagination page={page} lastPage={upComing.pagination?.last_visible_page} setPage={setPage} />
    </div>
  );
}
