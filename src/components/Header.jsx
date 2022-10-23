import stark_logo from "../assets/svg/logo.svg";

const Header = () => {
    return (
        <header>
            <div className="nav-logo-container">
                <img src={stark_logo} alt=""/>
            </div>
        </header>
    )
}

export default Header;