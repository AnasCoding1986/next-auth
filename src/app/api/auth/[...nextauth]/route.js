import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", required: true, type: "text", placeholder: "Your email" },
                password: { label: "Password", required: true, type: "password", placeholder: "Password" }
              },
              async authorize(credentials) {
                if (!credentials) {
                    return null
                }
                return true
              },
        })
    ]
  })
  
  export { handler as GET, handler as POST }