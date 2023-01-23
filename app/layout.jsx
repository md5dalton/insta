import "../styles/globals.css"
import "../public/fonts/linearicons_coders/css/linearicons.css"
import Footer from "./Footer"

export default function RootLayout({ children }) {
  return (
    <html style={{background: "black"}}>
      <head />
      <body className="text-white text-sm pb-16">
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
