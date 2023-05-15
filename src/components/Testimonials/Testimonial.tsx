import React from "react";

const Testimonial = ({ src, name, job, quotation }: { src: string, name: string, job: string, quotation: string }) => {
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