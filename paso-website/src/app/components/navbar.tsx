"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { Rubik } from "next/font/google";
import { NAV_ABOUT, NAV_TEAM, NAV_EVENTS, NAV_JOIN } from "../../constants";

const rubik = Rubik({
    weight: '300',
    subsets: ['latin']
});

export default function Navbar() {
    const [showClose, setShowClose] = useState(false);

    const buttonHandler = () => {
        setShowClose(showClose => !showClose);
    }

    useEffect( () => {}, [showClose]);

    return (
        <nav className="absolute bg-[#0e0e0e] w-full z-10">
            <div className="relative max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
                <div className="absolute -left-8 -top-25 h-[160px] overflow-hidden md:overflow-auto md:h-auto md:top-auto">
                    <Link href="/">
                        <Image src="/assets/logo.png" width={220} height={0} alt="PRC Logo"/>
                    </Link>
                </div>
                <button data-collapse-toggle="navigation" type="button" className="p-2 w-10 h-10 hover:cursor-pointer md:hidden" aria-controls="navigation" aria-expanded="false" onClick={buttonHandler}>
                    {
                        (!showClose) && 
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    }
                    {
                        (showClose) && 
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path stroke="white" strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg> 
                    }
                </button>
                <div id="navigation" className={`${rubik.className} hidden text-white text-xs uppercase w-full md:block md:w-auto`}>
                    <ul className="flex flex-col mt-4 p-4 md:flex-row md:space-x-8">
                        <li>
                            <Link className='block py-2 px-3 hover:bg-paso-light-orange md:hover:bg-transparent md:inline md:py-0 md:px-0' href="/about">{`${NAV_ABOUT}`}</Link>
                        </li>
                        <li>
                            <Link className='block py-2 px-3 hover:bg-paso-light-orange md:hover:bg-transparent md:inline md:py-0 md:px-0' href="/events">{`${NAV_EVENTS}`}</Link>
                        </li>
                        <li>
                            <Link className='block py-2 px-3 hover:bg-paso-light-orange md:hover:bg-transparent md:inline md:py-0 md:px-0' href="/team">{`${NAV_TEAM}`}</Link>
                        </li>
                        <li>
                            <Link className='pill-btn block py-2 px-3 hover:bg-paso-light-orange md:bg-paso-light-orange md:inline md:py-0 md:px-0 md:shadow-md md:hover:shadow-orange-500/50' href="/join">{`${NAV_JOIN}`}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}