import { useNavigate } from "react-router-dom";
import "../styles/newsletter.css";

const TermsAndConditions = () => {
    const navigate = useNavigate();
    return (
        <main className="newsletter-container terms-page">
            <button
                className="back-arrow"
                onClick={() => navigate("/newsletter")}
                aria-label="Go back to newsletter"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                    />
                </svg>
            </button>
            <section className="terms-container">
                <h1 className="terms-title">Privacy Policy</h1>

                <p className="subtitle">
                    (pursuant to Article 13 of EU Regulation 2016/679 – GDPR)
                </p>

                <p className="updated">Last updated: December 15, 2025</p>

                <section>
                    <h2>1. Data Controller</h2>
                    <p>The Data Controller is:</p>
                    <p>
                        <strong>Newmann</strong>
                        <br />
                        Controller: Marco Agrello
                        <br />
                        Contact email:{" "}
                        <a href="mailto:info@newmann.ai">info@newmann.ai</a>
                    </p>
                </section>

                <section>
                    <h2>2. Types of Data Collected</h2>
                    <p>
                        Through this landing page, the following personal data
                        may be collected:
                    </p>
                    <ul>
                        <li>first and last name</li>
                        <li>email address</li>
                        <li>
                            any additional information voluntarily entered by
                            the user in the form
                        </li>
                    </ul>
                    <p>
                        Providing data is optional, but failure to provide it
                        may make it impossible to deliver the requested service.
                    </p>
                </section>

                <section>
                    <h2>3. Purpose of Processing</h2>
                    <ul>
                        <li>
                            to contact the user following a request for
                            information
                        </li>
                        <li>
                            to allow early access, registration or placement on
                            a waiting list
                        </li>
                        <li>
                            to send informative or operational communications
                            related to the Newmann project
                        </li>
                    </ul>
                    <p>
                        Data will not be used for aggressive marketing purposes
                        or transferred to third parties without explicit
                        consent.
                    </p>
                </section>

                <section>
                    <h2>4. Legal Basis for Processing</h2>
                    <ul>
                        <li>
                            consent of the data subject (Article 6, paragraph 1,
                            letter a GDPR)
                        </li>
                        <li>
                            execution of pre-contractual measures requested by
                            the data subject (Article 6, paragraph 1, letter b
                            GDPR)
                        </li>
                    </ul>
                </section>

                <section>
                    <h2>5. Methods of Processing</h2>
                    <p>
                        Data processing is carried out using computer and
                        telematic tools, in compliance with the principles of
                        lawfulness, fairness, transparency and data
                        minimization.
                    </p>
                    <p>
                        Adequate security measures are adopted to prevent
                        unauthorized access, disclosure, modification or
                        destruction of data.
                    </p>
                </section>

                <section>
                    <h2>6. Data Retention</h2>
                    <p>
                        Personal data will be retained for the time strictly
                        necessary to achieve the purposes for which it was
                        collected and, in any case, not beyond the limits set by
                        applicable law.
                    </p>
                </section>

                <section>
                    <h2>7. Communication and Disclosure of Data</h2>
                    <p>Personal data will not be disclosed.</p>
                    <p>
                        They may be communicated to third parties exclusively
                        for technical or operational needs (e.g. hosting, email
                        services), appointed if necessary as Data Processors
                        pursuant to Article 28 GDPR.
                    </p>
                </section>

                <section>
                    <h2>8. Data Subject Rights</h2>
                    <ul>
                        <li>access your personal data</li>
                        <li>request its rectification or erasure</li>
                        <li>restrict or object to the processing</li>
                        <li>withdraw consent at any time</li>
                        <li>
                            lodge a complaint with the Supervisory Authority for
                            personal data protection
                        </li>
                    </ul>
                    <p>
                        Requests can be sent to the email address indicated in
                        point 1.
                    </p>
                </section>

                <section>
                    <h2>9. Changes to this Privacy Policy</h2>
                    <p>
                        The Controller reserves the right to modify this privacy
                        policy at any time. Changes will be published on this
                        page.
                    </p>
                </section>
            </section>
        </main>
    );
};

export default TermsAndConditions;
