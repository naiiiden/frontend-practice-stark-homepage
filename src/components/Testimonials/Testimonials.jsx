import yellow_bg2 from "../../assets/images_heading2/yellow-bg2.svg";

import Quotes from "../../Quotes";
import HeadingLevel2 from "../HeadingLevel2/HeadingLevel2";
import Testimonial from "./Testimonial";

import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const userTestimonials = Quotes.map(testimonial => {
    return (
      <Testimonial
        key={testimonial.id}
        src={testimonial.img}
        name={testimonial.name}
        job={testimonial.job}
        quotation={testimonial.quotation}
      />
    );
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % userTestimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="testimonial-section">
      <HeadingLevel2
        headingLine1="Loved by the community"
        headingLine2="trusted by 8,000+ companies"
        img1={yellow_bg2}
      />
      <div className="testimonials-container">
        {userTestimonials[currentIndex]}
      </div>
    </section>
  );
};

export default Testimonials;
