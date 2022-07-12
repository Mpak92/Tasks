import posts from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <div className={posts.createNewPost}>
                <p>My posts</p>
                <textarea name='New post' placeholder='your news...'></textarea>
                <input type={'submit'} value='SEND'></input>
            </div>
            <div className={posts.posts}>
                <Post message='Hi!'/>
                <Post message="It's my first post"/>
            </div>
        </div>
    );
}

export default MyPosts;
