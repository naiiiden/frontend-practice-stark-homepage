import green_bg from "../assets/svg/green-bg.svg";

const GetStarted = () => {
    return (
        <section className="get-started-section">
            <div className="h2-svg-container">
                <h2>So, you’re ready to get started and supercharge accessiblity?</h2>
                <img src={green_bg} alt=""/>
            </div>
        </section>
    )
}

export default GetStarted;