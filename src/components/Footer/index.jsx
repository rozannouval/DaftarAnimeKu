import Image from "next/image";
import Logo from "@/app/favicon.ico";
import { DiscordLogo } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <div id="footer" className="bg-primary-blue text-white p-4 w-full h-full">
      <div className="container mx-auto flex justify-center mt-2 mb-8">
        <h1 className="font-bold text-center text-lg md:text-2xl py-2 bg-white text-primary-blue px-4 md:px-8 rounded-xl">
          Copyright by DaftarAnimeKu 2024
        </h1>
      </div>
      <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center gap-8 px-8">
        <Image
          src={Logo}
          width={1000}
          height={1000}
          alt="gambar"
          className="w-48 h-48"
        />
        <div className="flex flex-col md:flex-row md:justify-between gap-4 my-4">
          <p className="text-justify border-l-8 rounded-xl py-8 px-8">
            Jangan Lewatkan Info Anime Terbaru hanya di website ini! Terima
            kasih bagi yang sudah berkunjung di website kami. Ini website
            semata-mata untuk melatih skill Coding kami, bagi yang mau bergabung
            discord Ngoding Bareng silahkan klik button dibawah ini!
          </p>
          <p className="text-justify border-l-8 rounded-xl py-8 px-8">
            Don't miss the latest anime updates only on this website! Thank you
            to everyone who has visited our site. This website is solely for
            practicing our coding skills. For those who want to join our 'Coding
            Together' Discord, please click the button below!
          </p>
        </div>
      </div>
      <div className="flex justify-center container mx-auto my-4">
        <a
          href="https://discord.gg/EmkRKVrm"
          className="flex gap-4 items-center p-4 rounded-xl text-primary-blue bg-white transition-all "
        >
          <DiscordLogo width={35} height={35} />
          <p className="font-bold text-lg">Gabung Discord</p>
        </a>
      </div>
    </div>
  );
}
