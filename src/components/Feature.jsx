const Feature = ({ sectionClass, mt, pShort, dec, h2, desc, href, aText, imgClass, src1, src2, idImgContainer, idImg1, idImg2, }) => {

    return (
        <section className={`feature-section ${sectionClass}`} style={{"marginTop": `${mt}px`}}>
            <div className="inner-wrapper-div">
                <div className="text-container">
                    <div className="decoration-container">
                        <p>{pShort}</p>
                        {dec && <img src={dec} alt=""/>}
                    </div>
                    <h2>{h2}</h2>
                    <p>{desc}</p>
                    <a href={href}>{aText}</a>
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