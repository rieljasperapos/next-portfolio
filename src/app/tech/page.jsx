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
import techStack from "@/staticData/techStack";

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
                <div className="flex flex-wrap w-auto justify-center gap-5 lg:pt-12 sm:pr-12">
                    {techStack.map((item, indx) => {
                        return (
                            <div key={indx} className="group">
                                <div className={`hover:scale-105 hover:animate-bounce transition-transform duration-300 ease-in shadow radial-progress ${item.color}`} style={{ "--value": `${item.value}`, "--size": "10rem", "--thickness": "1rem" }}>
                                    <Image src={item.src} width={40} height={40} alt={item.title}></Image>
                                    <span className="font-bold mt-2">{item.progress}</span>
                                </div>
                                <p className="group-hover:opacity-100 transition-opacity duration-200 ease-300 opacity-0 text-center mt-4">{item.title}</p>
                            </div>
        
                        )
                    })}
                </div>
            </div>
            <div className='flex flex-col p-4 pt-0 w-auto mb-8'>
                <p className=" text-lg">{text.p1}</p>
                <p className=" text-lg mt-8">{text.p2}</p>
            </div>
        </section>
        </animated.div>
    )
}

export default Techs;