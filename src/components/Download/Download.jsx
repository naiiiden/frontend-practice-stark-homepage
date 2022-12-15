import mac from "../../assets/images_download/homepage-mac.png";
import figma from "../../assets/images_download/homepage-figma.png";
import sketch from "../../assets/images_download/homepage-sketch.png";
import xd from "../../assets/images_download/homepage-xd.png";
import chrome from "../../assets/images_download/homepage-chrome.png";
import edge from "../../assets/images_download/homepage-edge.png";
import safari from "../../assets/images_download/homepage-safari.png";
import arc from "../../assets/images_download/homepage-arc.png";
import brave from "../../assets/images_download/homepage-brave.png";
import PlatformDownload from "../PlatformDownload/PlatformDownload";

const Download = () => {
    return (
        <div className="center-horizontally">
            <section className="download-section" id="download">
                <h2>Meet the Suite</h2>
                <div className="download-container">
                    <div className="flex-container-1">
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
                            href="https://www.getstark.co/sketch/download"
                            src={sketch}
                            alt=""
                            platform="Sketch"
                        />
                        <PlatformDownload
                            href="https://xd.adobelanding.com/en/xd-plugin-download/?name=6cbf275e"
                            src={xd}
                            alt=""
                            platform="Adobe XD"
                        />
                    </div>
                    <div className="flex-container-2">
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
            </section>
        </div>
    )
}

export default Download;