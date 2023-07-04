import HeaderStyle from "./Header.module.scss";
const Header = () => {
    return (
        <div className={HeaderStyle["Header"]}>
            <h1 className={HeaderStyle["h1"]}>
                <span className={HeaderStyle["span"]}>WHO ARE YOU</span>
            </h1>
        </div>
    );
};

export default Header;
