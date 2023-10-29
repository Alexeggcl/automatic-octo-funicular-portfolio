import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Comfortaa } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'

const inter = Comfortaa({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alex | Personal Portfolio',
  description: 'Alejandro Esteban Gonzalez Gatica is a full-stack and gamedeveloper with 3 years of expirience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative pt-28 sm:pt-36 bg-gray-900 text-gray-50 text-opacity-90`}
      >
        <div className="absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-[#d17983]"></div>
        <div className="absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-[#6e5f35]"></div>

        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}