import { useLocation } from "react-router-dom";
import PurpleLink from "./PurpleLink"

const Step = ({ step, h3, desc, linkText, href, macLink }) => {
    const { pathname } = useLocation();

    return (
        <div className="step-container">
            <div>
                <p className="step uppercase">{step}</p>
                <h3>{h3}</h3>
                <p className="desc">{desc}</p>
            </div>
            <PurpleLink text={linkText} href={href} macLink={macLink}/>
        </div>
    )
}

export default Step;