import Header from "../components/Header/Header";
import Video from "../components/Video/Video";
import Customers from "../components/Customers/Customers";
import CallToAction from "../components/CallToAction/CallToAction";
import GetStarted from "../components/GetStarted/GetStarted";
import Features2 from "../components/Feature2/Features2";
import FeaturesNotMacNotMain from "../components/Feature/FeaturesNotMacNotMain";

// hero image
import safari from "../assets/images_header/safari.webp";
import React from "react";

const Safari = () => {
    return (
        <>
            <Header
                heroImage={safari}
                pIntro="Work with Stark in your favorite browser"
                h1Text="Stark for Safari"
                pText="Make every project accessible from the start. Stark for Safari keeps you focused on the parts of a project that need an accessibility audit. With powerful tools, automated checks, and smart suggestions you can supercharge your accessibility workflow at scale and in record time."
                link1Text="Create a free account"
                link2Text="Learn more"
                link1Href="https://account.getstark.co/sign-in"
                link2Href="#learn-more" 
                purpleBg={false}            
            />
            <main>
                <Video/>
                <Customers/>
                <FeaturesNotMacNotMain/>
                <CallToAction/>
                <GetStarted
                  linkText="Download Stark for Safari"
                  href="https://apps.apple.com/us/app/stark-for-safari/id6444031666"
                />
                <Features2/>
            </main>
        </>
    )
}

export default Safari;