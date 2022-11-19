import mac from "../assets/images_homepage/homepage-mac.png";
import figma from "../assets/images_homepage/homepage-figma.png";
import sketch from "../assets/images_homepage/homepage-sketch.png";
import xd from "../assets/images_homepage/homepage-xd.png";
import chrome from "../assets/images_homepage/homepage-chrome.png";
import edge from "../assets/images_homepage/homepage-edge.png";
import safari from "../assets/images_homepage/homepage-safari.png";
import arc from "../assets/images_homepage/homepage-arc.png";
import brave from "../assets/images_homepage/homepage-brave.png";

const Download = () => {
    return (
        <div className="center-horizontally">
            <section className="download-section" id="download">
                <h2>Meet the Suite</h2>
                <div className="download-container">
                    <div className="flex-container-1">
                        <a href="https://apps.apple.com/us/app/stark-your-accessibility-hub/id1624920264" target="_blank">
                            <img src={mac} alt=""/>
                            <p>Stark for Mac</p>
                        </a>
                        <a href="https://www.figma.com/community/plugin/732603254453395948" target="_blank">
                            <img src={figma} alt=""/>
                            <p>Stark for Figma</p>
                        </a>
                        <a href="https://www.getstark.co/sketch/download" target="_blank">
                            <img src={sketch} alt=""/>
                            <p>Stark for Sketch</p>
                        </a>
                        <a href="https://xd.adobelanding.com/en/xd-plugin-download/?name=6cbf275e" target="_blank">
                            <img src={xd} alt=""/>
                            <p>Stark for Adobe XD</p>
                        </a>
                    </div>
                    <div className="flex-container-2">
                        <a href="https://chrome.google.com/webstore/detail/stark/fkfaapnmfippddbeemjjbclenphooipm" target="_blank">
                            <img src={chrome} alt=""/>
                            <p>Stark for Chrome</p>
                        </a>
                        <a href="https://microsoftedge.microsoft.com/addons/detail/stark/idpodoagbkllmpdjdepbmlefgiblmnhl" target="_blank">
                            <img src={edge} alt=""/>
                            <p>Stark for Edge</p>
                        </a>
                        <a href="https://apps.apple.com/us/app/stark-for-safari/id6444031666" target="_blank">
                            <img src={safari} alt=""/>
                            <p>Stark for Safari</p>
                        </a>
                        <a href="https://chrome.google.com/webstore/detail/stark/fkfaapnmfippddbeemjjbclenphooipm" target="_blank">
                            <img src={arc} alt=""/>
                            <p>Stark for Arc</p>
                        </a>
                        <a href="https://chrome.google.com/webstore/detail/stark/fkfaapnmfippddbeemjjbclenphooipm" target="_blank">
                            <img src={brave} alt=""/>
                            <p>Stark for Brave</p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Download;