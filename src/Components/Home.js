import React, {useState, useEffect} from "react";
import sanityClient from "../client";
import '../Styles/home.css';
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source)
}

export default function Home(){

    
    const [author, setAuthor] = useState(null);

    useEffect(()=> {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
        )
        .then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, []);

    if (!author) return <div>Loading...</div>;

    return (
        <main className="relative flex justify-center">
            <div className="p-10 lg:pt-18 container mx-auto relative">
                <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-5  lg:p-20">
                    <img 
                        src={urlFor(author.authorImage).url()} 
                        className="hidden lg:block rounded w-32 h-32 lg:w-48 lg:h-80 mr-8"
                        alt={author.name}
                    />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-xl lg:text-4xl text-green-300 mb-4">
                            Hey there, I'm{" "}
                            <span className="text-green-100">{author.name}</span>
                        </h1>
                        <div className="cursive prose lg:prose-xl text-white">
                            <BlockContent 
                                blocks={author.bio} 
                                projectID="3qxytl5i" 
                                dataset="production"
                            />
                            <small className="cursive prose lg:prose-xl text-white">
                                Feel free to drop me an email at <a
                                    id="welcome-email"
                                    href="mailto: alexanderjessediaz@gmail.com" alt="alexanderjessediaz@gmail.com">alexanderjessediaz@gmail.com</a>
                            </small>
                        </div>
                    </div>
                </section>
            </div>
        </main>  
    )
}