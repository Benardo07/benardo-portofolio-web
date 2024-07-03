import Image from "next/image";
import { FaArrowAltCircleDown, FaGithub, FaInstagramSquare, FaLinkedin, FaTelegram, FaTwitterSquare } from "react-icons/fa";
function Firstpage(){
    return (
        <div className="w-full min-h-lvh flex flex-col lg:flex-row lg:items-center justify-center px-20 lg:px-10 pt-40 lg:py-0 animate-swipeUp gap-32 lg:gap-60">
            <div className="lg:w-1/3 flex flex-col gap-7">
                <h1 className="text-4xl md:text-5xl lg:text-7xl  xl:text-8xl 2xl:text-9xl font-bold text-white overflow-hidden border-r-2 border-white h-[0.9em] typewriter pb-10">
                    Hi There,
                </h1>
                <h1 className="text-5xl font-bold text-white">I'm <span className="text-[#00ffff]">Benardo</span></h1>
                <button className="border-2 border-white text-white  py-3 rounded-3xl w-40 hover:bg-[#00ffff]  hover:text-black flex flex-row gap-4 items-center justify-center">about me <FaArrowAltCircleDown /></button>
                <ul className="flex flex-row gap-6">
                    <li>
                        <a aria-label="LinkedIn" href="https://www.linkedin.com/in/jigar-sable/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin style={{ color: '#00ffff' }} className="h-6 w-6"/>
                        </a>
                    </li>
                    <li>
                        <a aria-label="GitHub" href="https://github.com/jigar-sable" target="_blank" rel="noopener noreferrer">
                            <FaGithub style={{ color: '#00ffff' }} className="h-6 w-6"/>
                        </a>
                    </li>
                    <li>
                        <a aria-label="Twitter" href="https://twitter.com/jigar_sable" target="_blank" rel="noopener noreferrer">
                            <FaTwitterSquare style={{ color: '#00ffff' }} className="h-6 w-6"/>
                        </a>
                    </li>
                    <li>
                        <a aria-label="Telegram" href="https://t.me/lifecode5" target="_blank" rel="noopener noreferrer">
                            <FaTelegram style={{ color: '#00ffff' }} className="h-6 w-6"/>
                        </a>
                    </li>
                    <li>
                        <a aria-label="Instagram" href="https://www.instagram.com/jigarsable.dev" target="_blank" rel="noopener noreferrer">
                            <FaInstagramSquare style={{ color: '#00ffff' }} className="h-6 w-6"/>
                        </a>
                    </li>
                 </ul>
            </div>
            <div >
            <Image
                src="/foto_diri.JPG"
                width={375}
                height={500}
                alt="Picture of the author"
                className="rounded-full"
                />
            </div>  
        </div>
    )
}

export default Firstpage;