import React from "react";
import myResume from '../PDF/AJDiazSoftwareEngineerResume.pdf';

export default function Resume(){
  
    return (
        <main className="p-4 mx-4">
            <span 
                className="block relative h-full flex justify-center items-end pr-4 pb-4">
                    <h1 
                        className="text-5xl flex justify-center cursive p-4 bg-green-700 text-red-100 rounded bg-opacity-75"
                    >Resume</h1>
            </span>
            <div className="flex justify-center p-4">
                <embed
                    className="min-h-full w-auto md:w-3/4 lg:w-2/4"
                    src={myResume}
                    style={{height:"50rem"}}
                    ></embed>
            </div>
        </main>
    )
}