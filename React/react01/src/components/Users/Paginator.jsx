import user from './Users.module.css';

const Paginator = (props) => {
    const pagesCount = Math.ceil(props.totalCount / props.pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const curP = props.currentPage;
    const curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    const curPL = curP + 5;
    const slicedPages = pages.slice(curPF, curPL);

    return (
        <div className={user.page}>
            {slicedPages.map(p => <div key={p}
                className={props.currentPage === p ? user.activePage : user.notActive}
                onClick={() => { props.onPageChanged(p) }}>{p}</div>)}
        </div>
    )
}

export default Paginator;