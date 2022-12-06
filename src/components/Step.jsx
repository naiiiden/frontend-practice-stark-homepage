import { useLocation } from "react-router-dom";
import PurpleLink from "./PurpleLink"
import download_mac from "../assets/images_repeating/download-mac.svg";

const Step = ({ step, h3, desc, linkText, href, macTrue }) => {
    const { pathname } = useLocation();

    return (
        <div className="step-container">
            <div>
                <p className="step uppercase">{step}</p>
                <h3>{h3}</h3>
                <p className="desc">{desc}</p>
            </div>
            {pathname == "/mac" && macTrue ? 
            <a href=""><img src={download_mac} alt="Download on the Mac App Store"/></a>
            :
            <PurpleLink text={linkText} href={href}/>
            }
        </div>
    )
}

export default Step;