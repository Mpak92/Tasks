import cont from './DiaCont.module.css';

const DiaCont = (props) => {
    return (
        <div className={cont.messages}>
            <div className={cont.message}>DiaCont</div>
            <div className={cont.message}>DiaCont</div>
            <div className={cont.message}>DiaCont</div>
        </div>
    );
}

export default DiaCont;