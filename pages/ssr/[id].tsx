import { useRouter } from "next/router"

const Post = ({post}: any) => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            Post: {id}
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;

export async function getServerSideProps(context: any) {
    const { params } = context;
    const { id } = params;

    const reponse = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const post = await reponse.json();

    return {
        props: {
            post
        }
    }
}