import posts from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElems = props.posts.map(pos => <Post message={pos.message} likesCount={pos.likesCount} />);

    return (
        <div>
            <div className={posts.createNewPost}>
                <p>My posts</p>
                <textarea name='New post' placeholder='your news...'></textarea>
                <input type={'submit'} value='SEND'></input>
            </div>
            <div className={posts.posts}>
                {postsElems}
            </div>
        </div>
    );
}

export default MyPosts;
