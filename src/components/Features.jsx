import Feature from "./Feature";
import dec from "../assets/svg/purple-arrow.svg";
import homepage_feature1 from "../assets/images_homepage/homepage__feature-1.webp";
import homepage_feature2A from "../assets/images_homepage/homepage__feature-2a.png";
import homepage_feature2B from "../assets/images_homepage/homepage__feature-2b.png";
import homepage_feature3A from "../assets/images_homepage/homepage__feature-3a.png";
import homepage_feature3B from "../assets/images_homepage/homepage__feature-3b.png";
import homepage_feature4A from "../assets/images_homepage/homepage__feature-4a.png";
import homepage_feature4B from "../assets/images_homepage/homepage__feature-4b.png";

const Features = () => {
    return (
        <div>
            <Feature 
                mt="104"
                pShort="MEET YOUR NEW SUPERPOWER" 
                dec={dec} 
                h2="Create and test accessible designs in record time"
                desc="Whether you’re building a website, online shop, mobile app, or SaaS product, Stark gives every designer, engineer, PM, and QA expert the manual and automated tools to make it accessible with ease."
                href="https://account.getstark.co/sign-in"
                aText="Get started"
                src1={homepage_feature1}
            />
            <Feature 
                mt="120"
                pShort="YOUR TEAM'S ACCESSIBILITY TOOLBOX"
                h2="Everything you need, right where you need it"
                desc="From Contrast Checker with Color Suggestions over Alt-Text Annotations to Focus Order and more, Stark offers the fully integrated and automated tools to help you and your team design, build and test software that meets the latest accessibility standards right in your design app and browser of choice."
                href="https://account.getstark.co/sign-in"
                aText="Get started"
                src1={homepage_feature2A}
                src2={homepage_feature2B}
            />
            <Feature 
                mt="120"
                pShort="TRAIN ON THE JOB"
                h2="Learn as you go"
                desc="Stark is your accessibility sidekick. Learn best practices on the fly and get tips on how to fix any issues we find. We’ll take you from novice to expert while doing the heavy lifting in the background."
                href="https://account.getstark.co/sign-in"
                aText="Get started"
                src1={homepage_feature3A}
                src2={homepage_feature3B}
            />
            <Feature 
                mt="200"
                pShort="LIVE PREVIEW"
                h2="Accessibility easy as one, two, three"
                desc="Stark simplifies and accelerates collaboration on accessibility issues between designers and developers. With Stark for your browser you can not only test and check for accessibility issues but apply color suggestions or typography improvements with Live Preview with a click."
                href="https://account.getstark.co/sign-in"
                aText="Get started"
                src1={homepage_feature4A}
                src2={homepage_feature4B}
            />
        </div>
    )
}

export default Features;