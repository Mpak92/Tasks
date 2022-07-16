import { NavLink } from 'react-router-dom';
import nav from'./Navbar.module.css';

const Navbar = (props) => {
  return (
    <nav className={nav.nav}>
      <div className={nav.item}>
        <NavLink to='/profile' className={navData => navData.isActive ? nav.active : nav.item}>Profile</NavLink>
      </div>
      <div className={nav.item}>
        <NavLink to='/dialogs' className={navData => navData.isActive ? nav.active : nav.item}>Messages</NavLink>
      </div>
      <div className={nav.item}>
        <NavLink to='/news' className={navData => navData.isActive ? nav.active : nav.item}>News</NavLink>
      </div>
      <div className={nav.item}>
        <NavLink to='/music' className={navData => navData.isActive ? nav.active : nav.item}>Music</NavLink>
      </div>
      <div className={nav.item + ' ' + nav.set}>
        <NavLink to='/settings' className={navData => navData.isActive ? nav.active : nav.item}>Settings</NavLink>
      </div>
    </nav >
  );
}

export default Navbar;
