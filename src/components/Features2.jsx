import red_bg from "../assets/svg/red-bg.svg";
import sparkle from "../assets/svg/sparkle.svg";

const Features2 = () => {
    return (
        <section className="features2-section">
            <div className="h2-svg-container">
                <h2>
                    Come for the features,
                    <br/>
                    stay for the magic
                </h2>
                <img src={red_bg} alt=""/>
                <img src={sparkle} alt="" />
            </div>
        </section>
    )
}

export default Features2;