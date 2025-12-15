import { useNavigate } from "react-router-dom";
import "../styles/newsletter.css";

const TermsAndConditions = () => {
  const navigate = useNavigate();
  return (
    <main className="newsletter-container">
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
        <h1 className="terms-title">Informativa Privacy</h1>

        <p className="subtitle">
          (ai sensi dell’art. 13 del Regolamento UE 2016/679 – GDPR)
        </p>

        <p className="updated">Ultimo aggiornamento: 15 dicembre 2025</p>

        <section>
          <h2>1. Titolare del trattamento</h2>
          <p>Il Titolare del trattamento dei dati è:</p>
          <p>
            <strong>Newmann</strong>
            <br />
            Titolare: Marco Agrello
            <br />
            Email di contatto:{" "}
            <a href="mailto:info@newmann.ai">info@newmann.ai</a>
          </p>
        </section>

        <section>
          <h2>2. Tipologia di dati raccolti</h2>
          <p>
            Attraverso questa landing page possono essere raccolti i seguenti
            dati personali:
          </p>
          <ul>
            <li>nome e cognome</li>
            <li>indirizzo email</li>
            <li>
              eventuali ulteriori informazioni inserite volontariamente
              dall’utente nel form
            </li>
          </ul>
          <p>
            Il conferimento dei dati è facoltativo, ma il mancato conferimento
            può rendere impossibile l’erogazione del servizio richiesto.
          </p>
        </section>

        <section>
          <h2>3. Finalità del trattamento</h2>
          <ul>
            <li>
              ricontattare l’utente a seguito di una richiesta di informazioni
            </li>
            <li>
              consentire l’accesso anticipato, la registrazione o l’inserimento
              in una lista di attesa
            </li>
            <li>
              inviare comunicazioni informative o operative relative al progetto
              Newmann
            </li>
          </ul>
          <p>
            I dati non saranno utilizzati per finalità di marketing aggressivo o
            ceduti a terzi senza consenso esplicito.
          </p>
        </section>

        <section>
          <h2>4. Base giuridica del trattamento</h2>
          <ul>
            <li>consenso dell’interessato (art. 6, par. 1, lett. a GDPR)</li>
            <li>
              esecuzione di misure precontrattuali richieste dall’interessato
              (art. 6, par. 1, lett. b GDPR)
            </li>
          </ul>
        </section>

        <section>
          <h2>5. Modalità del trattamento</h2>
          <p>
            Il trattamento dei dati avviene mediante strumenti informatici e
            telematici, nel rispetto dei principi di liceità, correttezza,
            trasparenza e minimizzazione dei dati.
          </p>
          <p>
            Sono adottate adeguate misure di sicurezza per prevenire accessi non
            autorizzati, divulgazione, modifica o distruzione dei dati.
          </p>
        </section>

        <section>
          <h2>6. Conservazione dei dati</h2>
          <p>
            I dati personali saranno conservati per il tempo strettamente
            necessario al raggiungimento delle finalità per cui sono stati
            raccolti e, in ogni caso, non oltre i limiti previsti dalla
            normativa vigente.
          </p>
        </section>

        <section>
          <h2>7. Comunicazione e diffusione dei dati</h2>
          <p>I dati personali non saranno diffusi.</p>
          <p>
            Potranno essere comunicati a soggetti terzi esclusivamente per
            esigenze tecniche o operative (es. hosting, servizi email), nominati
            se necessario Responsabili del trattamento ai sensi dell’art. 28
            GDPR.
          </p>
        </section>

        <section>
          <h2>8. Diritti dell’interessato</h2>
          <ul>
            <li>accedere ai propri dati personali</li>
            <li>richiederne la rettifica o la cancellazione</li>
            <li>limitare o opporsi al trattamento</li>
            <li>revocare il consenso in qualsiasi momento</li>
            <li>
              proporre reclamo all’Autorità Garante per la protezione dei dati
              personali
            </li>
          </ul>
          <p>
            Le richieste possono essere inviate all’indirizzo email indicato al
            punto 1.
          </p>
        </section>

        <section>
          <h2>9. Modifiche alla presente informativa</h2>
          <p>
            Il Titolare si riserva il diritto di modificare la presente
            informativa in qualsiasi momento. Le modifiche saranno pubblicate su
            questa pagina.
          </p>
        </section>
      </section>
    </main>
  );
};

export default TermsAndConditions;
