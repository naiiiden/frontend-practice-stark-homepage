const Testimonial = ({ src, name, job, quotation }) => {
    return (
        <figure className="testimonial">
            <figcaption>
                <img src={src} alt=""/>
                <span className="uppercase">
                    {name},
                    <br/>
                    {job}
                </span>
            </figcaption>
            <blockquote>
                “{quotation}”
            </blockquote>
        </figure>
    )
}

export default Testimonial;