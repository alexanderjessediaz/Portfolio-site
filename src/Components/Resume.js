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
                <p className="text-center">If your web browser doesn't have a pdf plugin you can view it here <br></br> 
                    <a
                        className="flex justify-center hover:underline text-white"
                        href="https://docdro.id/Lv8KILj"
                        alt="AJ Diaz's Resume"
                        target="_blank"
                        rel="noreferrer"
                    >AJ Diaz's Resume</a></p>
            </div>
            <div className="flex justify-center p-4">
                <object
                    className="min-h-full w-auto md:w-3/4 lg:w-2/4"
                    data={myResume}
                    type="application/pdf"
                    style={{height:"50rem"}}
                >
                </object>
            </div>
        </main>
    )
}