import React from "react";

import Nav from "../../components/Nav/Nav";
import PurpleLink from "../../components/PurpleLink/PurpleLink";

const Error = () => {
    return (
        <>
            <header className="header-transparent">
                <Nav purpleBg={false}/>
            </header>
            <main className="error-page">
                <p className="uppercase">404 Error. Whoops.</p>
                <h1>Hmm. That didn't work.</h1>
                <p className="desc">Maybe the link doesn’t exist. Or maybe we just broke it? Hopefully we can take you where you want to go though.</p>
                <div className="links-wrapper">
                  <PurpleLink href="https://www.getstark.co/support" text="Go to Support Center"/>
                  <a href="https://www.getstark.co/support/contact-us" className="contact-us-link">Contact us</a>
                </div>
            </main>
        </>
    )
}

export default Error;