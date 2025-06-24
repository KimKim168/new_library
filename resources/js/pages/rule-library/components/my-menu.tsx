'use client';

import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { AlignLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';

const menuItems = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'About', link: '/about' },
    { id: 3, name: 'Collections', link: '/collections' },
    { id: 4, name: 'Resources', link: '/resources' },
    { id: 5, name: 'Databases', link: '/databases' },
    { id: 6, name: 'Contact Us', link: '/contact_us' },
];

const MyMenu = () => {
    const [activePath, setActivePath] = useState('/');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setActivePath(window.location.pathname);
        }
    }, []);

    const getLinkClass = (linkPath: string) =>
        linkPath === activePath
            ? 'text-yellow-400 font-semibold underline underline-offset-4'
            : 'text-white hover:text-yellow-300 hover:underline hover:underline-offset-4 transition';

    return (
        <>
            {/* Desktop Menu */}
            <nav className="hidden py-3 xl:block">
                <ul className="flex items-center justify-center space-x-4 text-base text-white">
                    {menuItems.map((item, index) => (
                        <li key={item.id} className={`${index !== menuItems.length - 1 ? 'border-r border-white pr-4' : ''}`}>
                            <Link href={item.link} className={getLinkClass(item.link)}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Menu */}
            <div className="block xl:hidden">
                <Sheet >
                    <SheetTrigger asChild>
                        <Button variant="outline" size='icon' className='p-0'>
                            <AlignLeft className="text-primary-two" width={35} height={35} aria-label="Toggle menu" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className='bg-background/20 backdrop-blur-xl'>
                        <SheetHeader className="text-start">
                            <SheetTitle className="text-center text-white">Menu</SheetTitle>
                            <ul className="mt-4 flex flex-col justify-center space-y-4 ">
                                {menuItems.map((item) => (
                                    <li key={item.id}>
                                        <Link href={item.link} className={getLinkClass(item.link)}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    );
};

export default MyMenu;
