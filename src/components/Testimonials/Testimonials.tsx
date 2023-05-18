import { useState, useEffect } from 'react';
import React from "react";

import yellow_bg2 from "../../assets/images_heading2/yellow-bg2.svg";

// import Quotes from "./Quotes";
import HeadingLevel2 from "../HeadingLevel2/HeadingLevel2";
import Testimonial from "./Testimonial";

import a1 from "../../assets/images_testimonial/homepage__avatar__emily-ching.png";
import a2 from "../../assets/images_testimonial/homepage__avatar__sean-keating.png";
import a3 from "../../assets/images_testimonial/homepage__avatar__jordan-lucero.png";
import a4 from "../../assets/images_testimonial/homepage__avatar__carlos-torres.png";
import a5 from "../../assets/images_testimonial/homepage__avatar__jon-fox.png";
import a6 from "../../assets/images_testimonial/homepage__avatar__johnny-hill.png";

const Testimonials = () => {
  
  interface Quote {
    id: number
    img: string
    name: string
    job: string
    quotation: string
  }

  const Quotes: Quote[] = [
    {
        id: 1,
        img: a1,
        name: "Emily Ching",
        job: "Head of design at Making CO",
        quotation: "Stark is my favorite plugin for Figma! I use it daily.",
    },
    {
        id: 2,
        img: a2,
        name: "Sean Keating",
        job: "Digital product designer at S&P Global",
        quotation: "It's simple, easy to use, and effective. Does just what I need it to do.",
    },
    {
        id: 3,
        img: a3,
        name: "Jordan Lucero",
        job: "CEO at Jservices",
        quotation: "...from the ease of use, fantastic resources, and the amount of support it gets from the team.",
    },
    {
        id: 4,
        img: a4,
        name: "Carlos Torres",
        job: "UX engineer at Alto",
        quotation: "I have learned so much and how to think of others while designing.",
    },
    {
        id: 5,
        img: a5,
        name: "Jon Fox",
        job: "Lead UX designer at La Voting Solutions",
        quotation: "...a welcome tool set to make interesting, impactful designs that are also accessible.",
    },
    {
        id: 6,
        img: a6,
        name: "Johnny Hill",
        job: "UX director at Knock, INC",
        quotation: "Everyone should be using Stark as part of their workflow.",
    },
  ]

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
