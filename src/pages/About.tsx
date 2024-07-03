import RevealTitle from "@/components/animations/revealTitile";
import RevealDesc from "@/components/animations/revealdesc";
import Image from "next/image";
function About(){
    return(
        <div className="w-full min-h-lvh flex flex-col gap-10 py-20">
            <div className="h-28 w-full flex flex-row items-center justify-center gap-10 px-10">
                <div className="border-b-8 border-[#00ffff] w-full"></div>  {/* Line before ABOUT ME */}
                <h1 className="text-white whitespace-nowrap font-bold text-2xl md:text-4xl lg:text-6xl mt-2 mb-2">ABOUT ME</h1>
                <div className="border-b-8 border-[#00ffff] w-full"></div>  {/* Line after ABOUT ME */}
            </div>
            <div className="flex flex-col px-20 md:px-32 lg:px-0 lg:flex-row items-center w-full h-full justify-center gap-20">
                <RevealTitle custom={2}>
                    <div className="w-[200px] h-[300px] lg:w-[300px] lg:h-[450px] relative">
                        <Image
                            src="/foto_itb.JPG"
                            objectFit="cover"
                            layout="fill"
                            alt="Picture of the author"
                            className="rounded-full"
                            />
                    </div>
                </RevealTitle>
                
                <div className="text-white text-wrap text-sm md:text-justify md:text-xl text-center lg:w-1/3 font-bold opacity-80 tracking-widest leading-7">
                    <RevealDesc custom={2}>
                        <span> I am currently pursuing my studies at the Bandung Institute of Technology (ITB), where I am honing my skills in web development and software engineering. Beyond the digital realm, I indulge in basketball and billiards, which enhance my focus and strategic thinking. Defined by responsibility, ambition, and tenacity, I thrive on challenges and am committed to continual self-improvement. I firmly believe that "Every result stems from a process. A good process yields good results, while a flawed process leads to poor outcomes." This philosophy motivates me to strive for excellence in all my endeavors.</span>
                    </RevealDesc>
                </div>

            </div>
        </div>
    )
}

export default About;
