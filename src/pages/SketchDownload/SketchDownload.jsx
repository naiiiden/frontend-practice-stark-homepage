// components
import Header from "../../components/Header/Header";
import HeadingLevel2 from "../../components/HeadingLevel2/HeadingLevel2";
import PlatformDownload from "../../components/PlatformDownload/PlatformDownload";

// images
import mac from "../../assets/images_download/homepage-mac.png";
import figma from "../../assets/images_download/homepage-figma.png";
import xd from "../../assets/images_download/homepage-xd.png";
import chrome from "../../assets/images_download/homepage-chrome.png";
import edge from "../../assets/images_download/homepage-edge.png";
import safari from "../../assets/images_download/homepage-safari.png";
import arc from "../../assets/images_download/homepage-arc.png";
import brave from "../../assets/images_download/homepage-brave.png";
import yellow_bg from "../../assets/images_heading2/yellow-bg.svg";

import { useEffect } from "react";

const SketchDownload = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="sketch-download-header-wrapper">
                <Header
                    purpleBg={true}
                    pIntro="Almost ready to supercharge accessibility!"
                    h1Text={`Installing 
                    Stark for Sketch...`}
                    pText="If your download doesn’t start automatically, click the button. While you wait, check out Stark on other platforms for free."
                    link1Text="Download Stark for Sketch"
                    link2Text="Create free account"
                />
            </div>
            <div className="sketch-download-platform-container">
                <HeadingLevel2
                    headingLine1="Get Stark for free"
                    img1={yellow_bg}
                />
                <div className="platform-download-container">
                        <PlatformDownload 
                            href="https://apps.apple.com/us/app/stark-your-accessibility-hub/id1624920264"
                            src={mac}
                            alt=""
                            platform="Mac"
                        />
                        <PlatformDownload
                            href="https://www.figma.com/community/plugin/732603254453395948"
                            src={figma}
                            alt=""
                            platform="Figma"
                        />
                        <PlatformDownload
                            href="https://xd.adobelanding.com/en/xd-plugin-download/?name=6cbf275e"
                            src={xd}
                            alt=""
                            platform="Adobe XD"
                        />
                        <PlatformDownload
                            href="https://chrome.google.com/webstore/detail/stark/fkfaapnmfippddbeemjjbclenphooipm"
                            src={chrome}
                            alt=""
                            platform="Chrome"
                        />
                        <PlatformDownload
                            href="https://microsoftedge.microsoft.com/addons/detail/stark/idpodoagbkllmpdjdepbmlefgiblmnhl"
                            src={edge}
                            alt=""
                            platform="Edge"
                        />
                        <PlatformDownload
                            href="https://apps.apple.com/us/app/stark-for-safari/id6444031666"
                            src={safari}
                            alt=""
                            platform="Safari"
                        />
                        <PlatformDownload
                            href="https://chrome.google.com/webstore/detail/stark/fkfaapnmfippddbeemjjbclenphooipm"
                            src={arc}
                            alt=""
                            platform="Arc"
                        />
                        <PlatformDownload
                            href="https://chrome.google.com/webstore/detail/stark/fkfaapnmfippddbeemjjbclenphooipm"
                            src={brave}
                            alt=""
                            platform="Brave"
                        />
                </div>
            </div>
        </>
    )
}

export default SketchDownload;