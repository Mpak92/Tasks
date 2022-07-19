import { NavLink } from 'react-router-dom';
import nav from'./Navbar.module.css';
import Friends from './Friends/Friends';

const Navbar = (props) => {
  let friendsOnline = props.navbar.friends.map( fr => <Friends name={fr.name} id={fr.id} ava={fr.ava} />);

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
      <div className={nav.friends}>
        <div className={nav.titul}>Friends</div>
        {friendsOnline}
      </div>
    </nav >
  );
}

export default Navbar;
