import { useEffect, useState } from "react";
import stark_logo from "../assets/images_nav/logo-purple.svg";
import white_arrow from "../assets/images_nav/white-arrow.svg";
import new_svg from "../assets/images_nav/new.svg";

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    
    const updateMedia = () => setIsDesktop(window.innerWidth <= 1023);
    
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    openMenu ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";
    openDropdown ? document.querySelector(".nav-product-submenu").focus() : "";

    return (
        <div className="nav-menu-container">
        <nav className="nav-logo-container" aria-label="Header">
            <a href="/" aria-current="page" className="logo-link" onFocus={() => setOpenDropdown(false)}>
                <img src={stark_logo} alt="Go to homepage" className="logo"/>
            </a>
            <ul role="menubar" className={`nav-ul ${!openMenu ? "" : "show"}`}>
                <li role="none">
                    {isDesktop ? 
                    <span className="uppercase">Product</span>
                    :
                    <button className="dropdown-button uppercase" role="menuitem" aria-haspopup="true" href="#product" aria-expanded={openDropdown ? "true" : "false"} onMouseEnter={() => setOpenDropdown(true)} onFocus={() => setOpenDropdown(true)}>
                        PRODUCT 
                        <img src={white_arrow} alt=""/>
                    </button>
                    }
                    <ul role="menu" autoFocus className={`nav-product-submenu ${openDropdown ? "show" : ""}`} aria-label="product" onMouseLeave={() => setOpenDropdown(false)}>
                        {isDesktop ?
                        <li role="none"><a role="menuitem" href="https://www.getstark.co/mac">Stark for Mac</a></li>
                        :
                        <li role="none"><a role="menuitem" href="https://www.getstark.co/mac">Stark for Mac <img src={new_svg} alt=""/></a></li>
                        }
                        <li role="none"><a role="menuitem" href="https://www.getstark.co/figma">Stark For Figma</a></li>
                        <li role="none"><a role="menuitem" href="https://www.getstark.co/sketch">Stark for Sketch</a></li>
                        <li role="none"><a role="menuitem" href="https://www.getstark.co/adobe-xd">Stark for Adobe XD</a></li>
                        <li role="none"><a role="menuitem" href="https://www.getstark.co/chrome">Stark for Chrome</a></li>
                        <li role="none"><a role="menuitem" href="https://www.getstark.co/edge">Stark for Edge</a></li>
                        {isDesktop ?
                        <li role="none"><a role="menuitem" href="https://www.getstark.co/safari">Stark for Safari</a></li>
                        :
                        <li role="none"><a role="menuitem" href="https://www.getstark.co/safari">Stark for Safari <img src={new_svg} alt=""/></a></li>
                        }
                        {isDesktop ? 
                        <li role="none"><a role="menuitem" href="https://www.getstark.co/safari">Stark for Arc</a></li>
                        :
                        <li role="none"><a role="menuitem" href="https://www.getstark.co/arc">Stark for Arc <img src={new_svg} alt=""/></a></li>
                        }
                        <li role="none"><a role="menuitem" href="https://www.getstark.co/brave">Stark for Brave</a></li>
                    </ul>
                </li>
                <li role="none"><a role="menuitem" href="https://www.getstark.co/pricing/" onFocus={() => setOpenDropdown(false)} className="uppercase">Pricing</a></li>
                <li role="none"><a role="menuitem" href="https://www.getstark.co/blog/" className="uppercase">Blog</a></li>
                <li role="none"><a role="menuitem" href="https://www.getstark.co/library/" className="uppercase">Library</a></li>
                <li role="none"><a role="menuitem" href="https://www.getstark.co/support/" className="uppercase">Support</a></li>
                <li role="none"><a role="menuitem" href="https://account.getstark.co/sign-in" className="uppercase">Log in</a></li>
            </ul>
            <a href="https://www.getstark.co/pricing?team/" className="nav-link nav-link--sign-up uppercase">30-Day Free Team Trial</a>
        </nav>
        <button onClick={() => setOpenMenu(!openMenu)} aria-label={!openMenu ? "Open menu" : "Close menu"} aria-expanded={!openMenu ? "false" : "true"} aria-haspopup="true">
            <div className={`hamburger ${openMenu ? "open" : ""}`}></div>
        </button>
    </div>
    )
}

export default Nav;