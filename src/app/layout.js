import NextTopLoader from 'nextjs-toploader';
import './globals.css'
import { SuccessTrigger } from "@/components/master/SuccessTrigger";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SuccessTrigger>
          {children}
        </SuccessTrigger>
        <NextTopLoader />
      </body>
    </html>
  )
}
