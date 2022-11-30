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
            <div className="footer-inner-wrapper">
                <div className="heading-logo-wrapper">
                    <HeadingLevel2 headingLine1="Made remotely with love by Stark Lab, Inc."/>
                    <img src={logo} alt=""/>
                </div>
                <nav aria-label="Footer">
                    <ul className="nav-ul">
                        <li><h3 className="uppercase">Product</h3></li>
                        <li><a href="https://apps.apple.com/us/app/stark-your-accessibility-hub/id1624920264">Stark for Mac</a></li>
                        <li><a href="https://www.figma.com/community/plugin/732603254453395948">Stark for Figma</a></li>
                        <li><a href="https://www.getstark.co/sketch/download/">Stark for Sketch</a></li>
                        <li><a href="https://xd.adobelanding.com/en/xd-plugin-download/?name=6cbf275e">Stark for Adobe XD</a></li>
                        <li><a href="https://chrome.google.com/webstore/detail/stark/fkfaapnmfippddbeemjjbclenphooipm">Stark for Chrome</a></li>
                        <li><a href="https://microsoftedge.microsoft.com/addons/detail/stark/idpodoagbkllmpdjdepbmlefgiblmnhl">Stark for Edge</a></li>
                        <li><a href="https://apps.apple.com/us/app/stark-for-safari/id6444031666">Stark for Safari</a></li>
                        <li><a href="https://chrome.google.com/webstore/detail/stark/fkfaapnmfippddbeemjjbclenphooipm">Stark for Arc</a></li>
                        <li><a href="https://chrome.google.com/webstore/detail/stark/fkfaapnmfippddbeemjjbclenphooipm">Stark for Brave</a></li>
                    </ul>
                    <ul className="nav-ul">
                        <li><h3 className="uppercase">Resources</h3></li>
                        <li><a href="https://www.getstark.co/blog/">Blog</a></li>
                        <li><a href="https://www.getstark.co/library/">Library</a></li>
                        <li><a href="https://www.getstark.co/release-notes/">Release Notes</a></li>
                    </ul>
                    <ul className="nav-ul">
                        <li><h3 className="uppercase">Help</h3></li>
                        <li><a href="https://account.getstark.co/">My Account</a></li>
                        <li><a href="https://www.getstark.co/support/">Support Docs</a></li>
                        <li><a href="https://www.getstark.co/support/contact-us/">Contact Us</a></li>
                        <li><a href="https://feedback.getstark.co/">Feature Requests</a></li>
                    </ul>
                    <ul className="nav-ul">
                        <li><h3 className="uppercase">Company</h3></li>
                        <li><a href="https://www.getstark.co/press-releases/">Press Releases</a></li>
                        <li><a href="https://www.getstark.co/privacy/">Privacy Policy</a></li>
                        <li><a href="https://www.getstark.co/cookies/">Cookie Policy</a></li>
                        <li><a href="https://www.getstark.co/security/">Security Overview</a></li>
                        <li><a href="https://status.getstark.co/">Status</a></li>
                        <li><a href="https://www.getstark.co/tos/">Terms of Service</a></li>
                        <li><a href="https://github.com/stark-contrast/code-of-conduct">Code of Conduct</a></li>
                    </ul>
                </nav>
                <div className="socials-copyright-wrapper">
                    <nav aria-label="Socials">
                        <ul className="socials">
                            <li><a href="https://twitter.com/getstarkco"><img src={twitter} alt=""/></a></li>
                            <li><a href="https://www.instagram.com/getstarkco/"><img src={instagram} alt=""/></a></li>
                            <li><a href="https://www.getstark.co/slack/"><img src={slack} alt=""/></a></li>
                            <li><a href="https://www.youtube.com/channel/UCnhYIgXU1GsrLnLv-NFqVNw/featured"><img src={youtube} alt=""/></a></li>
                            <li><a href="https://dribbble.com/getstarkco"><img src={dribbble} alt=""/></a></li>
                            <li><a href="https://www.meetup.com/getstarkco/"><img src={meetup} alt=""/></a></li>
                        </ul>
                    </nav>
                    <p className="uppercase">Stark Lab, Inc. Copyright 2022</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;