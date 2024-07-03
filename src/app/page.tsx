import Image from "next/image";
import ParticlesBackground from "../components/ParticlesBackground"
import Firstpage from "@/pages/Firstpage";
import About from "@/pages/About";
import Project from "@/pages/Project";
import SkillPage from "@/pages/SkillPage";
import HomePage from "./homepage/page";
export default function Home() {
  return (
    <div className="w-full h-full">
      <HomePage/>
    </div>
  );
}
