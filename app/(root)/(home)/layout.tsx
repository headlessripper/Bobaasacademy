import Navbar from '@/components/ui/Navbar'
import Sidebar from '@/components/ui/Sidebar'
import { Metadata } from 'next';
import React, { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Bobaas Academy Of Excellence ",
  description: "Built by samuel great",
icons:{
  icon: '/public/icons/logo.jpg'
}
};

const HomeLayout = ({ children} : {children: ReactNode}) => {
  return (
    <main className='relative'>
        <Navbar/>

        <div className='flex'>
            <Sidebar/>

            <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pd-14 sm:px-14'>
                <div className='w-full'>
                {children}
                </div>
            </section>
        </div>
        
    </main>
  )
}

export default HomeLayout
