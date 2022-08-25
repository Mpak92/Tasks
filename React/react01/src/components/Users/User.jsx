import users from './Users.module.css';
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';

const User = ({user, followingInProgress, followUser, unfollowUser}) => {

    return (
        <div className={users.itemContainer}>
            <div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small ? user.photos.small : userPhoto}
                            alt="ava"
                            className={users.ava} />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button className={users.followButton}
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { unfollowUser(user.id) }} >Unfollow</button>
                        : <button className={users.followButton}
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { followUser(user.id) }} >Follow</button>}
                </div>
            </div>
            <div className={users.info}>
                <div className={users.name}>{user.name}</div>
                <div className={users.status}>{user.status}</div>
                <div className={users.location}>{'user.location.country'}, <br /> {'user.location.city'}</div>
            </div>
        </div>)
}

export default User;