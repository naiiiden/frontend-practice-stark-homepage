import { useEffect, useState } from "react";
import stark_logo from "../../assets/images_nav/logo.svg";
import stark_logo_purple from "../../assets/images_nav/logo-purple.svg";
import white_arrow from "../../assets/images_nav/white-arrow.svg";
import purple_arrow from "../../assets/images_nav/purple-arrow.svg";
import new_svg from "../../assets/images_nav/new.svg";
import { Link } from "react-router-dom";

const Nav = ({ purpleBg }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

    const updateMedia = () => setIsDesktop(window.innerWidth >= 1024);
    
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    openMenu ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";
    openDropdown ? document.querySelector(".nav-product-submenu").focus() : "";

    return (
        <div className="nav-menu-container">
        <nav className="nav-logo-container" aria-label="Header">
            <Link to="/" aria-current="page" className="logo-link" onFocus={() => setOpenDropdown(false)}>
                <img src={purpleBg ? stark_logo : stark_logo_purple} alt="Go to homepage" className="logo"/>
            </Link>
            <ul role="menubar" className={`nav-ul ${!openMenu ?  "" : "show"}`}>
                <li role="none">
                    {isDesktop ? 
                    <button className="dropdown-button uppercase" role="menuitem" aria-haspopup="true" href="#product" aria-expanded={openDropdown ? "true" : "false"} onMouseEnter={() => setOpenDropdown(true)} onFocus={() => setOpenDropdown(true)}>
                        Product 
                        {purpleBg ? 
                            <img src={white_arrow} alt=""/>
                            :
                            <img src={purple_arrow} alt=""/>
                        }
                    </button>
                    :
                    <span className="uppercase">Product</span>
                    }
                    <ul role="menu" autoFocus className={`nav-product-submenu ${openDropdown ? "show" : ""}`} aria-label="product" onMouseLeave={() => setOpenDropdown(false)}>
                        {isDesktop ?
                        <li role="none"><Link to="/mac" role="menuitem">Stark for Mac <img src={new_svg} alt=""/></Link></li>
                        :
                        <li role="none"><Link to="/mac" role="menuitem">Stark for Mac</Link></li>
                        }
                        <li role="none"><Link to="/figma" role="menuitem">Stark For Figma</Link></li>
                        <li role="none"><Link to="/sketch" role="menuitem">Stark for Sketch</Link></li>
                        <li role="none"><Link to="/adobe-xd" role="menuitem">Stark for Adobe XD</Link></li>
                        <li role="none"><Link to="/chrome" role="menuitem">Stark for Chrome</Link></li>
                        <li role="none"><Link to="/edge" role="menuitem">Stark for Edge</Link></li>
                        {isDesktop ?
                        <li role="none"><Link to="/safari" role="menuitem">Stark for Safari <img src={new_svg} alt=""/></Link></li>
                        :
                        <li role="none"><Link to="/safari" role="menuitem">Stark for Safari</Link></li>
                        }
                        {isDesktop ? 
                        <li role="none"><Link to="/arc" role="menuitem">Stark for Arc <img src={new_svg} alt=""/></Link></li>
                        :
                        <li role="none"><Link to="/arc" role="menuitem">Stark for Arc</Link></li>
                        }
                        <li role="none"><Link to="/brave" role="menuitem">Stark for Brave</Link></li>
                    </ul>
                </li>
                <li role="none"><Link to="/2" role="menuitem" onFocus={() => setOpenDropdown(false)} className="uppercase">Pricing</Link></li>
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