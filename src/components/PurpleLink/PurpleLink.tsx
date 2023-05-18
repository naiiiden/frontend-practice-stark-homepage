import React from "react";
import download_mac from "../../assets/images_repeating/download-mac.svg";

const PurpleLink = ({ href, className, text, macLink }: { href: string | undefined, className?: string, text: string | undefined, macLink?: string | boolean}) => {
    return (
        <>
            {macLink ? 
                <a href={href} className={`mac-link`}><img src={download_mac} alt="Download on the Mac App Store"/></a>
                :
                <a href={href} className={`purple-link ${className ? `${className}` : ""}`}>{text}</a>
            }
        </>
    )
}

export default PurpleLink;