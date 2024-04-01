"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function InputSearch() {
  const searchRef = useRef();
  const router = useRouter();

  const HandleSearch = (event) => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() == "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();

      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative text-black">
      <input
        placeholder="Cari..."
        ref={searchRef}
        className="dark:bg-slate-800 p-1 rounded w-full"
        onKeyDown={HandleSearch}
      />
      <button onClick={HandleSearch} className="absolute top-1 end-1">
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
}
