import { useRouter } from "next/router";
import React from "react";

export default function Post({post}: any) {
    const router = useRouter();

    return (
        <div>
            Post: {router.asPath}
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: "1" } },
            { params: { id: "2" } },
            { params: { id: "3" } },
        ],
        fallback: 'blocking',
    }
};

export async function getStaticProps(context: any) {
    const { id } = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await response.json();

    return {
        // will be passed to the page component as props    
        props: {
            post,
        },
        revalidate: 10, // In seconds
    };
};