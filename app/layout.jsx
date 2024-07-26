import "../styles/globals.css"
import Footer from "./Footer"


export const metadata = {
  title: "Letlapa",
  description: "Media viewer",
}

export default function RootLayout({ children }) {
  return (
    <html className="bg-black">
      <body className="text-white text-sm pb-16">
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
