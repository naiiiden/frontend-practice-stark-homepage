import Header from "../components/Header";
import Video from "../components/Video";
import Customers from "../components/Customers";
import CallToAction from "../components/CallToAction";
import GetStarted from "../components/GetStarted";
import Features2 from "../components/Features2";
import FeaturesNotMacNotMain from "../components/FeaturesNotMacNotMain";

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