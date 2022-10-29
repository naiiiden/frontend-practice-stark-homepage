import Nav from "./Nav";

const Header = () => {
    return (
        <header>
            <Nav/>
            <div className="text-illustration-wrapper">
                <div className="text-container">
                    <p className="introduction">INTRODUCING THE ALL-NEW STARK SUITE</p>
                    <h1>Super­charge Access­ibility</h1>
                    <p className="description">Tired of manually checking spreadsheets, messy handovers, and expensive retrofitting? Stark connects the tools you and your team already use in a streamlined end-to-end accessibility workflow you actually love.</p>
                    <div className="links-wrapper">
                        <a href="" className="free">Create a free account</a>
                        <a href="" class="learn">Learn more</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;