import { NavLink } from 'react-router-dom';
import name from './DialogsName.module.css';

const DialogsName = (props) => {
    return (
        <div className={name.item}>
            <div>
                <img src={props.ava} alt='avatar'></img>
            </div>
            <NavLink to={'/dialogs/' + props.id} className={navData => navData.isActive ? name.active : name.item}>{props.name}</NavLink>
        </div>
    );
}

export default DialogsName;