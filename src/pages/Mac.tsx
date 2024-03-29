import Header from "../components/Header/Header";
import Video from "../components/Video/Video";
import Customers from "../components/Customers/Customers";
import FeaturesMac from "../components/Feature/FeaturesMac";
import CallToAction from "../components/CallToAction/CallToAction";
import GetStarted from "../components/GetStarted/GetStarted";
import Features2 from "../components/Feature2/Features2";

// hero image
import mac from "../assets/images_header/mac.webp";
import React from "react";

const Mac = () => {
    return (
        <>
            <Header
                mb={true}
                heroImage={mac}
                minWidth="1085"
                maxWidth="1085"
                top="-32"
                left="-56"
                arrowTop="-36"
                arrowLeft="328"
                pIntro="Find and fix accessibility issues in seconds"
                h1Text="Intro&shy;ducing Stark for Mac"
                pText="Whether you’re working on a website, mobile app, SaaS application or anything in between, Stark for Mac helps you find and fix accessibility issues in your existing Figma and Sketch files. With powerful tools, automated checks, and smart suggestions you can supercharge your accessibility workflow at scale and in record time."
                link2Text="Learn more"
                link2Href="#learn-more" 
                purpleBg={false}            
            />
            <main>
                <Video/>
                <Customers/>
                <FeaturesMac/>
                <CallToAction/>
                <GetStarted
                    href="https://apps.apple.com/us/app/stark-your-accessibility-hub/id1624920264" 
                    macLink={true}
                />
                <Features2/>
            </main>
        </>
    )
}

export default Mac;