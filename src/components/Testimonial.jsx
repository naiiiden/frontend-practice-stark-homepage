const Testimonial = ({ src, name, job, quotation }) => {
    return (
        <figure className="testimonial">
            <figcaption>
                <img src={src} alt=""/>
            <span>
                {name}
                <br/>
                {job}
            </span>
            </figcaption>
            <blockquote>
                {quotation}
            </blockquote>
        </figure>
    )
}

export default Testimonial;