import React from "react";

import green_bg from "../../assets/images_heading2/green-bg.svg";
import HeadingLevel2 from "../HeadingLevel2/HeadingLevel2";
import Step from "./Step";

const GetStarted = ({ linkText, href, macLink }) => {
    return (
        <section className="get-started-section">
            <HeadingLevel2
                headingLine1="So, you’re ready to get started and supercharge accessiblity?"
                img1={green_bg} 
                className={undefined} 
                headingLine2={undefined} 
                img2={undefined}            
            />
            <div className="steps-container">
                <Step
                    step="Step 1"
                    h3="Start with a free account"
                    desc="Wherever you are in your accessibility journey, we believe you should have access to the best tools."
                    linkText="Create free account"
                    href="https://account.getstark.co/sign-in" 
                    macLink={undefined}                
                />
                <Step
                    step="Step 2"
                    h3="Download and install Stark"                
                    desc="Download and install our plugins for Figma, Sketch, Adobe XD, as well as our browser extensions."
                    macLink={macLink}
                    linkText={linkText}
                    href={href}
                />
                <Step
                    step="Step 3"
                    h3="Go Pro when you’re ready"
                    desc="From Alt-Text and Typography to Touch Targets and Suggestions, there’s much more you can do with a Pro account."
                    linkText="Compare plans"
                    href="https://www.getstark.co/pricing/" 
                    macLink={undefined}
                />
            </div>
        </section>
    )
}

export default GetStarted;