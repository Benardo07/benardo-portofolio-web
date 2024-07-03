import SkillData from "@/components/SkillData";
import { Skill } from "@/components/SkillInterface";
import RevealTitle from "@/components/animations/revealTitile";
import Image from "next/image";

function SkillPage(){
    return (
        <div className="w-full flex flex-col gap-10 px-20 py-20">
            <div className="h-28 w-full flex flex-row items-center justify-center gap-10">
                <div className="border-b-8 border-[#00ffff] w-full"></div>  {/* Line before ABOUT ME */}
                <h1 className="text-white whitespace-nowrap font-bold text-2xl md:text-4xl lg:text-6xl mt-2 mb-2">SKILLS</h1>
                <div className="border-b-8 border-[#00ffff] w-full"></div>  {/* Line after ABOUT ME */}
            </div>
            <div className="flex flex-row gap-3 md:gap-5 lg:gap-10 justify-center items-center flex-wrap px-5 md:px-10 lg:px-20">
                {SkillData.map((skill : Skill, index) => (
                    <RevealTitle custom={index*0.5} key={index}>
                        <div className="w-[100px] h-[100px] flex flex-col gap-2 items-center justify-center mt-4">
                            <Image
                                src={skill.icon}
                                width={75}
                                height={75}
                                alt="Picture of the author"
                            />
                            <h1 className="text-white text-xl">
                                {skill.name}
                            </h1>
                        </div>
                    </RevealTitle>
                ))}
            </div>
            
        </div>
    )

}

export default SkillPage;