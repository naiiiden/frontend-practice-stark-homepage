import stark_logo from "../assets/svg/logo.svg";

const Header = () => {
    return (
        <header>
            <div className="nav-logo-container">
                <a href="/" aria-current="page" aria-label="Go to homepage">
                    <img src={stark_logo} alt="" className="logo"/>
                </a>
            </div>
        </header>
    )
}

export default Header;