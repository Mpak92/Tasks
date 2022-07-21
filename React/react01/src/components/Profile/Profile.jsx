import MyPosts from './MyPosts/MyPosts';
import prof from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { addPost } from './../../redux/state';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profile.posts}
                addPost={props.addPost}
                newPostText={props.profile.newPostText} 
                updateNewPostText={props.updateNewPostText} />
        </div>
    );
}

export default Profile;
