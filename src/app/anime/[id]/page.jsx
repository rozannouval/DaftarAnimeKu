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
import { Star } from "@phosphor-icons/react/dist/ssr";
import VideoPlayer from "@/components/Utilities/VideoPlayer";

export default async function Page({ params: { id } }) {
  const { data } = await getApiData(`anime/${id}`);

  return (
    <div>
      <div className="py-2 px-4 bg-slate-200 font-bold ">
        <div className="flex justify-between">
          <h1 className="text-2xl">{data.title}</h1>
          <h1 className="text-xl text-center bg-blue-800 text-white px-4 py-1 rounded-lg">
            Peringkat # {data.rank}
          </h1>
        </div>
        <div className="flex justify-between text-right">
          <h2 className="text-xl text-slate-600">{data.title_english}</h2>
          <h2 className="text-xl text-slate-600">
            Anggota <FormatNumber number={data.members} />
          </h2>
        </div>
      </div>
      <div className="flex justify-between bg-slate-100 min-h-screen p-4 w-full">
        <div className="mx-2 my-2">
          <Image
            src={data.images.webp.large_image_url}
            alt={data.title}
            width={1000}
            height={1000}
            className="w-full rounded"
          />
          <h2 className="text-center bg-purple-600 text-white px-4 py-2 my-2 rounded-lg">
            Rincian
          </h2>
          <div className="flex items-center gap-2">
            <h1 className="bg-blue-600 text-white px-2 rounded">Score: </h1>
            <div className="flex items-center gap-2 bg-red-600 text-white px-2 rounded">
              <Star />
              <h1>{data.score}</h1>
            </div>
          </div>
        </div>
        <div className="p-2 mx-2 w-full">
          <Breadcrumb className="px-1 pb-2">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="hover:text-blue-600">
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/anime/topAnime" className="hover:text-blue-600">
                    Top
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-blue-600">Anime</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Accordion type="single" collapsible className="w-full bg-slate-200">
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
  );
}
