import info from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={info.hat}>
                <img src='https://cs13.pikabu.ru/post_img/big/2019/09/12/8/1568292408143083988.jpg'></img>
            </div>
            <div className={info.ava}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU'></img>
                <div className={info.userInformation}>
                    <div className={info.name}>User name</div>
                    <div className={info.data}>Date of Birth:</div>
                    <div className={info.data}>City:</div>
                    <div className={info.data}>Education:</div>
                    <div className={info.data}>Web Site:</div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
