import { getApiData } from "@/lib/api-libs";
import Image from "next/image";
import FormatNumber from "@/lib/FormatNumber";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import VideoPlayer from "@/components/Utilities/VideoPlayer";

export default async function Page({ params: { id } }) {
  const { data } = await getApiData(`anime/${id}`);

  let seasonTranslation;
  switch (data.season) {
    case "spring":
      seasonTranslation = "Semi";
      break;
    case "summer":
      seasonTranslation = "Panas";
      break;
    case "fall":
      seasonTranslation = "Gugur";
      break;
    case "winter":
      seasonTranslation = "Dingin";
      break;

    default:
      seasonTranslation = "Belum Diketahui";
  }

  return (
    <div className="">
      <div className="py-2 bg-slate-200 font-bold">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse md:flex-row md:justify-between items-center">
            <h1 className="text-2xl">{data.title}</h1>
            <h1 className="text-xl bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600 text-white px-4 py-1 rounded-lg flex justify-center">
              Peringkat # {data.rank}
            </h1>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <h2 className="text-xl text-slate-600">{data.title_english}</h2>
            <h2 className="text-xl text-slate-600">
              Anggota <FormatNumber number={data.members} />
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 p-4 w-full">
        <div className="xl:container xl:mx-auto mx-0 flex flex-col md:flex-row justify-between">
          <div className="mx-2 my-2">
            <Image
              src={data.images.webp.large_image_url}
              alt={data.title}
              width={1000}
              height={1000}
              className="w-full rounded"
            />
            <h2 className="text-center bg-gradient-to-br from-blue-600 to-indigo-600 text-white px-4 py-2 my-2 rounded">
              Rincian
            </h2>

            <div className="flex items-center gap-2 my-2">
              <h1>Japanese: </h1>
              <h1>{data.title_japanese}</h1>
            </div>
            <div className="flex items-center gap-2 my-2">
              <h1>Tipe: </h1>
              <h1>{data.type}</h1>
            </div>
            <div className="flex items-center gap-2 my-2">
              <h1>Durasi: </h1>
              <h1>{data.duration}</h1>
            </div>
            <div className="flex items-center gap-2 my-2">
              <h1>Total Episode: </h1>
              <h1>{data.episodes} Episode</h1>
            </div>
            <div className="flex items-center gap-2 my-2">
              <h1>Status: </h1>
              <h1>{data.status}</h1>
            </div>
            <div className="flex items-center gap-2 my-2">
              <h1>Tanggal: </h1>
              <h1>
                {data.aired.prop.from.day}/{data.aired.prop.from.month}/
                {data.aired.prop.from.year} - {data.aired.prop.to.day}/
                {data.aired.prop.to.month}/{data.aired.prop.to.year}
              </h1>
            </div>

            <div className="flex items-center gap-2 my-2">
              <h1>Sumber : </h1>
              <h1>{data.source}</h1>
            </div>
          </div>

          <div className="p-2 mx-0 md:mx-2 w-full">
            <Breadcrumb className="px-1 pb-2 font-semibold font-sans">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/" className="hover:text-blue-600">
                      Beranda
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      href="/anime/topAnime"
                      className="hover:text-blue-600"
                    >
                      Peringkat
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-blue-600 font-semibold">
                    Anime
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <table className="table-auto font-sans text-sm sm:text-base md:text-xl lg:text-2xl border border-black text-center w-full mb-4 mt-2">
              <thead className="border border-black bg-gradient-to-b from-blue-600 to-indigo-600 text-slate-100">
                <tr>
                  <th className="border border-black p-2">SCORE</th>
                  <th className="p-2 flex sm:hidden justify-center">POPULAR</th>
                  <th className="p-2 hidden sm:flex justify-center">POPULARITAS</th>
                  <th className="border border-black p-2">MUSIM</th>
                  <th className="border border-black p-2">TAHUN</th>
                </tr>
              </thead>
              <tbody className="bg-slate-100 text-blue-600 font-bold">
                <tr>
                  <td className="border border-black p-2">{data.score}</td>
                  <td className="border border-black p-2">
                    #{data.popularity}
                  </td>
                  <td className="border border-black p-2">
                    {seasonTranslation}
                  </td>
                  <td className="border border-black p-2">{data.year}</td>
                </tr>
              </tbody>
            </table>

            <Accordion
              type="single"
              collapsible
              className="w-full bg-gradient-to-r from-blue-100 to-indigo-100"
            >
              <AccordionItem value="item-1" className="">
                <AccordionTrigger className="font-bold text-xl px-4">
                  Sinopsis
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg px-4">{data.synopsis}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-bold text-xl px-4">
                  Latar Belakang
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg px-4">{data.background}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-bold text-xl px-4">
                  Trailer
                </AccordionTrigger>
                <AccordionContent className="flex justify-center">
                  <VideoPlayer youtubeId={data.trailer.youtube_id} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
