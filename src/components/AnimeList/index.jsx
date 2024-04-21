import FormatNumber from "@/lib/FormatNumber";
import { Calendar, FilmReel, MonitorPlay, Star, Users } from "@phosphor-icons/react/dist/ssr";
import { HeartIcon, TimerIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function AnimeList({ api }) {
  // Sort anime data by rank
  const sortedAnimeData = api.data?.sort((a, b) => a.rank - b.rank);

  return (
    <div className="px-4">
      <table className="table-fixed bg-slate-200 border-collapse border border-slate-400">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="border border-slate-400 px-4">Peringkat</th>
            <th className="border border-slate-400 w-full py-2">Judul Anime</th>
            <th className="border border-slate-400 px-4">Skor</th>
            <th className="border border-slate-400 px-4">Anggota</th>
          </tr>
        </thead>
        {sortedAnimeData?.map((anime, index) => {
          return (
            <tbody className="odd:bg-indigo-50 even:bg-white">
              <tr>
                <td className="border border-slate-400">
                  <h2 className="flex items-center justify-center px-2 font-bold text-xl md:text-2xl">
                    {anime.rank}
                  </h2>
                </td>
                <td className="border border-slate-400">
                  <div className="flex items-start p-4">
                    <Link
                      href={`/anime/${anime.mal_id}`}
                      passHref
                      className="cursor-pointer hover:text-indigo-800 transition-all"
                      key={index}
                    >
                      <Image
                        src={anime.images.webp.image_url}
                        alt={anime.title}
                        width={1000}
                        height={1000}
                        className="w-28 h-40 object-cover"
                      />
                    </Link>
                    <div className="px-4">
                      <Link
                        href={`/anime/${anime.mal_id}`}
                        passHref
                        className="cursor-pointer hover:text-indigo-800 transition-all"
                      >
                        <h2 className="font-bold text-indigo-800 font-sans pb-1 text-md md:text-lg flex items-center gap-1">
                          <FilmReel /> {anime.title}
                        </h2>
                      </Link>

                      <div className="pt-2 font-sans text-sm font-normal text-slate-500/90">
                        <p className="flex items-center gap-1">
                          <Calendar /> Tanggal ({anime.aired.prop.from.day}/
                          {anime.aired.prop.from.month}/
                          {anime.aired.prop.from.year}) - (
                          {anime.aired.prop.to.day}/{anime.aired.prop.to.month}/
                          {anime.aired.prop.to.year})
                        </p>
                        <p className="flex items-center gap-1 my-2">
                          <MonitorPlay /> {anime.type} ({anime.episodes} Episode)
                        </p>
                        <p className="flex items-center gap-1">
                        <TimerIcon /> Durasi ({anime.duration})
                        </p>
                        <p className="flex items-center gap-1 my-2">
                          <HeartIcon /> Jumlah Favorite (
                          <FormatNumber number={anime.favorites} />)
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border border-slate-400">
                  <h2 className="flex items-center gap-1 font-bold px-8 text-md md:text-lg">
                    <Star className="h-5 w-5" />
                    {anime.score}
                  </h2>
                </td>
                <td className="border border-slate-400">
                  <h2 className="flex items-center justify-center gap-1 font-bold px-8 text-md md:text-lg">
                    <Users />
                    <FormatNumber number={anime.members} />
                  </h2>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
