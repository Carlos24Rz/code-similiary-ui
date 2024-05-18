import type { Metadata } from "next";
import { Roboto } from 'next/font/google';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import AppHeader from "./components/AppHeader/AppHeader";

import "./globals.css";


const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AppRouterCacheProvider>
            <AppHeader />
            {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
