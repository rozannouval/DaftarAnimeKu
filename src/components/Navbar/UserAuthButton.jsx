import Link from "next/link";
import { AuthUserSession } from "@/lib/auth-libs";

const UserAuthButton = async () => {
  const user = await AuthUserSession();
  const actionLabel = user ? `SIGN` : "SIGN IN GITHUB";
  const actionLabel2 = user ? "OUT" : null;
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex items-center justify-center gap-4">
      <Link href={actionURL} className="flex md:gap-2 gap-1 items-center dark:text-black font-bold font-sans bg-primary-purple text-white px-3 py-1 md:px-6 md:py-3 text-lg md:text-2xl rounded-lg">
        <h1>
          {actionLabel}
        </h1>
        <h1>
          {actionLabel2}
        </h1>
      </Link>

      {user ? (
        <Link href="/users/dashboard" className="flex items-center dark:text-black">
          <h1 className="font-bold font-sans bg-gray-100 text-secondary-purple px-3 py-1 md:px-6 md:py-3 text-lg md:text-2xl rounded-lg">
            DASHBOARD
          </h1>
        </Link>
      ) : null}

    </div>
  );
};

export default UserAuthButton;
