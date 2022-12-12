// grid images
import contrast from "../assets/images_features_grid/homepage-grid-contrast.png";
import focus_order from "../assets/images_features_grid/homepage-grid-focus-order.png";
import landmarks from "../assets/images_features_grid/homepage-grid-landmarks.png";
import vision_simulator from "../assets/images_features_grid/homepage-grid-vision-simulator.webp";
import touch_target from "../assets/images_features_grid/homepage-grid-touchtarget.png";
import works from "../assets/images_features_grid/homepage-grid-designbrowser.webp";
import logo from "../assets/images_features_grid/logo-big.svg";
import education from "../assets/images_features_grid/homepage-grid-education.png";
import alt_text from "../assets/images_features_grid/homepage-grid-alttext.png";
import live_preview from "../assets/images_features_grid/homepage-grid-livepreview.webp";
import typography from "../assets/images_features_grid/homepage-grid-typography.png";
import sso from "../assets/images_features_grid/homepage-grid-sso.png";
import fast from "../assets/images_features_grid/homepage-grid-fast.webp";

// mac grid images
import mac_contrast from "../assets/images_features_grid/mac__contrast.webp";
import mac_code_snippets from "../assets/images_features_grid/mac__code-snippets.webp";
import mac_education from "../assets/images_features_grid/mac__education.webp";
import mac_works from "../assets/images_features_grid/mac__overview-sidebar.webp";
import mac_alt_text from "../assets/images_features_grid/mac__alt-text.webp";

// bg images
import blob1 from "../assets/images_features_grid/homepage-blob-1.png";
import blob2 from "../assets/images_features_grid/homepage-blob-2.png";
import { useLocation } from "react-router-dom";

const Feature2Grid = ({}) => {
    const { pathname } = useLocation();

    return (
        <div className="outer-wrapper-div">
            <div className="inner-wrapper-div">
                <img src={blob1} alt="" className="blob1"/>
                <img src={blob2} alt="" className="blob2"/>
                <div className="features-grid">
                    <div className="item contrast-checker">
                        <img src={pathname == "/mac" 
                            ? mac_contrast 
                            : contrast} 
                        alt=""/>
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
                    <div className={`item touch-targets ${pathname == "/mac" 
                        ? "code-snippets" 
                        : ""}`}>
                        <img src={pathname == "/mac" 
                            ? mac_code_snippets 
                            : touch_target} alt=""/>
                        <p className="uppercase">{pathname == "/mac" 
                            ? 'Export Code Snippets'
                            : 'Touch Targets'}
                        </p>
                    </div>
                    <div className={`item works ${pathname == "/mac" 
                        ? "mac-works"
                        : ""}`}>
                        {pathname == "/mac" 
                            ? 
                            <img src={mac_works} alt=""/>
                            : 
                            <>
                            <img src={works} alt=""/>
                            <div className="stark-logo-wrapper">
                                <img src={logo} alt=""/>
                            </div>
                            </>
                        }
                        <p className="uppercase">{pathname == "/mac"
                            ? "Automated accessibility audit"
                            : "Works in your design tool and browser"
                            }
                        </p>


                    </div>
                    <div className={`item education ${pathname == "/mac"
                        ? "mac-education"
                        : ""}`}>
                        <p className="uppercase">In-App Education</p>
                        <img src={pathname == "/mac" 
                            ? mac_education
                            : education} alt=""/>
                    </div>
                    <div className="item alt-text">
                        <img src={pathname == "/mac" 
                            ? mac_alt_text
                            : alt_text} alt=""/>
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