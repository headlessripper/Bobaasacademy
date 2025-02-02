import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import { Toaster } from "@/components/ui/toaster"

import "@stream-io/video-react-sdk/dist/css/styles.css";
import 'react-datepicker/dist/react-datepicker.css'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bobaas Academy Of Excellence ",
  description: "Built by samuel great",
icons:{
  icon: '/public/icons/logo.jpg'
}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: '/public/icons/logo.jpg',
            socialButtonsVariant: 'iconButton'
          },
          variables: {
            
            colorBackground: '#1c1f2e',
            colorText: '#fff',
            colorPrimary: '#0E78F9',
            colorInputBackground: '#252a41',
            colorInputText: '#fff',
          }
        }}>      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark-2`}
      >
        {children}
        <Toaster />
      </body>
      </ClerkProvider>
    </html>
  );
}
