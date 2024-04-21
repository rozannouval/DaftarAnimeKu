import Link from "next/link";
import { AuthUserSession } from "@/lib/auth-libs";

const UserAuthButton = async () => {
  const user = await AuthUserSession();
  const actionLabel = user ? "SIGNOUT" : "SIGN IN GITHUB";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex items-center gap-4">
      <Link href={actionURL} className="flex items-center dark:text-black">
        <h1 className="font-semibold font-sans bg-gradient-to-br from-red-600 to-orange-600 text-white px-3 py-1 md:px-6 md:py-3 text-lg md:text-2xl rounded-lg">
          {actionLabel}
        </h1>
      </Link>

      {user ? (
        <Link href="/users/dashboard" className="flex items-center dark:text-black">
          <h1 className="font-semibold font-sans bg-gradient-to-br from-cyan-600 via-violet-600 to-purple-600 text-white px-3 py-1 md:px-6 md:py-3 text-lg md:text-2xl rounded-lg">
            DASHBOARD
          </h1>
        </Link>
      ) : null}

    </div>
  );
};

export default UserAuthButton;
