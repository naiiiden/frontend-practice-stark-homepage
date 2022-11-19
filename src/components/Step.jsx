import PurpleLink from "./PurpleLink"

const Step = ({ step, h3, desc, linkText, href }) => {
    return (
        <div className="step-container">
            <p className="step">{step}</p>
            <h3>{h3}</h3>
            <p className="desc">{desc}</p>
            <PurpleLink text={linkText} href={href}/>
        </div>
    )
}

export default Step;