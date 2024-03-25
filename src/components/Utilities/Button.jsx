import { ArrowDown } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Button() {
  return (
    <Link
      href="#footer"
      className="fixed z-20 right-0 bottom-0 m-6 p-6 float-right bg-fuchsia-800 text-slate-200 w-2 h-2 rounded-md"
    >
      <ArrowDown className="absolute top-2 left-2 right-0 w-8 h-8"/>
    </Link>
  );
}
