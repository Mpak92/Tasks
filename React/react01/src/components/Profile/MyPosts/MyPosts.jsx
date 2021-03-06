import posts from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElems = props.posts.map(pos => <Post message={pos.message} likesCount={pos.likesCount} key={pos.id} />);

    const addPost = () => {
        props.addPost();
    };

    const onPostChange = (e) => {
        const text = e.target.value;
        props.updateNewPostText(text);
    };

    return (
        <div>
            <div className={posts.createNewPost}>
                <p>My posts</p>
                <textarea name='New post' placeholder='your news...'
                    value={props.newPostText}
                    onChange={onPostChange} />
                <input type={'submit'}
                    value='SEND'
                    onClick={addPost}></input>
            </div>
            <div className={posts.posts}>
                {postsElems}
            </div>
        </div>
    );
}

export default MyPosts;
