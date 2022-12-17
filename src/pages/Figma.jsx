import Header from "../components/Header/Header";
import Video from "../components/Video/Video";
import Customers from "../components/Customers/Customers";
import CallToAction from "../components/CallToAction/CallToAction";
import GetStarted from "../components/GetStarted/GetStarted";
import Features2 from "../components/Feature2/Features2";

// hero image
import figma from "../assets/images_header/figma.webp";
import FeaturesNotMacNotMain from "../components/Feature/FeaturesNotMacNotMain";

const Figma = () => {
    return (
        <>
            <Header
                heroImage={figma}
                pIntro="Work with Stark in your favorite design tool"
                h1Text="Stark for Figma" 
                pText="Make every project accessible from the start. Stark for Figma keeps you focused on the parts of a project that need an accessibility audit. Whether you’re a team of 1 or 1,000, you have everything you need to make anything accessible from design to code."
                link1Text="Create a free account"
                link2Text="Learn more"
            />
            <main>
                <Video/>
                <Customers/>
                <FeaturesNotMacNotMain/>
                <CallToAction/>
                <GetStarted
                    linkText="Download Stark for Figma"
                    href="https://www.figma.com/community/plugin/732603254453395948"
                />
                <Features2/>
            </main>
        </>    
    )
}

export default Figma;