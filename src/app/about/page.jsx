import Image from "next/image";
import profilepic from '../../../public/profilepic.png'
import texts from '@staticData/about'

const about = () => {
    return (
        <div className="mt-14 sm:pr-14 sm:pl-14">
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-xl text-center sm:text-2xl lg:text-4xl sm:pr-14 sm:pl-14 mb-8 uppercase">
                    About
                </h1>
                <Image src={profilepic} alt='profile'></Image>
                <p className="leading-8 grid justify-center items-center xl:mr-64 xl:ml-64 p-16">
                    <span className="mr-2">{texts.text1}</span>
                    {/* <spann>{texts.text2}</spann> */}
                </p>
            </div>
        </div>
    )
}

export default about;