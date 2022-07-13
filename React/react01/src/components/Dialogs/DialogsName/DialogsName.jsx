import { NavLink } from 'react-router-dom';
import name from './DialogsName.module.css';

const DialogsName = (props) => {
    return (
        <div className={name.dialogsItems}>
            <div className={name.item}>
                <NavLink to='/dialogs/1' className={navData => navData.isActive ? name.active : name.item}>Andrew</NavLink>
            </div>
            <div className={name.item}>
                <NavLink to='/dialogs/2' className={navData => navData.isActive ? name.active : name.item}>Nick</NavLink>
            </div>
            <div className={name.item}>
                <NavLink to='/dialogs/3' className={navData => navData.isActive ? name.active : name.item}>Sasha</NavLink>
            </div>
            <div className={name.item}>
                <NavLink to='/dialogs/4' className={navData => navData.isActive ? name.active : name.item}>Viktor</NavLink>
            </div>
        </div>
    );
}

export default DialogsName;