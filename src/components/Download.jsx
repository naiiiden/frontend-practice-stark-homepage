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
            <section className="download-section">
                <h2>Meet the Suite</h2>
                <div className="download-container">
                    <div className="flex-container-1">
                        <a href="" target="_blank" className="a">
                            <img src={mac} alt=""/>
                            <p>Stark for Mac</p>
                        </a>
                        <a href="" target="_blank" className="b">
                            <img src={figma} alt=""/>
                            <p>Stark for Figma</p>
                        </a>
                        <a href="" target="_blank" className="c">
                            <img src={sketch} alt=""/>
                            <p>Stark for Sketch</p>
                        </a>
                        <a href="" target="_blank" className="d">
                            <img src={xd} alt=""/>
                            <p>Stark for Adobe XD</p>
                        </a>
                    </div>
                    <div className="flex-container-2">
                        <a href="" target="_blank" className="e">
                            <img src={chrome} alt=""/>
                            <p>Stark for Chrome</p>
                        </a>
                        <a href="" target="_blank" className="f">
                            <img src={edge} alt=""/>
                            <p>Stark for Edge</p>
                        </a>
                        <a href="" target="_blank" className="g">
                            <img src={safari} alt=""/>
                            <p>Stark for Safari</p>
                        </a>
                        <a href="" target="_blank" className="h">
                            <img src={arc} alt=""/>
                            <p>Stark for Arc</p>
                        </a>
                        <a href="" target="_blank" className="j">
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