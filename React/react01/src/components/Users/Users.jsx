import user from './Users.module.css';
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';

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
                                    onClick={() => { props.unfollow(u.id) }} >Unfollow</button>
                                : <button className={user.followButton}
                                    onClick={() => { props.follow(u.id) }} >Follow</button>}
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