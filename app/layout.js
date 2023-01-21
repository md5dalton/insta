import Header from "./Header"
import "../styles/globals.css"
import "../public/fonts/linearicons_coders/css/linearicons.css"

export default function RootLayout({ children }) {
  return (
    <html style={{background: "black"}}>
      <head />
      <body className="text-white text-sm">
        {/* <Header /> */}
        {children}
      </body>
    </html>
  )
}
