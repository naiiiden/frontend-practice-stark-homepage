import React from "react";

import { useLocation } from "react-router-dom";
import PurpleLink from "../PurpleLink/PurpleLink";
import download_mac from "../../assets/images_repeating/download-mac.svg";

type FeatureProps = {
    sectionClass?: string, 
    mt: string, 
    pShort: string, 
    dec?: string, 
    h2: string, 
    desc: string, 
    href?: string, 
    linkClass?: string, 
    text?: string, 
    imgClass?: string, 
    src1: string, 
    src2?: string, 
    idImgContainer?: string, 
    idImg1: string, 
    idImg2?: string, 
    maxW: string, 
    mr: boolean, 
    ml: boolean
}

const Feature = ({ sectionClass, mt, pShort, dec, h2, desc, href, linkClass, text, imgClass, src1, src2, idImgContainer, idImg1, idImg2, maxW, mr, ml } : FeatureProps) => {
    const { pathname } = useLocation();

    return (
        <section className={`feature-section ${sectionClass}`} style={{"marginTop": `${mt}px`}}>
            <div className="inner-wrapper-div">
                <div className="text-container" style={{
                    "maxWidth": `${maxW}px`,
                    "marginLeft": `${ml && "auto"}`,
                    "marginRight": `${mr && "auto"}`,
                }}>
                    <div className="decoration-container">
                        <p className="uppercase" style={{
                            "fontFamily": "roboto-mono"
                        }}>{pShort}</p>
                        {(dec && pathname == "/") && <img src={dec} alt=""/>}
                    </div>
                    <h2>{h2}</h2>
                    <p>{desc}</p>
                    {pathname == "/mac" ?
                    <a href="https://apps.apple.com/us/app/stark-your-accessibility-hub/id1624920264" className="mac-link"><img src={download_mac} alt="Download on the Mac App Store"/></a>
                    : 
                    <PurpleLink href={href} text={text} className={linkClass}/>}
                </div>
                <div className={`image-container ${imgClass}`} id={idImgContainer}>
                    <div className="image-inner-wrapper">
                        {src1 && <img src={src1} alt="" id={idImg1}/>}
                        {src2 && <img src={src2} alt="" id={idImg2}/>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature;