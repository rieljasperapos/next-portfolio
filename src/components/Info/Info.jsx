'use client'
import React, { useState, useEffect } from 'react';
import useTheme  from '@hooks/useTheme';
import github from '../../../public/github-icon.png'
import linkedin from '../../../public/linkedin-icon.png'
// import facebook from '../../../../facebook.png'
import Text from '@staticData/info';

function Info() {
    const { theme, textColorClass, toggleTheme } = useTheme();
    console.log(theme);
    
    //flex sm:justify-center items-center p-4 h-screen pb-40 sm:pl-14 sm:pr-14'
    return (
        <section className="grid sm:justify-center items-center p-4 h-auto w-auto pb-40 sm:pl-14 sm:pr-14 mt-10">
            <div className='p-4 2xl:p-24 w-full'>
                <p className=' text-xl mb-10'>
                    {Text.header1}
                </p>
                <h1 className='leading-tight text-5xl sm:text-7xl mt-6 mb-6 font-semibold font-sans sm:mt-4 sm:mb-4'>
                    {Text.name}
                    <p className='text-gray-400'>I build things on the web</p>
                </h1>
                <p className='text-lg sm:text-xl mb-4 mt-10 max-w-520'>
                    {Text.about}<span className='text-green-500 font-bold'> Computer Science </span> Student, who aspires to become a <span className='text-orange-500 font-bold'>Full stack developer</span>
                    <p className='mt-4'>{Text.p2}</p>
                </p>
                {/* <p className=' text-xl'>{Text.p2}</p> */}
                <div className='flex mt-10'>
                    {/* <a href="https://www.facebook.com/rieljasper.apos/"><img className='mr-4' src={facebook} width="40px" height="40px" /></a> */}
                    <a href="https://github.com/rieljasperapos"><img className='mr-2 rounded-full hover:animate-bounce transition-transform duration-300 ease-in' src={github} width="40px" height="40px"></img></a>
                    <a href="https://www.linkedin.com/in/riel-jasper-apos-4202a124a/"><img className='hover:animate-bounce transition-transform duration-300 ease-in' src={linkedin} width="40px" height="40px"></img></a>
                </div>
            </div>
            {/* <div className=''>
                <img className='w-full rounded-lg bg-gray-500 lg:bg-transparent' src="https://www.pngmart.com/files/23/Anya-Forger-PNG-Isolated-Image.png"></img>
            </div> */}
        </section>
    )
}

export default Info;