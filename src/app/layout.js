
import NextTopLoader from 'nextjs-toploader';


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
