'use client'

import { useState, React } from "react"
import { useSpring, animated } from "react-spring";
import { config } from "react-spring";
import { useInView } from "react-intersection-observer";
import projects from "@staticData/projects";
import Image from "next/image";

const Projects = () => {
    const handleClick = (url) => {
        window.location.href = url;
    }

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
        <animated.section ref={ref} style={animationProps} className="flex flex-col justify-center items-center mt-14 mb-20 sm:pr-14 sm:pl-14">
        <h1 className="font-bold text-xl text-center sm:text-2xl lg:text-4xl mb-4 sm:mb-8 lg:mb-12 uppercase">Projects</h1>
        <div className="flex flex-col justify-center items-cente grid gap-4 lg:gap-8 sm:flex sm:flex-row flex-wrap p-4">
            {projects.map((proj, i) => (
                <div key={i} onClick={() => {handleClick(proj.url)}} className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105 transition ease-out duration-300 bg-transparent mb-12 cursor-pointer">
                    <Image className="w-full sm:h-52" src={proj.image} alt={proj.description}></Image>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{proj.title}</div>
                        <p className="text-base">
                            {proj.description}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        {proj.techs.map((tech, i) => (
                            <span key={i} className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-500 mr-2 mb-2">
                                {tech}
                            </span>
                        ))}
                    </div>
                    {proj.status ? (
                        <div className="mb-8">
                            <span className="px-6 pr-2 text-gray-500">Status:</span>
                            <span className=" text-green-500 font-semibold">
                                Finished
                            </span>
                        </div>
                    ) : (
                        <div className="mb-8">
                            <span className="px-6 pr-2 text-gray-500">Status:</span>
                            <span className=" text-red-500 font-semibold">
                                Project under develop
                            </span>
                        </div>
                    )}
                </div>
                
            ))}
        </div>
        </animated.section>

    )
}

export default Projects;