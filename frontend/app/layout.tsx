import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AuthProvider from '@/providers/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DRF Nex Auth',
  description: 'An Authentication Example App with NextAuth.js, Django Rest Framework, and Tailwind CSS',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + ' flex flex-col min-h-screen justify-between'}>
        <AuthProvider>
          <Navbar />
          <main className="mb-auto">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
