import React from "react";

import homepage_feature5 from "../../assets/images_cta/homepage__feature-5.webp";
import homepage_feature5_arrow from "../../assets/images_cta/homepage__feature-5-arrow.svg";
import PurpleLink from "../PurpleLink/PurpleLink";

const CallToAction = () => {
    return (
        <section className="cta-section">
            <div className="cta-inner-wrapper">
                <div className="text-container">
                    <p className="uppercase">It takes a village</p>
                    <h2>Join the Stark community</h2>
                    <p>Connect with a global community of experts from all industries and stay up to date with the largest collection of accessibility resources on the internet.</p>
                    <PurpleLink text="Get Started" href="https://www.getstark.co/slack" className={""} macLink={undefined}/> 
                </div>
                <div className="image-container">
                    <img src={homepage_feature5} alt=""/>
                    <img src={homepage_feature5_arrow} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default CallToAction;