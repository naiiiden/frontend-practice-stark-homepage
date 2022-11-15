import yellow_bg2 from "../assets/svg/yellow-bg2.svg";

import Quotes from "../Quotes";
import Testimonial from "./Testimonial";

const Testimonials = () => {

    const userTestimonials = Quotes.map(testimonial => {
        return <Testimonial 
                    key={testimonial.id} 
                    src={testimonial.img} 
                    name={testimonial.name} 
                    job={testimonial.job} 
                    quotation={testimonial.quotation}
                />
    });

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
            <div className="testimonials-container">
                {userTestimonials}
            </div>
        </section>
    )
}

export default Testimonials;