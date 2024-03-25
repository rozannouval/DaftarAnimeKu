import { getApiData } from "@/lib/api-libs";
import Image from "next/image";
import FormatNumber from "@/lib/FormatNumber";

export default async function Page({ params: { id } }) {
  const { data } = await getApiData(`characters/${id}/full`);

  return (
    <div>
      <div className="py-2 px-4 bg-slate-200 font-bold ">
        <div className="flex justify-between">
          <h1 className="text-2xl">{data.name}</h1>
          <h1 className="text-xl text-center bg-blue-800 text-white px-4 py-1 rounded-lg">
           {data.anime.title}
          </h1>
          
        </div>
        <div className="flex justify-between text-right">
        <h2 className="text-xl text-slate-600">{data.name_kanji}</h2>
          <h2 className="text-xl text-slate-600">Anggota <FormatNumber number={data.favorites} /></h2>
        </div>
      </div>
      <div className="flex justify-between bg-slate-100 min-h-screen p-4 w-full">
        <div className="mx-2 my-2">
          <Image
            src={data.images.webp.image_url}
            alt={data.name}
            width={1000}
            height={1000}
            className="w-full rounded"
          />
          <h2 className="text-center bg-blue-800 text-white px-4 py-2 my-2 rounded-lg">
            Details
          </h2>
          <h1>Score: {data.score}</h1>
        </div>
        <div className="p-2 mx-2 w-full">
          <h2 className="font-bold">Tentang:</h2>
          <p>{data.about}</p>
        </div>
      </div>
    </div>
  );
}
