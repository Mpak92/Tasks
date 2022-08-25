import posts from './MyPosts.module.css';
import Post from './Post/Post';
import { useForm } from "react-hook-form";
import React from 'react';

const MyPosts = React.memo((props) => {
    let postsElems = props.posts.map(pos => <Post message={pos.message} likesCount={pos.likesCount} key={pos.id} />);

    return (
        <div>
            <MyPostsForm addPost={props.addPost} />
            <div className={posts.posts}>
                {postsElems}
            </div>
        </div>
    );
})

const MyPostsForm = (props) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({mode: 'onSubmit'});
    const onSubmit = data => {
        props.addPost(data.newPost);
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={posts.createNewPost}>
                <p>My posts</p>
                <textarea {...register('newPost',
                    {
                        required: 'This field cannot be empty'
                    })}
                    placeholder='your news...' />
                <div className={posts.createError}>{errors.newPost?.message}</div>
                <button>SEND</button>
            </div>
        </form>
    );
}

export default MyPosts;
