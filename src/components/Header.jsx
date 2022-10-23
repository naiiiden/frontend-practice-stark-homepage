import stark_logo from "../assets/svg/logo.svg";

const Header = () => {
    return (
        <header>
            <nav className="nav-logo-container">
                <a href="/" aria-current="page" aria-label="Go to homepage">
                    <img src={stark_logo} alt="" className="logo"/>
                </a>
            </nav>
            <button>
                <div className="hamburger"></div>
            </button>
        </header>
    )
}

export default Header;