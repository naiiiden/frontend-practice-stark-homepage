import Header from "../../components/Header/Header";
import HeadingLevel2 from "../../components/HeadingLevel2/HeadingLevel2";

import yellow_bg from "../../assets/images_heading2/yellow-bg.svg";

const SketchDownload = () => {
    return (
        <>
            <div className="sketch-download-header-wrapper">
                <Header
                    purpleBg={true}
                    pIntro="Almost ready to supercharge accessibility!"
                    h1Text={`Installing 
                    Stark for Sketch...`}
                    pText="If your download doesn’t start automatically, click the button. While you wait, check out Stark on other platforms for free."
                />
            </div>
            <div className="sketch-download-platform-container">
                <HeadingLevel2
                    headingLine1="Get Stark for free"
                    img1={yellow_bg}
                />

            </div>
        </>
    )
}

export default SketchDownload;