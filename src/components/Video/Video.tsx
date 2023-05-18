import React from "react";

import yellow_bg from "../../assets/images_heading2/yellow-bg.svg";
import play from "../../assets/images_video/play.svg";
import video_placeholder from "../../assets/images_video/video-still.webp";
import { useState } from "react";
import HeadingLevel2 from "../HeadingLevel2/HeadingLevel2";
import { useLocation } from "react-router-dom";

const Video = () => {
    const [playVideo, setPlayVideo] = useState(false);
    const { pathname } = useLocation();

    return (
        <>
            {pathname != "/" ? 
            <div className="video-section" style={{
                "paddingTop" : `${pathname != "/mac" ? "0px" : "120px"}`
            }}>
                <HeadingLevel2 
                    headingLine1="Speed up your accessibility"
                    headingLine2="workflow from months to minutes"
                    img1={yellow_bg}             
                />
                <p>More than 40,000 designers, developers, product managers, and accessibility experts from over 12,000 companies use Stark’s suite of integrated accessibility tools in their daily product development cycle. Join them today!</p>
            </div>
            :
            <section className="video-section" style={{
                "paddingTop" : `${pathname != "/" && pathname != "/mac" ? "0px" : "120px"}`
            }}>
                <HeadingLevel2 
                    headingLine1="Speed up your accessibility"
                    headingLine2="workflow from months to minutes"
                    img1={yellow_bg}               
                />
                <div className="video-container">
                    <div className="video-subcontainer" style={{
                        "display": `${playVideo && "none"}`
                    }}>
                        <img src={video_placeholder} alt="" className="placeholder"/>
                        <button onClick={() => (setPlayVideo(true))} className="play">
                            <img src={play} alt="Play video" className="play"/>
                        </button>
                    </div>
                    {playVideo && <iframe src="https://www.youtube.com/embed/_SMRBDaXq84?autoplay=1&mute=0" width="100%" height="100%" allow="autoplay" style={{ border: 'none' }}/>}
                </div>
                <p>More than 40,000 designers, developers, product managers, and accessibility experts from over 12,000 companies use Stark’s suite of integrated accessibility tools in their daily product development cycle. Join them today!</p>
            </section>
            }
        </>
    )
}

export default Video;