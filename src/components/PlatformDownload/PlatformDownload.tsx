import React from "react";

const PlatformDownload = ({ href, src, alt, platform  }: { href: string, src: string, alt: string, platform: string }) => {
    return (
        <a href={href} target="_blank" className="platform-download-link">
            <img 
                src={src} 
                alt={alt}
            />
            <p>Stark for {platform}</p>
        </a>
    )
}

export default PlatformDownload;