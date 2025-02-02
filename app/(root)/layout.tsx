import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "Bobaas Academy Of Excellence ",
  description: "Built by samuel great",
icons:{
  icon: '/public/icons/logo.jpg'
}
};

const RootLayout = ({children}: {children: ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout