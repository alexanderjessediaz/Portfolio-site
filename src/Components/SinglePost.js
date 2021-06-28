import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
}

export default function SinglePost(){
    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();

    useEffect(()=> {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`).then((data) => setSinglePost(data[0]))
        .catch(console.error);
    }, [slug]);

    if (!singlePost) return <div>Loading...</div>;
    return (
        <main className="bg-gray-200 min-h-screen p-12">
            <article className="container shadow-lg mx-auto bg-green-100 rounded-lg">
                <header className="relative">
                    <div className="absolute h-full w-full flex items-center justify-center p-8">
                    </div>
                    <img 
                    src={singlePost.mainImage.asset.url} 
                    alt={singlePost.title} 
                    className="w-full object-cover rounded-t"
                    style={{ height: "60%"}} 
                    />
                </header>
                <div 
                className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full"
                >
                        <div className="bg-white bg-opacity-75 rounded p-4">
                            <h1 className="cursive text-3xl lg:text-2xl text-center">
                                {singlePost.title}
                            </h1>
                        </div>
                    <BlockContent 
                        serializers={serializers}
                        blocks={singlePost.body} 
                        projectID="3qxytl5i" 
                        dataset="production"
                    />
                </div>
            </article>
        </main>
    )
}