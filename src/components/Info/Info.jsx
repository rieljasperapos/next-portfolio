import Image from 'next/image';
import Link from 'next/link';
import useTheme  from '@hooks/useTheme';
import Text from '@staticData/info';

function Info() {
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
                    {Text.about}
                    <span className='text-green-500 font-bold ml-2 mr-2'>Computer Science</span> 
                    <span>Student, who aspires to become a</span>
                    <span className='text-orange-500 font-bold ml-2'>Full stack developer</span>
                    <br />
                    <span className='mt-4'>{Text.p2}</span>
                </p>
                <div className='flex mt-10'>
                    <Link href="https://github.com/rieljasperapos"><Image className='mr-2 rounded-full hover:animate-pulse transition-transform duration-300 ease-in' src='/github-icon.png' alt='github' width={40} height={40}></Image></Link>
                    <Link href="https://www.linkedin.com/in/riel-jasper-apos-4202a124a/"><Image className='hover:animate-pulse transition-transform duration-300 ease-in' src='/linkedin-icon.png' alt='linkedin' width={38} height={38}></Image></Link>
                </div>
            </div>
        </section>
    )
}

export default Info;