import { AuthUserSession } from "@/lib/auth-libs";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const user = await AuthUserSession();
  console.log(user);

  return (
    <div>
      <div className="min-h-screen bg-blue-100 font-sans py-4">

        <div className="flex items-center flex-col md:flex-row text-center md:text-start md:gap-8 gap-2 bg-gradient-to-bl from-violet-600 via-purple-600 to-fuchsia-600 text-white p-8 mx-8 rounded-lg border border-white">
          <Image
            src={user.image}
            width={1000}
            height={1000}
            className="w-44 rounded-full border-2 border-white"
          />
          <div className="">
            <div className="my-2 md:my-8">
              <h1 className="font-extrabold text-4xl">{user.name}</h1>
              <p>{user.email}</p>
            </div>

            <div className="my-4 md:my-8 flex items-center justify-center flex-wrap gap-4">
              <Link href="/collection" className="py-2 px-4 bg-white text-black rounded border border-white font-bold text-lg">Koleksi Saya</Link>
              <Link href="/mycomment" className="py-2 px-4 bg-white text-black rounded border border-white font-bold text-lg">Komentar Saya</Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
