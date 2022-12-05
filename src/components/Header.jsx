import yellow_arrow from "../assets/images_header/yellow-arrow.svg";
import homepage_avatar_circle from "../assets/images_header/homepage__avatar-circle.png";
import homepage_sparkle from "../assets/images_header/homepage-sparkle.png";
import homepage_contrast_bubble from "../assets/images_header/homepage__contrast-bubble.png";
import homepage_focusorder_bubble from "../assets/images_header/homepage__focusorder-bubble.png";
import homepage_alttext_bubble from "../assets/images_header/homepage__alttext-bubble.png";
import { useState, useEffect } from "react";

const Header = ({ extraImages, heroImage, mb, minWidth, maxWidth, top, left, pIntro, h1Text, pText, bgColor, bgURL }) => {
    const [isDesktop, setIsDesktop] = useState(false);
    
    const updateMedia = () => setIsDesktop(window.innerWidth <= 1023);
    
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <div className="header-hero" style={{"backgroundColor": `${bgColor}`, "backgroundImage": `${bgURL}`,}}>
            <div className="centered-horizontally">
                <div className="text-illustration-wrapper">
                    <div className="text-container">
                        <p className="introduction uppercase">{pIntro}</p>
                        <h1>{h1Text}</h1>
                        <p className="description" id="description">{pText}</p>
                        <div className="links-arrow-container">
                            <div className="links-wrapper">
                                <a href="https://account.getstark.co/sign-in" className="free">Create a free account</a>
                                <a href="#learn-more" className="learn" aria-describedby="description">Learn more</a>
                            </div>
                            {!isDesktop && <img src={yellow_arrow} alt="" className="yellow-arrow"/>}
                        </div>
                    </div>
                    {!isDesktop && 
                        <div className="header-image-container" 
                            style={{"marginBottom": `${mb ? "0px" : `41.75rem`}`}}
                        >
                            <img src={heroImage} alt="" className="header-img" style={{
                                "minWidth": `${minWidth ? minWidth : "1000"}px`, 
                                "maxWidth": `${maxWidth ? maxWidth : "1000"}px`, 
                                "top": `${top ? `${top}px` : "unset"}`, 
                                "left": `${left ? `${left}px`: "unset"}`}}
                            />
                            {extraImages && 
                            <>
                                <img src={homepage_avatar_circle} alt="" className="header-avatar-circle"/>
                                <img src={homepage_avatar_circle} alt="" className="header-avatar-circle-2"/>
                                <img src={homepage_sparkle} alt="" className="sparkle"/>
                                <img src={homepage_alttext_bubble} alt="" className="alttext"/>
                                <img src={homepage_contrast_bubble} alt="" className="contrast"/>
                                <img src={homepage_focusorder_bubble} alt="" className="focusorder"/>
                            </>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;