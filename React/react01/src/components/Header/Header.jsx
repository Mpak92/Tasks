import { NavLink } from 'react-router-dom';
import Preloader from '../common/preloader/Preloader';
import head from './Header.module.css';

const Header = (props) => {
    return (
        <header className={head.header}>
            <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324'
                 alt='logo'>
            </img>
            <div className={head.loginBlock}>
                {props.auth.isFetching ? <Preloader /> :
                    <div>
                        {props.auth.isAuth ? props.auth.login : <NavLink to='/login'>Login</NavLink>}
                    </div>}
            </div>
        </header>
    );
}

export default Header;
