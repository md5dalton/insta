import Header from "./Header"
import "../styles/globals.css"
import "../public/fonts/linearicons_coders/css/linearicons.css"

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
