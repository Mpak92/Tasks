import user from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([{
            id: 1,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4FqfSaO96eCocMum8PnH33KAoISdNpFtpg&usqp=CAU',
            followed: true,
            fullName: 'Nikolai',
            status: 'Hi, im newby',
            location: { city: 'Minsk', country: 'Belarus' }
        },
        {
            id: 2,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4FqfSaO96eCocMum8PnH33KAoISdNpFtpg&usqp=CAU',
            followed: false,
            fullName: 'Sasha',
            status: 'Hi, im newby',
            location: { city: 'Moscow', country: 'Russia' }
        },
        {
            id: 3,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4FqfSaO96eCocMum8PnH33KAoISdNpFtpg&usqp=CAU',
            followed: false,
            fullName: 'Viktor',
            status: 'Hi, im newby',
            location: { city: 'Borisov', country: 'Belarus' }
        },
        {
            id: 4,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4FqfSaO96eCocMum8PnH33KAoISdNpFtpg&usqp=CAU',
            followed: false,
            fullName: 'Anya',
            status: 'Hi, im newby',
            location: { city: 'Rostov', country: 'Russia' }
        },
        {
            id: 5,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4FqfSaO96eCocMum8PnH33KAoISdNpFtpg&usqp=CAU',
            followed: false,
            fullName: 'Lena',
            status: 'Hi, im newby',
            location: { city: 'Rostov', country: 'Russia' }
        },
        {
            id: 6,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4FqfSaO96eCocMum8PnH33KAoISdNpFtpg&usqp=CAU',
            followed: false,
            fullName: 'Boris',
            status: 'Hi, im newby',
            location: { city: 'Borisov', country: 'Belarus' }
        },
        {
            id: 7,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4FqfSaO96eCocMum8PnH33KAoISdNpFtpg&usqp=CAU',
            followed: false,
            fullName: 'Vika',
            status: 'Hi, im newby',
            location: { city: 'Novocherkassk', country: 'Russia' }
        }]);
    };

    return (
        <div className={user.container}>
            {
                props.users.map(u => <div key={u.id} className={user.itemContainer}>
                    <div>
                        <div>
                            <img src={u.photoUrl}
                                alt="ava"
                                className={user.ava} />
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
                        <div className={user.name}>{u.fullName}</div>
                        <div className={user.status}>{u.status}</div>
                        <div className={user.location}>{u.location.country}, <br /> {u.location.city}</div>
                    </div>
                </div>)
            }
        </div>
    )
};

export default Users;