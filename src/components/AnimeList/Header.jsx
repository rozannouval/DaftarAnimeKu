import Link from "next/link";

export default function Header({ title, linkHref, linkTitle }) {
  return (
    <div className="flex justify-between flex-col sm:flex-row items-center p-4">
      <h1 className="sm:text-2xl text-xl font-bold">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="sm:text-xl text-sm text-blue-800 hover:text-indigo-500 transition all"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
}
