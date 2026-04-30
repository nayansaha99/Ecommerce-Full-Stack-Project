import NextTopLoader from 'nextjs-toploader';
import './globals.css'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      {children}
      <NextTopLoader />
      </body>
    </html>
  )
}
