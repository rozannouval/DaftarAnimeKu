import { AuthUserSession } from "@/lib/auth-libs";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const user = await AuthUserSession();
  console.log(user);

  return (
    <div>
      <div className="min-h-screen bg-blue-100 font-sans py-4">
        <div className="bg-slate-700 mx-8 text-white rounded-lg border px-4">
          <h3 className="border-b-2 border-b-white pt-2 font-bold text-xl font-sans">PROFILE</h3>
          <div className="flex items-center flex-col md:flex-row text-center md:text-start md:gap-8 gap-2 p-8">
            <Image
              src={user.image}
              width={1000}
              height={1000}
              className="w-44 rounded-full"
            />
            <div className="">
              <div className="my-2 md:my-8">
                <h1 className="font-extrabold text-4xl">{user.name}</h1>
              </div>

              <div className="my-4 md:my-8 flex items-center justify-center flex-wrap gap-4">
                <Link
                  href="/users/dashboard/koleksi"
                  className="py-2 px-4 bg-white text-black rounded border border-white font-bold text-lg"
                >
                  Koleksi Saya
                </Link>
                <Link
                  href="/users/dashboard/mycomment"
                  className="py-2 px-4 bg-white text-black rounded border border-white font-bold text-lg"
                >
                  Komentar Saya
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
