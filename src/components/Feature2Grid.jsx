// grid images
import contrast from "../assets/images_homepage/homepage-grid-contrast.png";
import focus_order from "../assets/images_homepage/homepage-grid-focus-order.png";
import landmarks from "../assets/images_homepage/homepage-grid-landmarks.png";
import vision_simulator from "../assets/images_homepage/homepage-grid-vision-simulator.webp";
import touch_target from "../assets/images_homepage/homepage-grid-touchtarget.png";
import works from "../assets/images_homepage/homepage-grid-designbrowser.webp";
import logo from "../assets/svg/logo-big.svg";
import education from "../assets/images_homepage/homepage-grid-education.png";
import alt_text from "../assets/images_homepage/homepage-grid-alttext.png";
import live_preview from "../assets/images_homepage/homepage-grid-livepreview.webp";
import typography from "../assets/images_homepage/homepage-grid-typography.png";
import sso from "../assets/images_homepage/homepage-grid-sso.png";
import fast from "../assets/images_homepage/homepage-grid-fast.webp";

// bg images
import blob1 from "../assets/images_homepage/homepage-blob-1.png";
import blob2 from "../assets/images_homepage/homepage-blob-2.png";

const Feature2Grid = ({}) => {
    return (
        <div className="outer-wrapper-div">
            <div className="inner-wrapper-div">
                <img src={blob1} alt="" className="blob1"/>
                <img src={blob2} alt="" className="blob2"/>
                <div className="features-grid">
                    <div className="item contrast-checker">
                        <img src={contrast} alt=""/>
                        <p className="uppercase">Contrast Checker + Color Suggestions</p>
                    </div>
                    <div className="item focus-order">
                        <img src={focus_order} alt=""/>
                        <p className="uppercase">Focus Order</p>
                    </div>
                    <div className="item landmarks">
                        <p className="uppercase">Landmarks</p>
                        <img src={landmarks} alt=""/>
                    </div>
                    <div className="item vision-simulator">
                        <p className="uppercase">Vision Simulator + Generator</p>
                        <img src={vision_simulator} alt=""/>
                    </div>
                    <div className="item touch-targets">
                        <img src={touch_target} alt=""/>
                        <p className="uppercase">Touch Targets</p>
                    </div>
                    <div className="item works">
                        <img src={works} alt=""/>
                        <div className="stark-logo-wrapper">
                            <img src={logo} alt=""/>
                        </div>
                        <p className="uppercase">Works in your design tool and browser</p>
                    </div>
                    <div className="item education">
                        <p className="uppercase">In-App Education</p>
                        <img src={education} alt=""/>
                    </div>
                    <div className="item alt-text">
                        <img src={alt_text} alt=""/>
                        <p className="uppercase">Alt-Text Annotations</p>
                    </div>
                    <div className="item live-preview">
                        <p className="uppercase">Live preview in browser</p>
                        <img src={live_preview} alt=""/>
                    </div>
                    <div className="item typography">
                        <img src={typography} alt=""/>
                        <p className="uppercase">Typography</p>
                    </div>
                    <div className="item sso">
                        <img src={sso} alt=""/>
                        <p className="uppercase">SSO + Team Account Management</p>
                    </div>
                    <div className="item fast">
                        <p className="uppercase">Beautifully simple, lightning fast</p>
                        <img src={fast} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature2Grid;