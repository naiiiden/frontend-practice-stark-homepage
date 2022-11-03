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
        <section className="download-section">
            <h2>Meet the Suite</h2>
            <div className="download-container">
                <a href="">
                    <img src={safari} alt=""/>
                    <p>Stark for Mac</p>
                </a>
            </div>
        </section>
    )
}

export default Download;