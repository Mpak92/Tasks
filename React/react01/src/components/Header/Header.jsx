import head from './Header.module.css';

const Header = (props) => {
    return (
        <header className={head.header}>
            <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324'
                 alt='logo'>
            </img>
        </header>
    );
}

export default Header;
