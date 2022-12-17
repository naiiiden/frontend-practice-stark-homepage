import Header from "../components/Header/Header";
import Video from "../components/Video/Video";
import Customers from "../components/Customers/Customers";
import CallToAction from "../components/CallToAction/CallToAction";
import GetStarted from "../components/GetStarted/GetStarted";
import Features2 from "../components/Feature2/Features2";
import FeaturesNotMacNotMain from "../components/Feature/FeaturesNotMacNotMain";

// hero image
import sketch from "../assets/images_header/sketch.webp";

const Sketch = () => {
    return (
        <>
            <Header 
                heroImage={sketch}
                pIntro="Work with Stark in your favorite design tool"
                h1Text="Stark for Sketch"
                pText="Make every project accessible from the start. Stark for Sketch keeps you focused on the parts of a project that need an accessibility audit. Whether you’re a team of 1 or 1,000, you have everything you need to make anything accessible from design to code."
                link1Text="Create a free account"
                link2Text="Learn more"
                link1Href="https://account.getstark.co/sign-in"
                link2Href="#learn-more"
            />
            <main>
                <Video/>
                <Customers/>
                <FeaturesNotMacNotMain/>
                <CallToAction/>
                <GetStarted
                  linkText="Download Stark for Sketch"
                  href="https://www.getstark.co/sketch/download/"
                />
                <Features2/>
            </main>
        </>
    )
}

export default Sketch;