"use client"
import Footer from "./Footer"
import { StoreProvider } from "@/context/StoreProvider"

export const Providers = ({ children }) => (
    <StoreProvider>
        <main>
            {children}
        </main>
        <Footer />
    </StoreProvider>
)