// components 
import HeadingLevel2 from "./HeadingLevel2";

// images
import logo from "../assets/svg/logo-footer.svg";
import twitter from "../assets/images_footer/footer__twitter.png";
import instagram from "../assets/images_footer/footer__instagram.png";
import slack from "../assets/images_footer/footer__slack.png";
import youtube from "../assets/images_footer/footer__youtube.png";
import dribbble from "../assets/images_footer/footer__dribbble.png";
import meetup from "../assets/images_footer/footer__meetup.png";

const Footer = () => {
    return (
        <footer>
            <div className="heading-logo-wrapper">
                <HeadingLevel2 headingLine1="Made remotely with love by Stark Lab, Inc."/>
                <img src={logo} alt=""/>
            </div>
            <nav>
                <ul className="nav-ul">
                    <li><h3>PRODUCT</h3></li>
                    <li><a href="">Stark for Mac</a></li>
                    <li><a href="">Stark for Figma</a></li>
                    <li><a href="">Stark for Sketch</a></li>
                    <li><a href="">Stark for Adobe XD</a></li>
                    <li><a href="">Stark for Chrome</a></li>
                    <li><a href="">Stark for Edge</a></li>
                    <li><a href="">Stark for Safari</a></li>
                    <li><a href="">Stark for Arc</a></li>
                    <li><a href="">Stark for Brave</a></li>
                </ul>
                <ul className="nav-ul">
                    <li><h3>RESOURCES</h3></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Library</a></li>
                    <li><a href="">Release Notes</a></li>
                </ul>
                <ul className="nav-ul">
                    <li><h3>HELP</h3></li>
                    <li><a href="">My Account</a></li>
                    <li><a href="">Support Docs</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Feature Requests</a></li>
                </ul>
                <ul className="nav-ul">
                    <li><h3>COMPANY</h3></li>
                    <li><a href="">Press Releases</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Cookie Policy</a></li>
                    <li><a href="">Security Overview</a></li>
                    <li><a href="">Status</a></li>
                    <li><a href="">Terms of Service</a></li>
                    <li><a href="">Code of Conduct</a></li>
                </ul>
            </nav>
            <div className="socials-copyright-wrapper">
                <nav>
                    <ul className="socials">
                        <li><img src={twitter} alt="" /></li>
                        <li><img src={instagram} alt="" /></li>
                        <li><img src={slack} alt="" /></li>
                        <li><img src={youtube} alt="" /></li>
                        <li><img src={dribbble} alt="" /></li>
                        <li><img src={meetup} alt="" /></li>
                    </ul>
                </nav>
                <p>STARK LAB, INC. COPYRIGHT 2022</p>
            </div>
        </footer>
    )
}

export default Footer;