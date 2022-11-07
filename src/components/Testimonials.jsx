import yellow_bg2 from "../assets/svg/yellow-bg2.svg";

const Testimonials = () => {
    return (
        <section className="testimonial-section">
            <div className="h2-svg-container">
                <h2>
                    Loved by the community
                    <br/>
                    trusted by 8,000+ companies
                </h2>
                <img src={yellow_bg2} alt=""/>
            </div>
        </section>
    )
}

export default Testimonials;