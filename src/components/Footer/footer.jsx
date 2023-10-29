import Link from "next/link";
import Image from "next/image";
import github from '../../../public/github-icon.svg'

const footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content mt-14">
            <aside>
                <p className="mt-6">@rieljasper</p>
            </aside>
            <nav>
                <header className="footer-title">Socials</header>
                <div className="grid grid-flow-col gap-4">
                    <Link href="https://github.com/rieljasperapos" target="_blank"><Image src='/github-icon.svg' width={30} height={30} alt="github"></Image></Link>
                    <Link href='https://www.linkedin.com/in/riel-jasper-apos-4202a124a/' target="_blank"><Image src='/linkedin.png' width={30} height={30} alt="linkedin"></Image></Link>
                    <Link href='https://www.facebook.com/rieljasper.apos/' target="_blank"><Image src='/facebook.png' width={30} height={30} alt="facebook"></Image></Link>
                </div>
            </nav>
        </footer>
    )
}

export default footer;