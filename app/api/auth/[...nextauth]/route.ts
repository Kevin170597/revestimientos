import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
//import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        /*CredentialsProvider({
            name: "credentials",
            credentials: {
                username: { label: "Email", type: "email", placeholder: "Ej: nombre@email.com" },
                password: { label: "Contraseña", type: "password" , placeholder: "****" }
            },
            authorize(credentials, req) {
                // check if user
                const user = { id: "1", name: "Kevin", email: "kevin170597@gmail.com" }
                return user
            },
        })*/],
    callbacks: {
        signIn: ({ user }) => {
            // check in db if si allowed
            if (user.email === "kevin170597@gmail.com") return true
            return false
        }
    }
})

export { handler as GET, handler as POST }