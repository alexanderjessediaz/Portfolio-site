import React, {useEffect, useState} from "react";
import sanityClient from "../client.js";
import '../Styles/projects.css';

export default function Project(){
    const [projectData, setProjectData] = useState(null);

    useEffect(() =>{
        sanityClient.fetch(`*[_type =="project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`).then((data)=> setProjectData(data))
        .catch((error) => console.log(error));
    }, []);
    return(
        <main className="bg-green-100 min-h-screen p-12" id="top-main">
            <section className="container mx-auto">
            <span 
                className="block relative h-full flex justify-center items-end pr-4 pb-4">
                <h1 className="text-5xl flex justify-center cursive p-4 bg-green-700 text-red-100 rounded bg-opacity-75">My Projects</h1>
                </span>
                <section className="space-y-4 lg:grid lg:auto-cols-min lg:grid-cols-2 gap-8">
                    {projectData && projectData.map((project,index)=> (
                    <article key={index} className="relative rounded-lg shadow-xl bg-white p-16">
                        <h3 className="text-gray-800 text-lg lg:text-3xl font-bold mb-2 hover:text-red-700">
                            <a
                            href={project.link}
                            alt={project.title}
                            target="_blank"
                            
                            rel="noopener noreferrer"
                            >{project.title}</a>
                        </h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Finished on</strong>:{" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="font-bold">Company</strong>:{" "}
                                {project.place}
                            </span>
                            <span>
                                <strong className="font=bold">Type</strong>:{" "}
                                {project.projectType}
                            </span>
                            <p 
                            className="my-6 text-base text-justify lg:text-lg text-gray-700 leading-relaxed"
                            >
                                {project.description}
                            </p>
                            <a 
                                href={project.link}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="text-red-500 font-bold hover:underline hover:text-red-400">
                                    View the Project{" "}
                                </a>
                            <span role="img" aria-label="right pointer">
                                👉
                            </span>
                        </div>
                    </article>
                ))}
                </section>
            </section>
        </main>
    )
};