import post from './Post.module.css';

const Post = (props) => {
    return (
        <div className={post.item}>
            <div className={post.round}></div>
            {props.message}
            <div className={post.likes}>Likes {props.likesCount}</div>
        </div>
    );
}

export default Post;
