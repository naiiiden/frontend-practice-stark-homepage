import { useLocation } from "react-router-dom";
import PurpleLink from "./PurpleLink";

const Feature = ({ sectionClass, mt, pShort, dec, h2, desc, href, linkClass, text, imgClass, src1, src2, idImgContainer, idImg1, idImg2, }) => {
    const { pathname } = useLocation();

    return (
        <section className={`feature-section ${sectionClass}`} style={{"marginTop": `${mt}px`}}>
            <div className="inner-wrapper-div">
                <div className="text-container">
                    <div className="decoration-container">
                        <p className="uppercase">{pShort}</p>
                        {(dec && pathname == "/") && <img src={dec} alt=""/>}
                    </div>
                    <h2>{h2}</h2>
                    <p>{desc}</p>
                    <PurpleLink href={href} text={text} className={linkClass}/>
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