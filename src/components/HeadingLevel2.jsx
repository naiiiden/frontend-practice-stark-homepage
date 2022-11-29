const HeadingLevel2 = ({ className, headingLine1, headingLine2, img1, img2 }) => {
    return (
        <div className={`h2-svg-container ${className}`}>
            <h2>
                <span>
                    {headingLine1}
                </span>
                {headingLine2 && <br/>}
                {headingLine2 && 
                    <span>
                        {headingLine2}
                    </span>
                }
            </h2>
            {img1 && <img src={img1} alt=""/>}
            {img2 && <img src={img2} alt=""/>}
        </div>
    )
}

export default HeadingLevel2;