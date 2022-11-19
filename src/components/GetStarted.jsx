import green_bg from "../assets/svg/green-bg.svg";
import Step from "./Step";

const GetStarted = () => {
    return (
        <section className="get-started-section">
            <div className="h2-svg-container">
                <h2>So, you’re ready to get started and supercharge accessiblity?</h2>
                <img src={green_bg} alt=""/>
            </div>
            <div className="steps-container">
                <Step
                    step="STEP 1"
                    h3="Start with a free account"
                    desc="Wherever you are in your accessibility journey, we believe you should have access to the best tools."
                    linkText="Create free account"
                    href="https://account.getstark.co/sign-in"
                />
                <Step
                    step="STEP 2"
                    h3="Download and install Stark"                
                    desc="Download and install our plugins for Figma, Sketch, Adobe XD, as well as our browser extensions."
                    linkText="Download Stark"
                    href="#download"
                />
                <Step
                    step="STEP 3"
                    h3="Go Pro when you’re ready"
                    desc="From Alt-Text and Typography to Touch Targets and Suggestions, there’s much more you can do with a Pro account."
                    linkText="Compare plans"
                    href="https://www.getstark.co/pricing/"
                />
            </div>
        </section>
    )
}

export default GetStarted;