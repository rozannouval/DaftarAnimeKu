import Link from "next/link";

export default function Header({ title, linkHref, linkTitle }) {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="md:text-2xl text-xl font-bold">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="md:text-xl text-sm no-underline hover:text-indigo-500 transition all"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
}
