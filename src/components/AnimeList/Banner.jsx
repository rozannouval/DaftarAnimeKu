import Image from "next/image";
import Link from "next/link";

export default function Banner({ api }) {
  return (
    <div>
      {api.data?.map((anime, index) => {
        return (
          <Link
            href={`/${anime.mal_id}`}
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
                className="w-full h-64 sm:h-80 md:h-96 xl:h-80 object-cover pb-2 border-2 border-indigo-900"
              />
              <h2 className="absolute z-10 bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white font-bold pb-1 pt-6 px-2 text-md md:text-xl">
                {anime.title}
              </h2>
              <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity"></div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
