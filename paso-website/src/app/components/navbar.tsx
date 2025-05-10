"use client";

import Link from 'next/link'
import Image from 'next/image'
import Socials from './socials';
import { useState, useEffect } from 'react';
import { Rubik } from "next/font/google";
import { NAV_ABOUT, NAV_TEAM, NAV_EVENTS, NAV_CONTACT } from "../../constants";

const rubik = Rubik({
    weight: '300',
    subsets: ['latin']
});

const overflowHidden = 'overflow-hidden';

export default function Navbar() {
    const [showMenuBar, setShowMenuBar] = useState(false);

    const toggleMenuBar = () => {
        setShowMenuBar(showMenuBar => !showMenuBar);
    }

    useEffect(() => {
        if (showMenuBar) {
            document.body.classList.add(overflowHidden);
        }
        else {
            document.body.classList.remove(overflowHidden);
        }
    }, [showMenuBar]);

    return (
        <nav className="fixed bg-[#0e0e0e] w-full z-10">
            <div className="relative max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
                <div className="absolute -left-8 -top-25 h-[160px] overflow-hidden md:overflow-auto md:h-auto md:top-auto">
                    <Link href="/">
                        <Image src="/assets/logo.png" width={220} height={0} alt="PRC Logo"/>
                    </Link>
                </div>
                <button type="button" className="p-2 w-10 h-10 hover:cursor-pointer md:hidden"  onClick={toggleMenuBar}>
                    {
                        (!showMenuBar) && 
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    }
                    {
                        (showMenuBar) && 
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path stroke="white" strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg> 
                    }
                </button>
                <div className={`${rubik.className} mt-4 ${showMenuBar ? '' : 'hidden'} text-white text-xs uppercase border-t-[0.5] w-full h-screen md:block md:mt-0 md:w-auto md:h-auto md:border-t-[0]`}>
                    <ul className="flex flex-col text-center py-10 md:flex-row md:p-4 md:space-x-8">
                        <li>
                            <Link className='block py-10 hover:bg-paso-light-orange md:hover:bg-transparent md:inline' href="/about" onClick={toggleMenuBar}>{`${NAV_ABOUT}`}</Link>
                        </li>
                        <li>
                            <Link className='block py-10 hover:bg-paso-light-orange md:hover:bg-transparent md:inline' href="/team" onClick={toggleMenuBar}>{`${NAV_TEAM}`}</Link>
                        </li>
                        <li>
                            <Link className='block py-10 hover:bg-paso-light-orange md:hover:bg-transparent md:inline' href="/events" onClick={toggleMenuBar}>{`${NAV_EVENTS}`}</Link>
                        </li>
                        <li>
                            <Link className='pill-btn py-10 block hover:bg-paso-light-orange md:bg-paso-light-orange md:inline md:shadow-md md:hover:shadow-orange-500/50' href="/contact" onClick={toggleMenuBar}>{`${NAV_CONTACT}`}</Link>
                        </li>
                    </ul>
                    <div className='mt-5 md:hidden'>
                        <Socials/>
                    </div>
                </div>
            </div>
        </nav>
    );
}
