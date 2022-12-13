import Nav from "../components/Nav/Nav";
import PurpleLink from "../components/PurpleLink/PurpleLink";

const Error = () => {
    return (
        <>
            <header className="header-transparent">
                <Nav/>
            </header>
            <main className="error-page">
                <p className="uppercase">404 Error. Whoops.</p>
                <h1>Hmm. That didn't work.</h1>
                <p className="desc">Maybe the link doesn’t exist. Or maybe we just broke it? Hopefully we can take you where you want to go though.</p>
                <div className="links-wrapper">
                  <PurpleLink href="" text="Go to Support Center"/>
                  <a href="" className="contact-us-link">Contact us</a>
                </div>
            </main>
        </>
    )
}

export default Error;