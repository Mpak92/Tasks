import MyPosts from './MyPosts/MyPosts';
import prof from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div className={prof.hat}>
                <img src='https://cs13.pikabu.ru/post_img/big/2019/09/12/8/1568292408143083988.jpg'></img>
            </div>
            <div className={prof.ava}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU'></img>
                <div className={prof.userInformation}>
                    <div className={prof.name}>User name</div>
                    <div className={prof.data}>Date of Birth:</div>
                    <div className={prof.data}>City:</div>
                    <div className={prof.data}>Education:</div>
                    <div className={prof.data}>Web Site:</div>
                </div>
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;
