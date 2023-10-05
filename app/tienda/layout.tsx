import type { Metadata } from "next"
import { Header, Footer } from "@/components"

export const metadata: Metadata = {
    title: "Kaliza - Tienda"
}

export default function StoreLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}