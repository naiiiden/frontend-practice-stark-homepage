import yellow_bg from "../assets/svg/yellow-bg.svg";
import play from "../assets/svg/play.svg";
import video_placeholder from "../assets/images_homepage/video-still.webp";
import { useState } from "react";

const Video = () => {
    const [playVideo, setPlayVideo] = useState(false);

    return (
        <section className="video-section">
            <div className="h2-svg-container">
                <h2>
                    Speed up your accessibility
                    <br/>
                    workflow from months to minutes
                </h2>
                <img src={yellow_bg} alt=""/>
            </div>
            <div className="video-container">
                <div className="video-subcontainer">
                    <img src={video_placeholder} alt="" className="placeholder"/>
                    <img src={play} alt="" className="play" onClick={(e) => (e.target.parentNode.style.display = "none", setPlayVideo(true))}/>
                </div>
                {playVideo && <iframe src="https://www.youtube.com/embed/_SMRBDaXq84?autoplay=1&mute=0" width="100%" height="100%" frameBorder="0" allow="autoplay"/>}
            </div>
            <p>More than 40,000 designers, developers, product managers, and accessibility experts from over 12,000 companies use Stark’s suite of integrated accessibility tools in their daily product development cycle. Join them today!</p>
        </section>
    )
}

export default Video;