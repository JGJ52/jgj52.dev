"use client"
import {useEffect, useState} from "react";
import "./project.css";

export default function Projects() {
    type project = {
        name: string,
        url: string,
        description: string,
        image: string,
    }

    const [projects, setProjects] = useState<project[]>([])

    useEffect(() => {
        async function Fetch() {
            const response = await fetch("https://raw.githubusercontent.com/JGJ52/projects/refs/heads/main/projects.json")
            setProjects(await response.json())
        }

        Fetch()
    }, [])

    return (
        <>
            <div className="flex flex-col items-center justify-between pt-12">
                <p className={"text-4xl rubik"}>My projects</p>
                <div className="flex flex-wrap mt-12 gap m-4 gap-4">
                    {projects.map((project) => (
                        <a key={project.name} className={"project"} href={project.url}>
                            {/* eslint-disable-next-line @next/next/no-img-element,jsx-a11y/alt-text */}
                            <img src={`https://raw.githubusercontent.com/JGJ52/projects/refs/heads/main/images/${project.image}`} />
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