import Nav from "./Nav";
import yellow_arrow from "../assets/svg/yellow-arrow.svg";
import { useState, useEffect } from "react";

const Header = () => {
    const [isDesktop, setIsDesktop] = useState(false);
    
    const updateMedia = () => setIsDesktop(window.innerWidth <= 1023);
    
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <header>
            <Nav/>
            <div className="text-illustration-wrapper">
                <div className="text-container">
                    <p className="introduction">INTRODUCING THE ALL-NEW STARK SUITE</p>
                    <h1>Super­charge Access­ibility</h1>
                    <p className="description">Tired of manually checking spreadsheets, messy handovers, and expensive retrofitting? Stark connects the tools you and your team already use in a streamlined end-to-end accessibility workflow you actually love.</p>
                    <div className="links-arrow-container">
                        <div className="links-wrapper">
                            <a href="" className="free">Create a free account</a>
                            <a href="" className="learn">Learn more</a>
                        </div>
                        {!isDesktop && <img src={yellow_arrow} alt=""/>}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;