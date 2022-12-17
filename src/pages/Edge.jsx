import Header from "../components/Header/Header";
import Video from "../components/Video/Video";
import Customers from "../components/Customers/Customers";
import CallToAction from "../components/CallToAction/CallToAction";
import GetStarted from "../components/GetStarted/GetStarted";
import Features2 from "../components/Feature2/Features2";
import FeaturesNotMacNotMain from "../components/Feature/FeaturesNotMacNotMain";

// hero image
import edge from "../assets/images_header/chrome.webp";

const Edge = () => {
    return (
        <>
            <Header
                heroImage={edge}
                pIntro="Work with Stark in your favorite browser" 
                h1Text="Stark for Edge"
                pText="Make every project accessible from the start. Stark for Edge keeps you focused on the parts of a project that need an accessibility audit. With powerful tools, automated checks, and smart suggestions you can supercharge your accessibility workflow at scale and in record time."
                link1Text="Create a free account"
                link2Text="Learn more"
            />
            <main>
                <Video/>
                <Customers/>
                <FeaturesNotMacNotMain/>
                <CallToAction/>
                <GetStarted
                  linkText="Download Stark for Edge"
                  href="https://microsoftedge.microsoft.com/addons/detail/stark/idpodoagbkllmpdjdepbmlefgiblmnhl"
                />
                <Features2/>
            </main>
        </>
    )
}

export default Edge;