import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const options = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
}
export default NextAuth(options);

export const { handlers, signIn, signOut, auth } = NextAuth(options);