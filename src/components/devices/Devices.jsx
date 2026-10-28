// Mockup provvisori dei dispositivi, uno per pannello.
const bars = (n) => Array.from({ length: n }, (_, i) => <i key={i} />);

export function Monitor() {
  return (
    <div className="ni-device ni-monitor" aria-label="Visualizzazione provvisoria del monitoraggio a distanza">
      <div className="ni-monitor-head">
        <span>PAZIENTE</span>
        <b>AGGIORNATO ORA</b>
      </div>
      <div className="ni-monitor-value">
        <small>PESO</small>
        <strong>72,4</strong>
        <em>kg</em>
      </div>
      <div className="ni-monitor-grid">
        <span>
          <small>IDRATAZIONE</small>
          <b>52%</b>
        </span>
        <span>
          <small>PASSI</small>
          <b>6.842</b>
        </span>
      </div>
      <div className="ni-monitor-line">{bars(6)}</div>
    </div>
  );
}

export function Scale() {
  return (
    <div className="ni-device ni-scale" aria-label="Mockup provvisorio bilancia smart">
      <div>
        <small>72.4</small>
        <b>kg</b>
      </div>
    </div>
  );
}

export function Phone() {
  return (
    <div className="ni-device ni-phone" aria-label="Mockup provvisorio app NutraIntel">
      <div className="ni-phone-notch" />
      <small>ANDAMENTO</small>
      <strong>72,4 kg</strong>
      <div className="ni-mini-chart">{bars(5)}</div>
    </div>
  );
}

export function PatientCard() {
  return (
    <div className="ni-device ni-patient-card" aria-label="Mockup provvisorio scheda paziente digitale">
      <div className="ni-patient-top">
        <span>MB</span>
        <div>
          <b>Maria B.</b>
          <small>Scheda paziente</small>
        </div>
        <em>ATTIVO</em>
      </div>
      <div className="ni-patient-stats">
        <span>
          <small>ULTIMA MISURAZIONE</small>
          <b>72,4 kg</b>
        </span>
        <span>
          <small>VARIAZIONE</small>
          <b>−1,8 kg</b>
        </span>
        <span>
          <small>FOLLOW-UP</small>
          <b>12 giorni</b>
        </span>
      </div>
      <div className="ni-patient-history">{bars(5)}</div>
    </div>
  );
}

export function Alerts() {
  return (
    <div className="ni-device ni-alerts" aria-label="Visualizzazione provvisoria degli avvisi">
      <div className="ni-alert-row">
        <span className="ni-alert-dot" />
        <div>
          <small>MISURAZIONI</small>
          <b>Nessuna nuova misurazione</b>
          <p>Ultimo aggiornamento 14 giorni fa</p>
        </div>
        <em>!</em>
      </div>
      <div className="ni-alert-row">
        <span className="ni-alert-dot ni-alert-dot--soft" />
        <div>
          <small>ANALISI CLINICHE</small>
          <b>Documentazione da aggiornare</b>
          <p>Verifica gli elementi richiesti</p>
        </div>
        <em>↗</em>
      </div>
    </div>
  );
}

export function Laptop() {
  return (
    <div className="ni-device ni-laptop" aria-label="Mockup provvisorio portale professionale">
      <div className="ni-screen">
        <span />
        <div className="ni-dashboard">{bars(3)}</div>
      </div>
      <div className="ni-laptop-base" />
    </div>
  );
}

function Person({ role = 'patient' }) {
  return (
    <div className={`ni-person ni-person--${role}`} aria-hidden="true">
      <i className="ni-person-head" />
      <i className="ni-person-hair" />
      <i className="ni-person-body" />
      <i className="ni-person-arm" />
    </div>
  );
}

export function PatientMessage() {
  return (
    <div className="ni-device ni-human-scene ni-human-scene--patient" aria-label="Paziente che riceve un messaggio dal nutrizionista">
      <Person />
      <div className="ni-scene-phone">
        <small>NUTRAINTEL</small>
        <b>Ottimo lavoro, Maria!</b>
        <p>Ho visto i tuoi progressi. Continuiamo così.</p>
        <em>ORA</em>
      </div>
      <span className="ni-scene-caption">“Mi sento seguito, anche tra una visita e l’altra.”</span>
    </div>
  );
}

export function ProfessionalMessage() {
  return (
    <div className="ni-device ni-human-scene ni-human-scene--pro" aria-label="Nutrizionista che consulta i dati e invia un messaggio">
      <Person role="professional" />
      <div className="ni-scene-desk">
        <div className="ni-scene-screen">
          <small>MARIA B. · ULTIMI 30 GIORNI</small>
          <b>−1,8 kg</b>
          <div>{bars(7)}</div>
          <button type="button">Invia messaggio ↗</button>
        </div>
      </div>
      <span className="ni-scene-caption">Un dato diventa una conversazione.</span>
    </div>
  );
}

export function SharedProgress() {
  return (
    <div className="ni-device ni-shared-progress" aria-label="Professionista e paziente condividono i progressi">
      <Person role="professional" />
      <div className="ni-shared-card"><small>OBIETTIVO CONDIVISO</small><b>72%</b><i /></div>
      <Person />
      <span>Un percorso. Due punti di vista. La stessa direzione.</span>
    </div>
  );
}

export const DEVICES = {
  professional: PatientCard,
  patientMessage: PatientMessage,
  connectedScale: Scale,
  professionalMessage: ProfessionalMessage,
  alerts: Alerts,
  sharedProgress: SharedProgress,
};
