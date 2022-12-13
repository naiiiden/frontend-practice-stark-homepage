import red_bg from "../../assets/images_heading2/red-bg.svg";
import sparkle from "../../assets/images_heading2/sparkle.svg";
import HeadingLevel2 from "../HeadingLevel2";
import Feature2Grid from "./Feature2Grid";

const Features2 = () => {
    return (
        <section className="features2-section">
            <HeadingLevel2 
                headingLine1="Come for the features,"
                headingLine2="stay for the magic"
                img1={red_bg}
                img2={sparkle}
            />
            <Feature2Grid/>
        </section>
    )
}

export default Features2;