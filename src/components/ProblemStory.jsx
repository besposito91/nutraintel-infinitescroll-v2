import { useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from '../lib/motion';

const STORIES = [
  { number: '01', title: 'I dati si fermano dove vengono raccolti.', text: 'Una foto sul telefono, un valore annotato, una misurazione ricordata a voce. Informazioni utili esistono, ma non costruiscono una storia leggibile.' },
  { number: '02', title: 'Tra due visite si apre un vuoto.', text: 'Il paziente continua il suo percorso ogni giorno, ma spesso non sa se sta andando nella direzione giusta. Il silenzio può trasformarsi in distanza.' },
  { number: '03', title: 'Il professionista vede solo una parte.', text: 'Senza continuità, ogni incontro ricomincia dalla ricostruzione: cosa è successo, cosa è mancato, dove il percorso ha rallentato.' },
  { number: '04', title: 'E un percorso personale rischia di sentirsi impersonale.', text: 'Quando tecnologia, dati e relazione non dialogano, il paziente può sentirsi un numero. E il nutrizionista perde occasioni preziose per esserci.' },
];

export default function ProblemStory() {
  const ref = useRef(null);
  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.utils.toArray('.ni-problem-story', ref.current).forEach((card) => {
      gsap.from(card, { opacity: 0, y: 80, scrollTrigger: { trigger: card, start: 'top 82%', end: 'top 48%', scrub: true } });
    });
    ScrollTrigger.create({ trigger: ref.current, start: 'top 55%', end: 'bottom 45%', toggleClass: { targets: ref.current, className: 'is-reading' } });
  }, { scope: ref });

  return (
    <section className="ni-problem" id="ni-problem" aria-labelledby="ni-problem-title" ref={ref}>
      <div className="ni-problem-head">
        <span>01 / PRIMA DI NUTRAINTEL</span>
        <h2 id="ni-problem-title">Il percorso continua.<br /><em>Ma il filo si perde.</em></h2>
        <p>Tra una visita e l’altra accadono le cose più importanti. Senza un ecosistema connesso, però, restano spesso invisibili.</p>
      </div>
      <div className="ni-problem-list">
        {STORIES.map((story) => <article className="ni-problem-story" key={story.number}><span>{story.number}</span><h3>{story.title}</h3><p>{story.text}</p></article>)}
      </div>
      <blockquote>Il problema non è la mancanza di dati.<br />È la distanza tra quei dati e le persone.</blockquote>
    </section>
  );
}
