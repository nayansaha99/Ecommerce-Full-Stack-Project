import NextTopLoader from 'nextjs-toploader';
import './globals.css'
import { SuccessTrigger } from "@/components/master/SuccessTrigger";

export default function RootLayout({ children,modal}) {
  return (
    
    <html lang="en">
      <body>
          {children}
          {modal}
        <NextTopLoader />
      </body>
    </html>
  )
}
