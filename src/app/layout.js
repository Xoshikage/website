import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SERC',
  description: 'Club website',
  icons:{
    icon:[
      {        
        url: 'https://www.trashedgraphics.com/wp-content/uploads/2012/02/default_icon.jpg',
      }
    ],
  },
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">      
          <body className={inter.className}>
              {children}
          </body>
      </html>
  )
}