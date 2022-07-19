import post from './Post.module.css';

const Post = (props) => {
    return (
        <div className={post.item}>
            <div className={post.avatar}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU'></img>
            </div>
            {props.message}
            <div className={post.likes}>Likes {props.likesCount}</div>
        </div>
    );
}

export default Post;
