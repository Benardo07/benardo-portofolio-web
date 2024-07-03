"use client";
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const navbarPath = [
    {
        name: "Home",
        link : "/",
    },
    {
        name: "About",
        link : "/#2",
    },
    {
        name: "Project",
        link : "/#3",
    },
    {
        name: "Skill",
        link : "/#4",
    },
    {
        name: "Contact",
        link : "/#5",
    },
];

export function Navbar() {
    const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
    return (
        <nav className="w-full fixed top-0 bg-black h-20 flex justify-between items-center px-20 text-white z-30">
            <h1 className="font-bold text-2xl">Benardo.</h1>
            <button
                className="flex absolute bg-[#00ffff] right-0 top-0 aspect-square h-full items-center justify-center xl:hidden"
                aria-label="Open Menu"
                onClick={() => setIsNavbarExpanded(!isNavbarExpanded)}
            >
                <Image src="/menu.png" alt="menu bar" width={50} height={50}></Image>
            </button>
            <div
                className={`fixed right-0 top-0 z-10 flex h-full bg-slate-700 w-[272px] flex-col items-center justify-center bg-red gap-6 duration-300 ease-in-out xl:static xl:bg-transparent xl:flex xl:h-auto xl:w-auto xl:justify-center xl:translate-x-0 xl:flex-row xl:items-center xl:gap-16 xl:bg-none ${
                isNavbarExpanded ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <button
                    className="absolute  right-0 top-0 aspect-square xl:hidden"
                    aria-label="Open Menu"
                    onClick={() => setIsNavbarExpanded(!isNavbarExpanded)}
                    >
                    <Image src="/arrow.png" alt="menu bar" width={50} height={50}></Image>
                </button>
                <div className="flex  flex-col items-center justify-center xl:flex-row gap-10">
                    {navbarPath.map((path) => (
                        <Link key={path.name} href={path.link} passHref>
                            <div className="text-[#00ffff] text-xl font-bold hover:opacity-50 transition-colors duration-300">{path.name}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};
