import type { Metadata } from 'next';
import { Playfair_Display, Crimson_Pro, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
    subsets: ['latin', 'vietnamese'],
    variable: '--font-playfair',
    display: 'swap',
});

const crimsonPro = Crimson_Pro({
    subsets: ['latin', 'vietnamese'],
    variable: '--font-crimson-pro',
    display: 'swap',
});

const inter = Inter({
    subsets: ['latin', 'vietnamese'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Divine Providence: Israel and the Nations',
    description: 'A theological research report on the election of Israel and the universal providence of God.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${playfair.variable} ${crimsonPro.variable} ${inter.variable}`}>
            <body className="font-serif antialiased bg-parchment text-ink selection:bg-gold/30 selection:text-burgundy">
                {children}
            </body>
        </html>
    );
}
