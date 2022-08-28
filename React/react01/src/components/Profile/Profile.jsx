import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}
                userStatus={props.userStatus}
                updateUserStatus={props.updateUserStatus}
                isOwner={props.isOwner} 
                savePhoto={props.savePhoto} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
