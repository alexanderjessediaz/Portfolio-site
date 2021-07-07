import React, {useState, useEffect} from "react";
import sanityClient from "../client.js";

export default function Resume(){

    const [resumeData, setResume] = useState(null);

    useEffect(()=> {
        sanityClient
            .fetch(`*[_type == "resume"]{
                title,
                date,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then((data) => setResume(data))
            .catch(console.error)
    }, []);

    if (!resumeData) return <div>Loading...</div>;

    return (
        <main className="min-h-screen p-12">
            <span 
                className="block relative h-full flex justify-center items-end pr-4 pb-4">
                    <h1 className="text-5xl flex justify-center cursive p-4 bg-green-700 text-red-100 rounded bg-opacity-75">Resume</h1>
                </span>
            <section className="container mx-auto">
                <header className="relative flex items-center justify-center" >
                <img
                    src={resumeData[1].mainImage.asset.url}
                    alt={resumeData.title}
                />
                </header>
            </section>
        </main>
    )
}