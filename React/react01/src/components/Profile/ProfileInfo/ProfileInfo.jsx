import Preloader from '../../common/preloader/Preloader';
import info from './ProfileInfo.module.css';
import yes from '../../../assets/images/true.png';
import no from '../../../assets/images/false.png';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={info.hat}>
                <img src='https://cs13.pikabu.ru/post_img/big/2019/09/12/8/1568292408143083988.jpg' alt='hat'></img>
            </div>
            <div className={info.ava}>
                <img className={info.avatar} src={props.profile.photos.large} alt='avatar'></img>
                <div className={info.userInformation}>
                    <div className={info.name}>{props.profile.fullName}</div>
                    <div className={info.status}>
                        <ProfileStatus userStatus={props.userStatus} updateUserStatus={props.updateUserStatus} />
                    </div>
                    <div className={info.data}>Date of Birth:</div>
                    <div className={info.data}>City:</div>
                    <div className={info.data}>About me: {props.profile.aboutMe}</div>
                    <div className={info.data}>VK: {props.profile.contacts.vk}</div>
                    <div className={info.data}>Facebook: {props.profile.contacts.facebook}</div>
                    <div className={info.data}>Twitter: {props.profile.contacts.twitter}</div>
                    <div className={info.data}>Instagram: {props.profile.contacts.instagram}</div>
                    <div className={info.data}>Looking for a job: {props.profile.lookingForAJob ?
                        <img className={info.finger} alt='yes' src={yes} /> :
                        <img className={info.finger} alt='no' src={no} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;

// {
//     "aboutMe": "я круто чувак 1001%",
//     "contacts": {
//       "facebook": "facebook.com",
//       "website": null,
//       "vk": "vk.com/dimych",
//       "twitter": "https://twitter.com/@sdf",
//       "instagram": "instagra.com/sds",
//       "youtube": null,
//       "github": "github.com",
//       "mainLink": null
//     },
//     "lookingForAJob": true,
//     "lookingForAJobDescription": "не ищу, а дурачусь",
//     "fullName": "samurai dimych",
//     "userId": 2,
//     "photos": {
//       "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
//       "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
//     }
//   }