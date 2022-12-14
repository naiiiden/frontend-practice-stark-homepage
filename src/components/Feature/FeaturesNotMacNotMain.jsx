import Feature from "./Feature";
import feature_rest_1 from "../../assets/images_features/feature_1v2.webp";
import feature_rest_2 from "../../assets/images_features/feature_2v2.webp";
import feature_rest_3 from "../../assets/images_features/feature_3v2.webp";
import feature_rest_4 from "../../assets/images_features/feature_4v2.webp";
import feature_rest_4_2 from "../../assets/images_features/feature_4v2.2.webp";
import { useLocation } from "react-router-dom";

const FeaturesNotMacNotMain = () => {
    const { pathname } = useLocation();
    
    return (
        <div id="learn-more">
            <Feature
                sectionClass="feature-rest-1"
                mt="104"
                pShort="Meet your new superpower"
                h2="Create and test accessible designs in record time"
                desc="Whether you’re building a website, online shop, mobile app, or SaaS product, Stark gives every designer, engineer, PM, and QA expert the manual and automated tools to make it accessible with ease."
                src1={feature_rest_1}
                idImg1="feature-rest-img1"
                text="Get started for free"
                href="https://account.getstark.co/"
                maxW="460"
            />
            <Feature
                sectionClass="feature-rest-2"
                mt="120"
                pShort="Your accessibility toolbox"
                h2="Everything you need, right where you need it"
                desc="From Contrast Checker with Color Suggestions over Alt-Text Annotations to Focus Order and more, Stark offers the fully integrated and automated tools to help you and your team design, build and test software that meets the latest accessibility standards right in your design app and browser of choice."
                src1={feature_rest_2}
                idImg1="feature-rest-img2"
                text="Get started for free"
                href="https://account.getstark.co/"
                maxW="460"
            />
            <Feature
                sectionClass="feature-rest-3"
                mt="120"
                pShort="Train on the job"
                h2="Learn as you go"
                desc="Stark is your accessibility sidekick. Learn best practices on the fly and get tips on how to fix any issues we find. We’ll take you from novice to expert while doing the heavy lifting in the background."
                src1={feature_rest_3}
                idImg1="feature-rest-img3"
                text="Get started for free"
                href="https://account.getstark.co/"
                maxW="460"
            />
            {pathname == "/adobe-xd" ? 
                "" 
                :
                <Feature
                    sectionClass="feature-mac-4"
                    mt="200"
                    pShort="Retrofitting at scale with a click"
                    h2="Accessibility easy as one, two, three"
                    desc="Once you open the Stark plugin in Sketch or Figma it automagically connects to Stark for Mac. So you can apply for example color suggestions to individual design elements or rectify all instances of an issue across your entire file or design system with just a click. That’s powerful!"
                    src1={(pathname == "/figma" || pathname == "sketch") ? feature_rest_4_2 : feature_rest_4}
                idImg1="feature-rest-img4"
                text="Get started for free"
                href="https://account.getstark.co/"
                maxW="433"
            />
            }
        </div>
    )
}

export default FeaturesNotMacNotMain;