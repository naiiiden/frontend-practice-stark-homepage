import { useState } from "react";
import stark_logo from "../assets/svg/logo.svg";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <header>
            <nav className="nav-logo-container" aria-label="Header">
                <a href="/" aria-current="page">
                    <img src={stark_logo} alt="Go to homepage" className="logo"/>
                </a>
                <ul className="nav-ul">
                    <li>
                        <span>PRODUCT</span>
                        <ul className="nav-product-submenu">
                            <li><a href="">Stark for Mac</a></li>
                            <li><a href="">Stark For Figma</a></li>
                            <li><a href="">Stark for Sketch</a></li>
                            <li><a href="">Stark for Adobe XD</a></li>
                            <li><a href="">Stark for Chrome</a></li>
                            <li><a href="">Stark for Brave</a></li>
                            <li><a href="">Stark for Edge</a></li>
                        </ul>
                    </li>
                    <li><a href="">PRICING</a></li>
                    <li><a href="">BLOG</a></li>
                    <li><a href="">LIBRARY</a></li>
                    <li><a href="">SUPPORT</a></li>
                </ul>
                <a href="" className="nav-link nav-link--sign-up">30-DAY FREE TEAM TRIAL</a>
            </nav>
            <button onClick={() => setOpenMenu(!openMenu)} aria-label={!openMenu ? "Open menu" : "Close menu"} aria-expanded={!openMenu ? "false" : "true"} aria-haspopup="true">
                <div className={`hamburger ${openMenu ? "open" : ""}`}></div>
            </button>
        </header>
    )
}

export default Header;