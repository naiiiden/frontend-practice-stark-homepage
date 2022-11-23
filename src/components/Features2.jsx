import red_bg from "../assets/svg/red-bg.svg";
import sparkle from "../assets/svg/sparkle.svg";
import HeadingLevel2 from "./HeadingLevel2";

const Features2 = () => {
    return (
        <section className="features2-section">
            <HeadingLevel2 
                headingLine1="Come for the features,"
                headingLine2="stay for the magic"
                img1={red_bg}
                img2={sparkle}
            />
        </section>
    )
}

export default Features2;