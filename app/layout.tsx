import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

import { ReduxProvider } from '@/redux/ReduxProvider';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Sumz ai',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={cn(
                    'min-h-screen container mx-auto py-8 max-w-7xl',
                    inter.className
                )}
            >
                <ReduxProvider>{children}</ReduxProvider>
            </body>
        </html>
    );
}
