'use client'

import Link from 'next/link';
import React, { useEffect, useState } from "react";
import useTheme  from "@hooks/useTheme";

function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
    };

    const { toggleTheme } = useTheme();

    return (
        <>
        <div className="flex align-center justify-between pl-4 pr-4 shadow-sm">
            <Link href='/' className="p-4 text-shadow-md font-sans text-2xl cursor-default hover:text-blue-500">rieljasper</Link>
            <ul className="hidden sm:flex sm:p-4 text-lg">
                <li className="mr-14 hover:text-orange-400 cursor-default text-lg">
                    <Link href='/projects'>Projects</Link>
                </li>
                <li className="mr-14 hover:text-orange-400 cursor-default text-lg">
                    <Link href="/tech">Technologies</Link>
                </li>
                <li className="hover:text-orange-400 cursor-default text-lg mr-7">
                    <Link href="/about">About</Link>
                </li>
                <div className="border-l mr-8"></div>
                <label className="swap swap-rotate pr-4">
                    <input type="checkbox" onClick={toggleTheme}/>
                    <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                    <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                </label>
            </ul>

            <div className="sm:hidden cursor-pointer p-4 drawer-end" style={{ zIndex: 999 }}>
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" checked={drawerOpen} onChange={toggleDrawer} />
                <div className="drawer-content">
                    <label htmlFor="my-drawer-4" className="drawer-button">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                    </label>
                </div> 
                <div className={`drawer-side ${drawerOpen ? 'drawer-open' : ''}`}>
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className={`drawer-overlay ${drawerOpen ? 'overlay-visible' : ''}`} onClick={closeDrawer}></label> 
                    <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content ">
                        <button className="close-button flex flex-col items-end" onClick={closeDrawer}>
                            <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                            </svg>
                        </button>
                        <ul>
                            <li>
                                <Link href='/projects' onClick={closeDrawer}>Projects</Link>
                            </li>
                            <li>
                                <Link href='/tech' onClick={closeDrawer}>Technologies</Link>
                            </li>
                            <li>
                                <Link href='/about' onClick={closeDrawer}>About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <hr className="opacity-50"></hr>
        </>
    );
}

export default Header;
