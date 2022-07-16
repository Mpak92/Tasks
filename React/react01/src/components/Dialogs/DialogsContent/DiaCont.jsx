import cont from './DiaCont.module.css';

const DiaCont = (props) => {
    return (
        <div className={cont.message}>{props.message}</div>
    );
}

export default DiaCont;