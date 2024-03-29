import Header from "../../components/Header/Header";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Security = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="info-header">
                <Header
                    pIntro="Legal Information"
                    h1Text="Security Overview" 
                    purpleBg={false}                
                />
            </div>
            <div className="wall-text-bg">
                <main className="wall-text-wrapper">
                        <p>Last updated: October 31, 2021</p>
                        <section>
                            <h2>About</h2>
                            <p>This overview provides details about security practices we follow and how we secure your data at Stark. Additionally, you'll find information on GDPR requests and how to reach out for more details for anything not covered below.</p>
                        </section>
                        <section>
                            <h2>Security Practices</h2>
                            <ul>
                                <li>
                                    <p>Stark regularly audits changes, additions, and removals to the product throughout its development lifecycle.</p>
                                </li>
                                <li>
                                    <p>Manual code reviews are performed in addition to automated tooling used.</p>
                                </li>
                                <li>
                                    <p>Open-source alerts are in place to address any identified security issues in the third-party code we utilize.</p>
                                </li>
                                <li>
                                    <p>Monitoring and alerts are in place for all aspects of Stark's servers and infrastructure to detect potential abuse.</p>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h2>How We Secure Your Data</h2>
                            <ul>
                                <li>
                                    <p>Data is encrypted in transit using TLS. At rest, your data is encrypted with AES-256 block-level storage encryption</p>
                                </li>
                                <li>
                                    <p>Authorization controls are in place throughout to ensure access to your data is limited only to you.</p>
                                </li>
                                <li>
                                    <p>Stark uses Stripe for its handling of payment processing. Financial data is not stored on our servers. Read more about <a href="https://stripe.com/privacy-center/legal">Stripe’s Security</a>.</p>
                                </li>
                                <li>
                                    <p>Stark uses Mixpanel for its handling of analytics data. In keeping with our clear separation of user data, personally identifiable information is not stored within Mixpanel. Additionally, Stark does not collect potentially sensitive information relating to your work (documents, images, metadata, etc.) for analytics purposes. Read more about <a href="https://mixpanel.com/legal/security-overview/">Mixpanel’s security</a>.</p>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h2>Vulnerability Disclosure Program</h2>
                            <p>If you've found a vulnerability or security issue, we'd appreciate your feedback; please reach out to us at <a href="">security@getstark.co</a> so we can work to address it.</p>
                        </section>
                        <section>
                            <h2>GDPR Compliance</h2>
                            <p>Users can opt in or out of our analytics gathering at any time via the <a href="https://account.getstark.co/dashboard">Dashboard</a>. Additionally, users can delete their own accounts without the need to reach out to us. For GDPR deletion (to remove any analytics data associated with a user), please reach out to us at <a href="security@getstark.co">support@getstark.co</a>.</p>
                        </section>
                        <section>
                            <h2>More Info</h2>
                            <p>Still have questions? Reach out to us at <a href="support@getstark.co    ">support@getstark.co</a>. Also, be sure to check out the following links:</p>
                            <ul>
                                <li><Link to="/privacy">Privacy Policy</Link></li>
                                <li><a href="https://www.getstark.co/cookies">Cookie Policy</a></li>
                                <li><Link to="/tos">Terms of Service</Link></li>
                            </ul>
                        </section>
                </main>
            </div>
        </>
    )
}

export default Security;