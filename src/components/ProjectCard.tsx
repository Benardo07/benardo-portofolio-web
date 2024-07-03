import Image from "next/image";
import Link from "next/link";

interface propsType{
    image_url : string;
    project_name : string;
    project_desc : string;
    project_github : string;
    project_website : string;
}
function ProjectCard(props: propsType){
    return(
        <div className="border-white w-[300px] h-[225px] md:w-[400px] md:h-[300px] relative rounded-2xl overflow-hidden group shadow-2xl z-10">
            <Image
                src={props.image_url}
                alt="web1"
                objectFit="cover"
                layout="fill"
                className="rounded-t-2xl"
                />
            <div className="absolute w-full h-4/5 bottom-[-135px] md:bottom-[-180px] bg-[#00ffff] group-hover:bottom-0  transition-all duration-300 ease-in-out"> 
                <h1 className="font-bold text-xl text-black w-full h-1/4 justify-center flex items-center">{props.project_name}</h1>
                <div className="w-full h-full bg-black text-white font-bold p-5 flex flex-col gap-5">
                    <p className="w-full flex items-center justify-center text-center opacity-75 text-wrap">{props.project_desc}</p>
                    <div className="w-full flex flex-row gap-5 items-center justify-center">
                        <Link href={props.project_github}><button className=" bg-[#00ffff] hover:bg-opacity-50 text-black px-5 py-3 rounded-xl">View Github</button></Link>
                        <Link href={props.project_website}><button className=" bg-[#00ffff] px-5 py-3 hover:bg-opacity-50 text-black rounded-xl">View Websites</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;