import logo from "../../helper/logo.png";
import NavbarStyle from "./Navbar.module.scss"
const Navbar = () => {
    return (
        <div className={NavbarStyle['NavBar']}>
            <img className={NavbarStyle['img']} src={logo} alt="logo" />
            <ul>
                <li>
                    <a href="#">HOROSCOPE</a>
                </li>
                <li>
                    <a href="#">DAILY</a>
                </li>
                <li>
                    <a href="#">TAROT</a>
                </li>
                <li>
                    <a href="#">ARTICLE</a>
                </li>
                <li>
                    <a href="#">CONTACT</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
