import React from "react";

import PurpleLink from "../PurpleLink/PurpleLink"

const Step = ({ step, h3, desc, linkText, href, macLink }: { step: string, h3: string, desc: string, linkText: string, href: string, macLink: string | undefined }) => {

    return (
        <div className="step-container">
            <div>
                <p className="step uppercase">{step}</p>
                <h3>{h3}</h3>
                <p className="desc">{desc}</p>
            </div>
            <PurpleLink text={linkText} href={href} macLink={macLink} className={""}/>
        </div>
    )
}

export default Step;