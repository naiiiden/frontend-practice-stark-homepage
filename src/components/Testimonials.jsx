import yellow_bg from "../assets/svg/yellow-bg.svg";

const Testimonials = () => {
    return (
        <section className="testimonial-section">
            <div className="h2-svg-container">
                <h2>
                    Loved by the community
                    <br/>
                    trusted by 8,000+ companies
                </h2>
                <img src={yellow_bg} alt=""/>
            </div>
        </section>
    )
}

export default Testimonials;