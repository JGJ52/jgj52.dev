import "./project.css";
import Navbar from "./navbar/navbar";

export default function Home() {
    type project = {
        name: string,
        url: string,
    }

    const projects: project[] = [
        {
            name: "Capey",
            url: "https://capey.app",
        }
    ]

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-between pt-12">
                <p className={"text-4xl rubik"}>My projects</p>
                <div className="flex flex-wrap mt-12">
                    {projects.map((project) => (
                        <a key={project.name} className={"project"} href={project.url}>
                            <p className={"text-2xl fredoka"}>{project.name}</p>
                        </a>
                    ))}
                </div>
            </div>
        </>
    )
}
