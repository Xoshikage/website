import Navbar from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SERC',
  description: 'Club website',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
          <body className={inter.className}>
              <Navbar className="pb-10"/>
              {children}
          </body>
      </html>
  )
}