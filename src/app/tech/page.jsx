'use client'

import React from "react";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { config } from "react-spring";
import { useInView } from "react-intersection-observer";
// import './Tech.css'
import C from '../../../public/C.png'
import Java from '../../../public/java.png'
import Javascript from '../../../public/JS.png'
import react from '../../../public/react.png'
import Html from '../../../public/HTML.png'
import Css from '../../../public/CSS.png'
import Php from '../../../public/php.png'
import Mysql from '../../../public/mysql.png'
import Tailwind from '../../../public/tailwindcss.png'
import Bootstrap from '../../../public/bootstrap.png'
import text from "@staticData/tech";
import Image from "next/image";

function Techs() {
    const [ref, inView] = useInView({
        // triggerOnce: true,
        onChange: (inViewStatus) => {
            if (!inViewStatus) {
                setAnimationTriggered(false);
            }
        }
    });

    const [animationTriggered, setAnimationTriggered] = useState(false);
    
    const animationProps = useSpring({
        opacity: animationTriggered ? 1 : 0,
        transform: animationTriggered ? "translateX(0)" : "translateX(0%)",
        config: config.gentle,
    });

    if (inView && !animationTriggered) {
        setAnimationTriggered(true);
    }

    return (
        <animated.div ref={ref} style={animationProps}>
        <h1 className="font-bold text-xl text-center sm:text-2xl lg:text-4xl sm:pr-14 sm:pl-16 sm:ml-2 sm:mb-8 lg:mb-16 mt-14 uppercase">Technologies</h1>
        <section className="grid p-4 pb-16 sm:pb-22 sm:pr-14 sm:pl-14 xl:ml-64 xl:mr-64 h-full mt-8">
            <div>
                <div className="flex flex-wrap w-auto justify-center lg:pt-12 sm:pr-12">
                    <div className="group">
                        <Image src={C} alt="C" id="C" className="w-10 h-10 m-4 sm:w-16 sm:h-16 lg:w-20 lg:h-20 hover:scale-105 hover:animate-bounce transition-transform duration-300 ease-in"></Image>
                        <p className=" font-mono text-center sm:opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-200">C</p>
                    </div>
                    <div className="group">
                        <Image src={Java} alt='Java' id="Java" className="w-10 h-10 m-4 sm:w-16 sm:h-16 lg:w-20 lg:h-20 hover:scale-105 hover:animate-bounce transition-transform duration-300 ease-in"></Image>
                        <p className=" font-mono text-center sm:opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-200">Java</p>
                    </div>
                    <div className="group">
                        <Image src={Javascript} alt='Javascript' id="Javascript" className="w-10 h-10 m-4 sm:w-16 sm:h-16 lg:w-20 lg:h-20 hover:scale-105 hover:animate-bounce transition-transform duration-300 ease-in"></Image>
                        <p className=" font-mono text-center sm:opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-200">Javascript</p>
                    </div>
                    <div className="group">
                        <Image src={react} alt='react' id="react" className="w-12 h-10 m-4 sm:w-20 sm:h-16 lg:w-24 lg:h-20 hover:scale-105 hover:animate-bounce transition-transform duration-300 ease-in"></Image>
                        <p className=" font-mono text-center sm:opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-200">React</p>
                    </div>
                    <div className="group">
                        <Image src={Tailwind} alt='tailwind' id="tailwind" className="w-10 h-10 m-4 sm:w-16 sm:h-16 lg:w-20 lg:h-20 hover:scale-105 hover:animate-bounce transition-transform duration-300 ease-in"></Image>
                        <p className=" font-mono text-center sm:opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-200">Tailwind</p>
                    </div>
                    <div className="group">
                        <Image src={Css} alt='CSS' id="CSS" className="w-10 h-10 m-4 sm:w-16 sm:h-16 lg:w-20 lg:h-20 hover:scale-105 hover:animate-bounce transition-transform duration-300 ease-in"></Image>
                        <p className=" font-mono text-center sm:opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-200">Css</p>
                    </div>
                    <div className="group">
                        <Image src={Bootstrap} alt='Bootstrap' id="Bootstrap" className="w-10 h-10 m-4 sm:w-16 sm:h-16 lg:w-20 lg:h-20 hover:scale-105 hover:animate-bounce transition-transform duration-300 ease-in"></Image>
                        <p className=" font-mono text-center sm:opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-200">Bootstrap</p>
                    </div>
                    <div className="group">
                        <Image src={Html} alt='Html' id="Html" className="w-10 h-10 m-4 sm:w-16 sm:h-16 lg:w-20 lg:h-20 hover:scale-105 hover:animate-bounce transition-transform duration-300 ease-in"></Image>
                        <p className=" font-mono text-center sm:opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-200">Html</p>
                    </div>
                    <div className="group">
                        <Image src={Php} alt='Php' id="Php" className="w-10 h-10 m-4 sm:w-16 sm:h-16 lg:w-20 lg:h-20 hover:scale-105 hover:animate-bounce transition-transform duration-300 ease-in"></Image>
                        <p className=" font-mono text-center sm:opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-200">Php</p>
                    </div>
                    <div className="group">
                        <Image src={Mysql} alt='Mysql' id="Mysql" className="w-16 h-10 m-4 sm:w-24 sm:h-16 lg:w-28 lg:h-16 hover:scale-105 hover:animate-bounce transition-transform duration-300 ease-in"></Image>
                        <p className=" font-mono text-center sm:opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-200">Mysql</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col p-4 w-auto mt-6 mb-8'>
                <p className=" text-xl">{text.p1}</p>
                <p className=" text-xl mt-8">{text.p2}</p>
            </div>
        </section>
        </animated.div>
    )
}

export default Techs;