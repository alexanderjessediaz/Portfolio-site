import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Resume() {
    const [resumeData, setResumeData] = useState(null);

    useEffect(()=> {
        sanityClient
            .fetch(`*[_type == "resume"]{
                file
            }`)
            .then((data) => setResumeData(data))
            .catch(console.error)
    }, []);

    return (
        <main>
            
        </main>
    )
}