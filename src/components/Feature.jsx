const Feature = ({ sectionClass, mt, pShort, dec, h2, desc, href, aText, imgClass, src1, src2 }) => {
    return (
        <section className={`feature-section ${sectionClass}`} style={{"margin-top": `${mt}px`}}>
            <div className="text-container">
                <div className="decoration-container">
                    <p>{pShort}</p>
                    {dec && <img src={dec} alt=""/>}
                </div>
                <h2>{h2}</h2>
                <p>{desc}</p>
                <a href={href}>{aText}</a>
            </div>
            <div className={`image-container ${imgClass}`}>
                {src1 && <img src={src1} alt=""/>}
                {src2 && <img src={src2} alt=""/>}
            </div>
        </section>
    )
}

export default Feature;