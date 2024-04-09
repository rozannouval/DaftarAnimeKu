"use client";

import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

export default function NotFound({ }) {
  const textNotFound = "HALAMAN TIDAK DITEMUKAN..."
  return (
    <div className="bg-slate-200 dark:bg-slate-800 min-h-screen mx-auto flex justify-center items-center">
      <div className="flex flex-col justify-center items-center text-center">
        <FileSearch size={100} />
        <h1 className="font-bold text-2xl m-8">{textNotFound}</h1>
        <Link
          href="/"
          className="p-3 px-6 rounded bg-slate-800 dark:bg-slate-200 text-slate-200 dark:text-slate-800"
        >
          Kembali
        </Link>
      </div>
    </div>
  );
}
