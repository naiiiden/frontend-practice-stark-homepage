import Header from "../components/Header";
import Video from "../components/Video";
import Customers from "../components/Customers";
import CallToAction from "../components/CallToAction";
import GetStarted from "../components/GetStarted";
import Features2 from "../components/Features2";

// hero image
import figma from "../assets/images_header/figma.webp";
import FeaturesNotMacNotMain from "../components/FeaturesNotMacNotMain";

const Figma = () => {
    return (
        <>
            <Header
                heroImage={figma}
                pIntro="Work with Stark in your favorite design tool"
                h1Text="Stark for Figma" 
                pText="Make every project accessible from the start. Stark for Figma keeps you focused on the parts of a project that need an accessibility audit. Whether you’re a team of 1 or 1,000, you have everything you need to make anything accessible from design to code."
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