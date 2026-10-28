import { Laptop, Scale, Phone } from './devices/Devices';

export default function SolutionOverview() {
  return (
    <section className="ni-solution" aria-labelledby="ni-solution-title">
      <header className="ni-solution-head">
        <span>02 / LA NOSTRA RISPOSTA</span>
        <h2 id="ni-solution-title">Un ecosistema.<br /><em>Una relazione continua.</em></h2>
        <p>NutraIntel riunisce gli strumenti e restituisce significato ai dati, per aiutare professionista e paziente a restare connessi.</p>
      </header>
      <article className="ni-solution-row ni-solution-row--portal">
        <div><span>01 / GESTIONE PROFESSIONALE</span><h3>Tutto il percorso, finalmente davanti agli occhi.</h3><p>Dal portale il nutrizionista organizza i pazienti, consulta lo storico e riconosce rapidamente ciò che richiede attenzione.</p></div>
        <Laptop />
      </article>
      <article className="ni-solution-row ni-solution-row--ecosystem">
        <div><span>02 / ECOSISTEMA CONNESSO</span><h3>Tre strumenti.<br />Un solo flusso.</h3><p>Portale, bilancia e app comunicano tra loro. La misurazione nasce a casa, diventa informazione e arriva dove può fare la differenza.</p></div>
        <div className="ni-system-trio"><div><small>PORTALE</small><Laptop /></div><div><small>BILANCIA</small><Scale /></div><div><small>APP</small><Phone /></div><i /><i /></div>
      </article>
      <article className="ni-solution-row ni-solution-row--app">
        <div><span>03 / MONITORAGGIO A DISTANZA</span><h3>Il percorso resta vicino, anche quando lo studio è lontano.</h3><p>Attraverso l’app, il paziente consulta i propri progressi, riceve indicazioni e mantiene vivo il dialogo con il professionista.</p></div>
        <div className="ni-app-focus"><Phone /><span>OGGI · NUOVO MESSAGGIO</span><p>“Ho visto i tuoi dati. Ottimo passo avanti.”</p></div>
      </article>
    </section>
  );
}
