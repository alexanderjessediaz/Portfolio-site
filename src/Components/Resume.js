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

    const seeData = () => {
        console.log("resumeData:" ,resumeData[1])
    }

    if (!resumeData) return <div>Loading...</div>;

    return (
        <main>
            {seeData()}
            <section>
                <img
                    src={resumeData[1].mainImage.asset.url}
                    alt={resumeData.title}
                />
            </section>
        </main>
    )
}