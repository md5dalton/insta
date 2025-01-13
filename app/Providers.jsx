"use client"
import { PersistGate } from "redux-persist/integration/react"
import Footer from "./Footer"
import { StoreProvider } from "@/context/StoreProvider"
import { persistor } from "@/store/store"
import { SessionProvider } from "next-auth/react"

export const Providers = ({ children }) => (
    <SessionProvider>
        <StoreProvider>
            <PersistGate loading={null} persistor={persistor}>
                <main>
                    {children}
                </main>
                <Footer />
            </PersistGate>
        </StoreProvider>
    </SessionProvider>
)