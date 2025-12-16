import { Link } from "react-router-dom";
import CTA from "../assets/cta.png";
import Dashboard from "../assets/images/dashboard.png";
import Labels from "../assets/images/labels.png";
import Luisa from "../assets/images/members/luisa.jpg";
import Marco from "../assets/images/members/marco.jpg";
import Stefano from "../assets/images/members/stefano.jpg";
import Valentina from "../assets/images/members/valentina.jpg";
import Vladyslav from "../assets/images/members/vladyslav.jpg";
import Logo from "../assets/logo.png";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "../styles/animations.css";
import "../styles/home.css";

function Home() {
    const [heroRef, heroVisible] = useScrollAnimation(0.1);
    const [aiRef, aiVisible] = useScrollAnimation(0.1);
    const [teamRef, teamVisible] = useScrollAnimation(0.1);
    const [ctaRef, ctaVisible] = useScrollAnimation(0.1);

    return (
        <main>
            <Navbar />

            <section
                ref={heroRef}
                className={`hero-section animate-section ${
                    heroVisible ? "visible" : ""
                }`}
            >
                <Title
                    label="AI-Powered Dashboard"
                    title="Intelligent automation that powers and simplifies your business"
                    description="Automate repetitive work, keep everything under control and grow your business with artificial intelligence."
                    position="center"
                    isHeroTitle={true}
                />

                <div className="hero-image">
                    <img src={Dashboard} alt="Dashboard image" />
                </div>
            </section>

            <section
                ref={aiRef}
                className={`ai-section animate-section ${
                    aiVisible ? "visible" : ""
                }`}
            >
                <Title
                    label="Our Solution"
                    title={
                        <>
                            <h1>
                                Customized{" "}
                                <h1 className="highlight">AI Assistant</h1>
                            </h1>
                        </>
                    }
                    description={
                        <>
                            <p>
                                Manage your inbox effortlessly with a highly
                                adaptable AI that simplifies communication and
                                boosts productivity.
                            </p>

                            <div className="list">
                                <div className="benefit">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-check2"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                                    </svg>
                                    <p>
                                        <strong>
                                            Intelligent email management.
                                        </strong>{" "}
                                        Automatically organizes messages,
                                        prioritizes what matters and keeps your
                                        inbox under control.
                                    </p>
                                </div>

                                <div className="benefit">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-check2"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                                    </svg>
                                    <p>
                                        <strong>Automatic responses.</strong>{" "}
                                        Handles routine replies so you can focus
                                        on higher-value work.
                                    </p>
                                </div>

                                <div className="benefit">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-check2"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                                    </svg>
                                    <p>
                                        <strong>Communication analysis.</strong>{" "}
                                        Analyzes and structures communication
                                        data for clearer decisions.
                                    </p>
                                </div>

                                <div className="benefit">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-check2"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                                    </svg>
                                    <p>
                                        <strong>Human support.</strong> Receive
                                        guided assistance to customize the tool
                                        and adapt it to your workflow.
                                    </p>
                                </div>

                                <Link
                                    to="https://youtu.be/mtXvKbva6zg?si=pI3ZcASmXDU6gWOn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button>Discover how it works</button>
                                </Link>
                            </div>
                        </>
                    }
                    position="start"
                    isHeroTitle={false}
                />
                <div className="image">
                    <img src={Labels} alt="Labels image" />
                </div>
            </section>

            <section
                ref={teamRef}
                className={`title-section animate-section ${
                    teamVisible ? "visible" : ""
                }`}
            >
                <Title
                    label="Members"
                    title={
                        <>
                            <h1>
                                Our <h1 className="highlight">Team</h1>
                            </h1>
                        </>
                    }
                    position="center"
                    isHeroTitle={false}
                />

                <div
                    className={`members-cont animate-children ${
                        teamVisible ? "visible" : ""
                    }`}
                >
                    <div className="member-card">
                        <div className="member-image">
                            <img src={Marco} alt="member card" />
                        </div>
                        <h2>Marco Agrello</h2>
                        <h3>CEO</h3>
                    </div>

                    <div className="member-card">
                        <div className="member-image">
                            <img src={Valentina} alt="member card" />
                        </div>
                        <h2>Valentina Natali</h2>
                        <h3>COO</h3>
                    </div>

                    <div className="member-card">
                        <div className="member-image">
                            <img src={Stefano} alt="member card" />
                        </div>
                        <h2>Stefano Rabacchin</h2>
                        <h3>CTO</h3>
                    </div>

                    <div className="member-card">
                        <div className="member-image">
                            <img src={Vladyslav} alt="member card" />
                        </div>
                        <h2>Vladyslav Bukator</h2>
                        <h3>Frontend Developer</h3>
                        <h3>UX/UI Designer</h3>
                    </div>

                    <div className="member-card">
                        <div className="member-image">
                            <img src={Luisa} alt="member card" />
                        </div>
                        <h2>Luisa Cerin Ogbeiwi</h2>
                        <h3>Fullstack & AI</h3>
                        <h3>Developer</h3>
                    </div>
                </div>
            </section>

            <section
                ref={ctaRef}
                className={`cta-section animate-section ${
                    ctaVisible ? "visible" : ""
                }`}
            >
                <div className="cta">
                    <Title
                        label="What are you waiting for?"
                        title={
                            <>
                                <h1>
                                    Improve your{" "}
                                    <h1 className="highlight">Productivity</h1>
                                </h1>
                            </>
                        }
                        description="Sign up for the waiting list and stay updated on news, features, and release dates."
                        position="center"
                        isHeroTitle={false}
                    />
                    <Link to="/newsletter">
                        <button>Join the Waiting List</button>
                    </Link>
                    <img src={CTA} alt="call to action logo" />
                </div>
            </section>

            <footer>
                <img src={Logo} alt="logo" />
                <p>© 2025 Newmann | All rights reserved.</p>
            </footer>
        </main>
    );
}

export default Home;
