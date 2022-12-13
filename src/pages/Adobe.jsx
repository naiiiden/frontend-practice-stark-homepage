import Header from "../components/Header/Header";
import Video from "../components/Video/Video";
import Customers from "../components/Customers/Customers";
import CallToAction from "../components/CallToAction/CallToAction";
import GetStarted from "../components/GetStarted/GetStarted";
import Features2 from "../components/Feature2/Features2";
import FeaturesNotMacNotMain from "../components/Feature/FeaturesNotMacNotMain";

// hero image
import xd from "../assets/images_header/xd.webp";

const Adobe = () => {
    return (
        <>
            <Header
                heroImage={xd} 
                pIntro="Work with Stark in your favorite design tool"
                h1Text="Stark for Adobe XD"
                pText="Make every project accessible from the start. Stark for Adobe XD keeps you focused on the parts of a project that need an accessibility audit. Whether you’re a team of 1 or 1,000, you have everything you need to make anything accessible from design to code."
            />
            <main>
                <Video/>
                <Customers/>
                <FeaturesNotMacNotMain/>
                <CallToAction/>
                <GetStarted
                  linkText="Download Stark for XD"
                  href="https://xd.adobelanding.com/en/xd-plugin-download/?name=6cbf275e"
                />
                <Features2/>
            </main>
        </>
    )
}

export default Adobe;