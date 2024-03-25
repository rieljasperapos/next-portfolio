'use client'

import React from "react";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { config } from "react-spring";
import { useInView } from "react-intersection-observer";
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
                            <div key={indx} className='group hover:animate-pulse transition-transform duration-300 ease-in'>
                                <div className={`flex flex-col justify-center items-center radial-progress ${item.textColor} drop-shadow-xl`} style={{ "--value": `${item.value}`, "--size": "9rem", "--thickness": "0.6rem" }}>
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