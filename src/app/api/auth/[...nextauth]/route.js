import NextAuth from "next-auth";
import githubAuth from "next-auth/providers/github";

const AuthOption = {
    providers: [
        githubAuth({
            clientId: process.env.GITHUB_CLIENT,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(AuthOption)

export { handler as GET, handler as POST}