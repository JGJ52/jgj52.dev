import "./project.css";
import Navbar from "./navbar/navbar";

export default function Home() {
    type project = {
        name: string,
        url: string,
        description: string,
    }

    const projects: project[] = [
        {
            name: "Capey",
            url: "https://capey.app",
            description: "Have a custom cape which others who use this mod can see too",
        },
    ]

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-between pt-12">
                <p className={"text-4xl rubik"}>My projects</p>
                <div className="flex flex-wrap mt-12 gap m-4">
                    {projects.map((project) => (
                        <a key={project.name} className={"project"} href={project.url}>
                            <p className={"text-2xl fredoka"}>{project.name}</p>
                            <div className={"rounded-lg border-2 border-[#1a1b1c] mt-2 mb-2"}></div>
                            <p className={"opacity-60"}>{project.description}</p>
                        </a>
                    ))}
                </div>
            </div>
        </>
    )
}
