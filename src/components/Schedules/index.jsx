import Link from "next/link";
import { Clock, Star } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function Schedules({ api }) {
  const daysOfWeek = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];

  const sortedAnimeData = api.data?.sort((a, b) => b.score - a.score);

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-5 grid-cols-2 gap-4 px-4">
      {sortedAnimeData?.map((anime, index) => {
        // Mendapatkan nama hari dari tanggal
        const dayIndex = new Date(anime.aired.from).getDay();
        const hariTayang = daysOfWeek[dayIndex];

        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            passHref
            className="cursor-pointer hover:text-indigo-800 transition-all pb-2 hover:"
            key={index}
          >
            <div className="relative">
              <Image
                src={anime.images.webp.image_url}
                alt={anime.title}
                width={350}
                height={350}
                className="w-full h-64 sm:h-64 md:h-72 xl:h-80 object-cover pb-2 border-2 border-indigo-900"
              />
              <h2 className="absolute z-10 top-0 left-0 flex items-center gap-1 text-white font-bold px-2 py-1 text-md md:text-xl bg-slate-600/80">
              <Clock /> {hariTayang}
              </h2>
              <h2 className="flex items-center gap-1 absolute z-20 top-32 right-0 text-white font-light px-2 py-1 text-md md:text-xl bg-blue-800/60">
                <Star />
                {anime.score}
              </h2>
              <h2 className="absolute z-10 bottom-0 left-0 right-0 bg-gradient-to-t from-black text-white font-bold pb-1 pt-6 px-2 text-md md:text-xl">
                {anime.title}
              </h2>
              <div className="absolute z-40 inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity"></div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
