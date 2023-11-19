import './globals.css'
import type { Metadata } from 'next'
import { Comfortaa } from 'next/font/google'
import RootLayout from './layout'

const inter = Comfortaa({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Alex | Personal Portfolio',
    description: 'Alejandro Esteban Gonzalez Gatica is a full-stack and gamedeveloper with 3 years of expirience.',
}


export default function App({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <RootLayout children={undefined}/>
    );
}