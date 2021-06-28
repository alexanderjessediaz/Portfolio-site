import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import '../Styles/post.css';


export default function Post(){

    const [postData, setPost] = useState(null);

    useEffect(()=> {
        sanityClient
            .fetch(`*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then((data) => setPost(data))
            .catch(console.error)
    }, []);

    return(
        <main className="bg-green-100 min-h-screen p-12" id="top-main">
            <section className="container mx-auto">
                <span 
                className="block relative h-full flex justify-center items-end pr-4 pb-4">
                    <h1 className="text-5xl flex justify-center cursive p-4 bg-green-700 text-red-100 rounded bg-opacity-75">Blogs</h1>
                </span>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postData &&
                        postData.map((post, index)=>(
                        <article key={post.slug.current}>
                        <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                        <span 
                            className="block h-64 relative rounded shadow leading-snug"
                            key={index}
                            >
                            <img
                                src={post.mainImage.asset.url}
                                alt={post.mainImage.alt}
                                className="w-full h-full rounded-r object-cover absolute"
                            />
                            <span 
                                className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                <h3 
                                    className="text-grey-800 text-lg font-bold px-3 py-4 bg-green-700 text-red-100 bg-opacity-75 rounded" 
                                >
                                    {post.title}
                                </h3>
                            </span>
                        </span>
                        </Link>
                    </article>
                    ))}
                </div>
            </section>
        </main>

    )
    
}