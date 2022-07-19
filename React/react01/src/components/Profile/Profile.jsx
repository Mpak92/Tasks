import MyPosts from './MyPosts/MyPosts';
import prof from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profile.posts} />
        </div>
    );
}

export default Profile;
