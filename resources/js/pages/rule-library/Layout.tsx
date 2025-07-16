import React from 'react'
import { ReactNode } from 'react';
import MyTopHeader from './components/my-top-header'
import MyNewHeader from './components/my-new-header'
import MyFooter from './components/my-footer'
import { Head, usePage } from '@inertiajs/react';
interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { locale } = usePage().props;
  const fontClass = locale === 'kh' ? 'font-koulen-regular' : '';
  return (
    <>
        <MyTopHeader/>
        <MyNewHeader/>
        <main className={`font-poppins-regular mx-auto min-h-screen ${fontClass}`}>{children}</main>
        <MyFooter />
    </>
  )
}

export default Layout
