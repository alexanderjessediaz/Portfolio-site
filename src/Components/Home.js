import React from "react"
import image from "../Images/Drawing-1.sketchpad (1).png"

export default function Home(){
    return (
        <main>
            <img 
                src={image} 
                alt="drawing" 
                className="absolute object-cover w-full h-full"
            />

            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug"> AJ Diaz: Software Engineer</h1>
            </section>
        </main>
    )
}