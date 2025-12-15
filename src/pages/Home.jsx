import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import "../styles/animations.css";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Dashboard from "../assets/images/dashboard.png";
import Labels from "../assets/images/labels.png";
import Marco from "../assets/images/members/marco.jpg";
import Valentina from "../assets/images/members/valentina.jpg";
import Stefano from "../assets/images/members/stefano.jpg";
import Vladyslav from "../assets/images/members/vladyslav.jpg";
import CTA from "../assets/cta.png";
import Logo from "../assets/logo.png";

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
                    title="Automazione intelligente che potenzia e semplifica il tuo business"
                    description="Automatizza il lavoro ripetitivo, mantieni tutto sotto controllo e fai crescere il tuo business grazie all'intelligenza artificiale."
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
                    label="La nostra soluzione"
                    title={
                        <>
                            <h1>
                                <h1 className="highlight">Assistente AI</h1>{" "}
                                Personalizzato
                            </h1>
                        </>
                    }
                    description={
                        <>
                            <p>
                                Gestisci la tua casella di posta senza sforzo
                                grazie a un'AI altamente adattabile che
                                semplifica la comunicazione e aumenta la
                                produttività.
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
                                            Gestione intelligente delle email.
                                        </strong>{" "}
                                        Organizza automaticamente i messaggi, dà
                                        priorità a ciò che conta e mantiene la
                                        tua inbox sotto controllo.
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
                                        <strong>Risposte automatiche.</strong>{" "}
                                        Gestisce le risposte di routine così
                                        puoi concentrarti sul lavoro di maggior
                                        valore.
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
                                        <strong>
                                            Analisi della comunicazione.
                                        </strong>{" "}
                                        Analizza e struttura i dati comunicativi
                                        per decisioni più chiare.
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
                                        <strong>Supporto umano.</strong> Ricevi
                                        assistenza guidata per personalizzare lo
                                        strumento e adattarlo al tuo flusso di
                                        lavoro.
                                    </p>
                                </div>
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
                    label="Membri"
                    title={
                        <>
                            <h1>
                                Il nostro <h1 className="highlight">Team</h1>
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
                        <div className="member-image"></div>
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
                        label="Cosa aspetti?"
                        title={
                            <>
                                <h1>
                                    Migliora la tua{" "}
                                    <h1 className="highlight">Produttività</h1>
                                </h1>
                            </>
                        }
                        description="Iscriviti alla lista d'attesa e rimani aggiornato sulle novità, sulle funzionalità e sulle date di rilascio."
                        position="center"
                        isHeroTitle={false}
                    />
                    <Link to="/newsletter">
                        <button>Unisciti alla Waiting List</button>
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
