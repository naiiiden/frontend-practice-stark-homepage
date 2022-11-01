import yellow_bg from "../assets/svg/yellow-bg.svg";
import play from "../assets/svg/play.svg";
import video_placeholder from "../assets/images_homepage/video-still.webp";

const Video = () => {
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
                    <img src={play} alt="" class="play"/>
                </div>
                {/* embed youtube video after styling */}
            </div>
            <p>More than 40,000 designers, developers, product managers, and accessibility experts from over 12,000 companies use Stark’s suite of integrated accessibility tools in their daily product development cycle. Join them today!</p>
        </section>
    )
}

export default Video;