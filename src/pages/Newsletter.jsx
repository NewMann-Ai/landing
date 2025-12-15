import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo-white.png";
import "../styles/newsletter.css";

function Newsletter() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setStatus({
        type: "error",
        message: "Per favore inserisci un'email",
      });
      return;
    }

    setIsLoading(true);
    setStatus({ type: "", message: "" });

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: "info@newmann.ai",
          user_email: email,
          message: `Utente ${email} si è unito a Newmann`,
        },
        publicKey
      );

      setStatus({
        type: "success",
        message: "Grazie! Ti abbiamo aggiunto alla lista.",
      });
      setEmail("");
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus({
        type: "error",
        message: "Errore nell'invio. Riprova più tardi.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="newsletter-container">
      <button
        className="back-arrow"
        onClick={() => navigate("/")}
        aria-label="Go back to home"
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
      <section className="left-section">
        <div className="hero-title">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-stars"
              viewBox="0 0 16 16"
            >
              <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
            </svg>
            Unisciti
          </span>

          <h1>Entra nella nostra Waiting List</h1>

          <p>
            Stiamo preparando qualcosa di nuovo. Iscriviti per essere tra i
            primi ad accedere alla versione beta.
          </p>

          <form className="input-cont" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="nominativo@gmail.com"
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
            <div className="terms-conditions">
              <input type="checkbox" required name="terms" id="terms" />
              <span>
                Accetto i{" "}
                <a
                  className="terms-link"
                  href="/terms-and-conditions"
                  rel="noopener noreferrer"
                >
                  termini e le condizioni
                </a>
              </span>
            </div>
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Invio..." : "Unisciti"}
            </button>
          </form>

          {status.message && (
            <div className={`status-message ${status.type}`}>
              {status.message}
            </div>
          )}
        </div>
      </section>

      <section className="right-section">
        <img src={Logo} alt="white logo" />
      </section>
    </main>
  );
}

export default Newsletter;
