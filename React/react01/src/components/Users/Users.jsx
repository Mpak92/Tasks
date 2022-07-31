import user from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png'
import React from 'react';

class Users extends React.Component {

    constructor(props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => { this.props.setUsers(response.data.items) });
    }

    render() {
        return (
            <div className={user.container}>
                {
                    this.props.users.map(u => <div key={u.id} className={user.itemContainer}>
                        <div>
                            <div>
                                <img src={u.photos.small ? u.photos.small : userPhoto}
                                    alt="ava"
                                    className={user.ava} />
                            </div>
                            <div>
                                {u.followed
                                    ? <button className={user.followButton}
                                        onClick={() => { this.props.unfollow(u.id) }} >Unfollow</button>
                                    : <button className={user.followButton}
                                        onClick={() => { this.props.follow(u.id) }} >Follow</button>}
                            </div>
                        </div>
                        <div className={user.info}>
                            <div className={user.name}>{u.name}</div>
                            <div className={user.status}>{u.status}</div>
                            <div className={user.location}>{'u.location.country'}, <br /> {'u.location.city'}</div>
                        </div>
                    </div>)
                }
            </div>
        )
    }
}

export default Users;