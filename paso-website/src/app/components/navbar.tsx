import Link from 'next/link'
import Image from 'next/image'
import { Rubik } from "next/font/google";

const rubik = Rubik({
    weight: '300'
});

export default function Navbar() {
    return (
        <nav className="bg-[#0e0e0e]">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div>
                    <a href="/">
                        <Image className="h-10" src="/assets/logo.png" width={100} height={0} alt="PRC Logo"/>
                    </a>
                </div>
                <button data-collapse-toggle="navigation" type="button" className="p-2 w-10 h-10 hover:cursor-pointer md:hidden" aria-controls="navigation" aria-expanded="false">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div id="navigation" className={`${rubik.className} hidden text-white text-xs uppercase w-full md:block md:w-auto`}>
                    <ul className="flex flex-col mt-4 p-4 md:flex-row md:space-x-8">
                        <li>
                            <Link className='block py-2 px-3 hover:bg-paso-light-orange md:hover:bg-transparent md:inline md:py-0 md:px-0' href="/about">about</Link>
                        </li>
                        <li>
                            <Link className='block py-2 px-3 hover:bg-paso-light-orange md:hover:bg-transparent md:inline md:py-0 md:px-0' href="/team">team</Link>
                        </li>
                        <li>
                            <Link className='pill-btn block py-2 px-3 hover:bg-paso-light-orange md:bg-paso-light-orange md:inline md:py-0 md:px-0 md:shadow-md md:hover:shadow-orange-500/50' href="/join">join us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
  