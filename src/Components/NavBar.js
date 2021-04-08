import React from "react"
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar(){
    return (
        <header className="bg-green-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink
                        to="/"
                        exact
                        activeClassName="text-white" 
                        className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                        AJ
                    </NavLink>
                    <NavLink 
                        to="/post" 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                        activeClassName="text-green-100 bg-green-700"
                    >   
                        Blog Posts
                    </NavLink>
                    <NavLink 
                        to="/project"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                        activeClassName="text-green-100 bg-green-700"
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/about" 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                        activeClassName="text-green-100 bg-green-700"
                    >
                        About me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6 justify-between">
                    <SocialIcon 
                        url="https://twitter.com/Alexanderjdiazz" 
                        className="" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{ height:35, width: 35}} 
                    />
                    <SocialIcon 
                        url="https://www.youtube.com/channel/UC5iqEUPgOwC-OxLCzFegVsA" 
                        className="" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{ height:35, width: 35}} 
                    />
                    <SocialIcon 
                        url="https://www.linkedin.com/in/alexander-jesse-diaz/" 
                        className="" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{ height:35, width: 35}} 
                    />
                    
                    
                </div>
            </div>
        </header>
    )
}