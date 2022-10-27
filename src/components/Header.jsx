import { useEffect, useState } from "react";
import stark_logo from "../assets/svg/logo.svg";
import white_arrow from "../assets/svg/white-arrow.svg";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    
    const updateMedia = () => setIsDesktop(window.innerWidth <= 1023);
    
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    openMenu ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";

    return (
        <header>
            <div className="nav-menu-container">
                <nav className="nav-logo-container" aria-label="Header">
                    <a href="/" aria-current="page" className="logo-link">
                        <img src={stark_logo} alt="Go to homepage" className="logo"/>
                    </a>
                    <ul role="menubar" className={`nav-ul ${!openMenu ? "" : "show"}`}>
                        <li role="none">
                            {isDesktop ? 
                            <span>PRODUCT</span>
                            :
                            <a role="menuitem" aria-haspopup="true" href="">PRODUCT <img src={white_arrow} alt=""/></a>
                            }
                            <ul role="menu" className="nav-product-submenu">
                                <li role="none"><a role="menuitem" href="">Stark for Mac</a></li>
                                <li role="none"><a role="menuitem" href="">Stark For Figma</a></li>
                                <li role="none"><a role="menuitem" href="">Stark for Sketch</a></li>
                                <li role="none"><a role="menuitem" href="">Stark for Adobe XD</a></li>
                                <li role="none"><a role="menuitem" href="">Stark for Chrome</a></li>
                                <li role="none"><a role="menuitem" href="">Stark for Brave</a></li>
                                <li role="none"><a role="menuitem" href="">Stark for Edge</a></li>
                            </ul>
                        </li>
                        <li role="none"><a role="menuitem" href="">PRICING</a></li>
                        <li role="none"><a role="menuitem" href="">BLOG</a></li>
                        <li role="none"><a role="menuitem" href="">LIBRARY</a></li>
                        <li role="none"><a role="menuitem" href="">SUPPORT</a></li>
                        <li role="none"><a role="menuitem" href="">LOG IN</a></li>
                    </ul>
                    <a href="" className="nav-link nav-link--sign-up">30-DAY FREE TEAM TRIAL</a>
                </nav>
                <button onClick={() => setOpenMenu(!openMenu)} aria-label={!openMenu ? "Open menu" : "Close menu"} aria-expanded={!openMenu ? "false" : "true"} aria-haspopup="true">
                    <div className={`hamburger ${openMenu ? "open" : ""}`}></div>
                </button>
            </div>
        </header>
    )
}

export default Header;