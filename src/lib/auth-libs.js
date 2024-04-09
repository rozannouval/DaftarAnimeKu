import { getServerSession } from "next-auth";
import { AuthOption } from "@/app/api/auth/[...nextauth]/route";

export const AuthUserSession = async() => {
    const session = await getServerSession(AuthOption)
    return session?.user
}

