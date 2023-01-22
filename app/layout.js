import "../styles/globals.css"
import "../public/fonts/linearicons_coders/css/linearicons.css"

export default function RootLayout({ children }) {
  return (
    <html style={{background: "black"}}>
      <head />
      <body className="text-white text-sm">
        {children}
      </body>
    </html>
  )
}
