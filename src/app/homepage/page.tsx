
import ParticlesBackground from "../../components/ParticlesBackground"
import Firstpage from "@/pages/Firstpage";
import About from "@/pages/About";
import Project from "@/pages/Project";
import SkillPage from "@/pages/SkillPage";
import Contact from "@/pages/Contact";
import RevealTitle from "@/components/animations/revealTitile";
export default function HomePage(){
    return (
        <div className="w-full h-full">
            <ParticlesBackground/>
            <div id="1">
                <RevealTitle custom={2}>
                    <Firstpage/>
                </RevealTitle>
            </div>
            <div id="2">
                <About/>
            </div>
            <div id="3">
             <Project/>
            </div>
            <div id="4">
             <SkillPage/>
            </div>
            <div id="5">
                <Contact/>
            </div>
        </div>
    )
}