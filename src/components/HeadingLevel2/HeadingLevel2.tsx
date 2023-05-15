import React from "react";

const HeadingLevel2 = ({ className, headingLine1, headingLine2, img1, img2 }: { className: string | undefined, headingLine1: string, headingLine2: string, img1: string | undefined, img2: string | undefined }) => {
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