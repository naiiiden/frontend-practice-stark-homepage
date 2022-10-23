import { useState } from "react";
import stark_logo from "../assets/svg/logo.svg";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <header>
            <nav className="nav-logo-container">
                <a href="/" aria-current="page" aria-label="Go to homepage">
                    <img src={stark_logo} alt="" className="logo"/>
                </a>
                <a href="" className="nav-link nav-link--sign-up">30-DAY FREE TEAM TRIAL</a>
            </nav>
            <button onClick={() => setOpenMenu(!openMenu)} aria-label={!openMenu ? "Open menu" : "Close menu"} aria-expanded={!openMenu ? "false" : "true"} aria-haspopup="true">
                <div className={`hamburger ${openMenu ? "open" : ""}`}></div>
            </button>
        </header>
    )
}

export default Header;