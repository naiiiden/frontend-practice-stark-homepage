import Header from "../components/Header";
import Video from "../components/Video";
import Customers from "../components/Customers/Customers";
import Download from "../components/Download/Download";
import FeaturesMainPage from "../components/Feature/FeaturesMainPage";
import CallToAction from "../components/CallToAction/CallToAction";
import Testimonials from "../components/Testimonials";
import GetStarted from "../components/GetStarted";
import Features2 from "../components/Feature2/Features2";

// hero image
import homepage_header from "../assets/images_header/homepage__header.webp";

const Main = () => {
    return (
        <>
            <Header 
                mb="0"
                extraImages={true}
                heroImage={homepage_header}
                minWidth="691"
                maxWidth="691"
                arrowTop="-16"
                arrowLeft="442"
                pIntro="Introducing the all-new stark suite"
                h1Text="Supercharge Accessibility"
                pText="Tired of manually checking spreadsheets, messy handovers, and expensive retrofitting? Stark connects the tools you and your team already use in a streamlined end-to-end accessibility workflow you actually love." 
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