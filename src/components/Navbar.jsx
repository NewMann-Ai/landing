import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import Logo from "../assets/logo.png";
import Title from "./Title";

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <nav className="desktop-nav">
                <img src={Logo} alt="logo" />
                <Link to="/newsletter">
                    <button>Unisciti</button>
                </Link>
            </nav>
            <nav className="mobile-nav">
                <img src={Logo} alt="logo" />
                <button onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-x"
                            viewBox="0 0 16 16"
                        >
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-list"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                            />
                        </svg>
                    )}
                </button>
            </nav>
            {isMobileMenuOpen && (
                <div className="mobile-menu-overlay" onClick={toggleMobileMenu}>
                    <div
                        className="mobile-menu-cta"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Title
                            label="Cosa aspetti?"
                            title={
                                <>
                                    <h1>
                                        Migliora la tua{" "}
                                        <h1 className="highlight">
                                            Produttività
                                        </h1>
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
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;
