import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
    providers: [GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })],
    callbacks: {
        signIn: ({ user }) => { 
            // check in db if si allowed
            if (user.email === "kevin170597@gmail.com") return true
            return false 
        }
    }
})

export { handler as GET, handler as POST }