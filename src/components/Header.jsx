import yellow_arrow from "../assets/images_header/yellow-arrow.svg";
import homepage_header from "../assets/images_header/homepage__header.webp";
import homepage_avatar_circle from "../assets/images_header/homepage__avatar-circle.png";
import homepage_sparkle from "../assets/images_header/homepage-sparkle.png";
import homepage_contrast_bubble from "../assets/images_header/homepage__contrast-bubble.png";
import homepage_focusorder_bubble from "../assets/images_header/homepage__focusorder-bubble.png";
import homepage_alttext_bubble from "../assets/images_header/homepage__alttext-bubble.png";
import { useState, useEffect } from "react";

const Header = ({ h1Text, bgColor, bgURL }) => {
    const [isDesktop, setIsDesktop] = useState(false);
    
    const updateMedia = () => setIsDesktop(window.innerWidth <= 1023);
    
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <div style={{"backgroundColor": `${bgColor}`, "backgroundImage": `${bgURL}`,}}>
            <div className="centered-horizontally">
                <div className="text-illustration-wrapper">
                    <div className="text-container">
                        <p className="introduction uppercase">Introducing the all-new stark suite</p>
                        <h1>{h1Text}</h1>
                        <p className="description" id="description">Tired of manually checking spreadsheets, messy handovers, and expensive retrofitting? Stark connects the tools you and your team already use in a streamlined end-to-end accessibility workflow you actually love.</p>
                        <div className="links-arrow-container">
                            <div className="links-wrapper">
                                <a href="https://account.getstark.co/sign-in" className="free">Create a free account</a>
                                <a href="#learn-more" className="learn" aria-describedby="description">Learn more</a>
                            </div>
                            {!isDesktop && <img src={yellow_arrow} alt="" className="yellow-arrow"/>}
                        </div>
                    </div>
                    {!isDesktop && 
                        <div className="header-image-container">
                            <img src={homepage_header} alt="" className="header-img"/>
                            <img src={homepage_avatar_circle} alt="" className="header-avatar-circle"/>
                            <img src={homepage_avatar_circle} alt="" className="header-avatar-circle-2"/>
                            <img src={homepage_sparkle} alt="" className="sparkle"/>
                            <img src={homepage_alttext_bubble} alt="" className="alttext"/>
                            <img src={homepage_contrast_bubble} alt="" className="contrast"/>
                            <img src={homepage_focusorder_bubble} alt="" className="focusorder"/>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;