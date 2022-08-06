import user from './Users.module.css';
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalCount / props.pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const curP = props.currentPage;
    const curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    const curPL = curP + 5;
    const slicedPages = pages.slice(curPF, curPL);

    const getFollow = (id) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {},{
            withCredentials: true,
            headers: {
                'API-KEY': 'f2c3c2f6-8493-49b7-b550-83cfb33ac815'
            }
        })
        .then(response => {
            if (response.data.resultCode === 0) {
                props.follow(id);
            }
        });
    };

    const getUnfollow = (id) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
            withCredentials: true,
            headers: {
                'API-KEY': 'f2c3c2f6-8493-49b7-b550-83cfb33ac815'
            }
        })
        .then(response => {
            if (response.data.resultCode === 0) {
                props.unfollow(id);
            }
        });
    };

    return (<div>
        <div className={user.page}>
            {slicedPages.map(p => <div key={p}
                className={props.currentPage === p ? user.activePage : user.notActive}
                onClick={() => { props.onPageChanged(p) }}>{p}</div>)}
        </div>
        <div className={user.container}>
            {
                props.users.map(u => <div key={u.id} className={user.itemContainer}>
                    <div>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small ? u.photos.small : userPhoto}
                                    alt="ava"
                                    className={user.ava} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button className={user.followButton}
                                    onClick={() => { getUnfollow(u.id) }} >Unfollow</button>
                                : <button className={user.followButton}
                                    onClick={() => { getFollow(u.id) }} >Follow</button>}
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
    </div>
    )
}

export default Users;