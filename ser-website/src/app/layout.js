import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SERC',
  description: 'Software Engineering Readiness Club',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
