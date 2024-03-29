import Header from "../components/Header/Header";
import Video from "../components/Video/Video";
import Customers from "../components/Customers/Customers";
import Download from "../components/Download/Download";
import FeaturesMainPage from "../components/Feature/FeaturesMainPage";
import CallToAction from "../components/CallToAction/CallToAction";
import Testimonials from "../components/Testimonials/Testimonials";
import GetStarted from "../components/GetStarted/GetStarted";
import Features2 from "../components/Feature2/Features2";

// hero image
import homepage_header from "../assets/images_header/homepage__header.webp";
import React from "react";

const Main = () => {
    return (
        <>
            <Header
                purpleBg={true} 
                mb={true}
                extraImages={true}
                heroImage={homepage_header}
                minWidth="691"
                maxWidth="691"
                arrowTop="-16"
                arrowLeft="442"
                pIntro="Introducing the all-new stark suite"
                h1Text="Super­charge Access­ibility"
                pText="Tired of manually checking spreadsheets, messy handovers, and expensive retrofitting? Stark connects the tools you and your team already use in a streamlined end-to-end accessibility workflow you actually love." 
                link1Text="Create a free account"
                link2Text="Learn more"
                link1Href="https://account.getstark.co/sign-in"
                link2Href="#learn-more"
            />
            <main>
                <Video/>
                <Customers/>
                <Download/>
                <FeaturesMainPage/>
                <CallToAction/>
                <Testimonials/>
                <GetStarted
                  linkText="Download Stark"
                  href="#download"
                />
                <Features2/>
            </main>
        </>
    )
}

export default Main;