import user from './Users.module.css';
import Paginator from './Paginator';
import User from './User';

const Users = (props) => {
    return (<div>
        <Paginator totalCount={props.totalCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
        <div className={user.container}>
            {props.users.map(u => <User key={u.id} user={u}
                followingInProgress={props.followingInProgress}
                followUser={props.followUser}
                unfollowUser={props.unfollowUser} />)}
        </div>
    </div>)
}

export default Users;