import ProjectCard from "@/components/ProjectCard";
import RevealTitle from "@/components/animations/revealTitile";

const projects = [
    {
        image_url : "/web1.png",
        project_name : "Wisuda April 2024",
        project_desc : "Website for showing information for graduation event in ITBs",
        project_github : "https://github.com/wispril-2024/wispril-2024",
        project_website : "https://paradewispril2024.com/",
    },
    {
        image_url : "/web2.png",
        project_name : "Ganesha Space",
        project_desc : "Website for showing cafe information",
        project_github : "https://github.com/Benardo07/Website-Cafe-Co-working-Space",
        project_website : "https://ganesha-space.vercel.app/",
    },
    {
        image_url : "/web3.png",
        project_name : "SEA Salon",
        project_desc : "Website for showing salon management like booking, write a review, and admin dashboard",
        project_github : "https://github.com/Benardo07/SEA-salon",
        project_website : "https://sea-salon-plum.vercel.app/",
    },
    {
        image_url : "/web4.png",
        project_name : "Cinema Ticket Website",
        project_desc : "Website for booking ticket ",
        project_github : "https://github.com/Benardo07/Cinema-app",
        project_website : "https://cinema-app-inky.vercel.app/",
    },
    {
        image_url : "/web5.png",
        project_name : "Itb Fair 2024",
        project_desc : "Website for showing ITB event information",
        project_github : "https://github.com/Benardo07/ITB-Fair-2024",
        project_website : "https://itb-fair-2024-staging.vercel.app/",
    },
    {
        image_url : "/web6.png",
        project_name : "Social Media Web",
        project_desc : "Website you can post a photo, write a coomment , like other post , follow and unfollow",
        project_github : "https://github.com/Benardo07/Social_Media_Web",
        project_website : "https://social-media-web-ten.vercel.app/",
    },
]

function Project(){
    return (
        <div className="w-full md:px-10 py-20 flex flex-col gap-10">
            <div className="h-28 w-full flex flex-row items-center justify-center gap-10 px-10">
                <div className="border-b-8 border-[#00ffff] w-full"></div>  {/* Line before ABOUT ME */}
                <h1 className="text-white whitespace-nowrap font-bold text-2xl md:text-4xl lg:text-6xl mt-2 mb-2">PROJECTS</h1>
                <div className="border-b-8 border-[#00ffff] w-full"></div>  {/* Line after ABOUT ME */}
            </div>
            <div className="flex flex-row gap-20 flex-wrap items-center justify-center px-5 md:px-16">
                {projects.map((project, index) => (
                    <RevealTitle custom={index* 0.5} key={index}>
                        <ProjectCard  {...project}/>
                    </RevealTitle>
                ))}
            </div>
        </div>
    )
}

export default Project;