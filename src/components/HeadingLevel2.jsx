const HeadingLevel2 = ({ className, headingLine1, headingLine2, img1, img2 }) => {
    return (
        <div className={`h2-svg-container ${className}`}>
            <h2>
                <span>
                    {headingLine1}
                </span>
                <br/>
                <span>
                    {headingLine2}
                </span>
            </h2>
            <img src={img1} alt=""/>
            <img src={img2} alt=""/>
        </div>
    )
}

export default HeadingLevel2;