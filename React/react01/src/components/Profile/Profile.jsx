import MyPosts from './MyPosts/MyPosts';
import prof from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profile.posts}
                newPostText={props.profile.newPostText}
                dispatch={props.dispatch} />
        </div>
    );
}

export default Profile;
