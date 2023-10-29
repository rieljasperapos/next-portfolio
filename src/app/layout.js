import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RJ Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='h-full'>
      <body className={`h-full ${inter.className}`}>
        <div className='flex flex-col h-full'>
          <Header />
          <div className='flex flex-col flex-grow'>
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
