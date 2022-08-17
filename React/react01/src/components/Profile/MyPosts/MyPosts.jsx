import posts from './MyPosts.module.css';
import Post from './Post/Post';
import { useForm } from "react-hook-form";

const MyPosts = (props) => {
    let postsElems = props.posts.map(pos => <Post message={pos.message} likesCount={pos.likesCount} key={pos.id} />);

    return (
        <div>
            <MyPostsForm addPost={props.addPost} />
            <div className={posts.posts}>
                {postsElems}
            </div>
        </div>
    );
}

const MyPostsForm = (props) => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        props.addPost(data.newPost);
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={posts.createNewPost}>
                <p>My posts</p>
                <textarea {...register('newPost')} placeholder='your news...' />
                <button>SEND</button>
            </div>
        </form>
    );
}

export default MyPosts;
