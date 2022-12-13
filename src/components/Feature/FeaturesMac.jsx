import Feature from "./Feature";

import homepage_feature1 from "../../assets/images_features/mac__accelerate.webp";
import homepage_feature2 from "../../assets/images_features/mac__toolbox.webp";
import homepage_feature3 from "../../assets/images_features/mac__novice-to-expert.webp";
import homepage_feature4 from "../../assets/images_features/mac__retrofitting.webp";

const FeaturesMac = () => {
    return (
        <div id="learn-more">
            <Feature
                sectionClass="feature-mac-1"
                mt="104"
                pShort="Accelerate accessibility fixes"
                h2="Find and fix accessibility issues in record time"
                desc="Get automated checks of Sketch and Figma files seconds after importing them. We analyze any issues in your design and help you meet the latest accessibility compliance standards."
                src1={homepage_feature1}
                idImg1="feature-mac-img1"
            />
            <Feature
                sectionClass="feature-mac-2"
                mt="120"
                pShort="Your accessibility toolbox"
                h2="Everything you need, right where you need it"
                desc="Stark for Mac gives every designer, engineer, PM, and QA expert the power to design, build, and test software that meets the latest accessibility standards. With tools for checking contrast ratios, writing good alt text, establishing a focus order, and more, you've got what you need to find issues while a design's in production or fix what's already in flight."
                src1={homepage_feature2}
                idImg1="feature-mac-img2"
            />
            <Feature
                sectionClass="feature-mac-3"
                mt="120"
                pShort="Go from novice to expert"
                h2="Learn as you go"
                desc="Stark is your accessibility sidekick. Learn best practices on the fly and get tips on how to fix any issues we find. We’ll take you from novice to expert while doing the heavy lifting in the background."
                src1={homepage_feature3}
                idImg1="feature-mac-img3"
            />
            <Feature
                sectionClass="feature-mac-4"
                mt="200"
                pShort="Retrofitting with a click"
                h2="Accessibility easy as one, two, three"
                desc="Our Sketch and Figma plugins automatically connect to Stark for Mac. So you can apply changes like Color Suggestions to individual elements or fix all instances of an issue across your design file or system with a single click."
                src1={homepage_feature4}
                idImg1="feature-mac-img4"
            />
        </div>
    )
}

export default FeaturesMac;