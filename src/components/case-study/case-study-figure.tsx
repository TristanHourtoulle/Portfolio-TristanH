import type { ReactNode } from 'react';
import type { CaseStudyFigureId } from '@/lib/types';

interface CaseStudyFigureProps {
  id: CaseStudyFigureId;
}

interface FigureDefinition {
  /** Short takeaway, shown under the drawing and read by everyone. */
  caption: string;
  /** Full text equivalent, carrying the same information as the drawing. */
  description: string;
  drawing: ReactNode;
}

const LADDER = [
  { label: 'Fragile', x: 62 },
  { label: 'En cours', x: 152 },
  { label: 'Solide', x: 244 },
  { label: 'Acquis', x: 324 },
];

const CYCLE_STEPS = [
  { y: 6, label: 'Un cours importé' },
  { y: 74, label: 'Ses concepts extraits' },
  { y: 160, label: 'Une question choisie' },
  { y: 228, label: 'La réponse de l’élève' },
  { y: 296, label: 'L’estimation révisée' },
];

/**
 * Downward arrow drawn in the gap between two stacked boxes.
 */
function CycleArrow({ y }: { y: number }) {
  return (
    <g className="fig-arrow">
      <line x1={204} y1={y} x2={204} y2={y + 14} />
      <path d={`M 198.5 ${y + 12} L 204 ${y + 20} L 209.5 ${y + 12} Z`} className="fig-arrowhead" />
    </g>
  );
}

const CYCLE: FigureDefinition = {
  caption:
    'Le cours ne passe qu’une fois par l’extraction. Les trois dernières étapes, elles, tournent en boucle.',
  description:
    'Enchaînement vertical de cinq étapes. Les deux premières n’ont lieu qu’une fois par cours : un cours importé, puis ses concepts extraits. Les trois suivantes forment une boucle : une question est choisie, l’élève répond, l’estimation de sa maîtrise est révisée. Une flèche de retour remonte de cette révision vers le choix de la question, et le tour reprend à chaque réponse.',
  drawing: (
    <svg viewBox="0 0 360 366" className="fig-svg" aria-hidden="true" focusable="false">
      <g className="fig-box">
        {CYCLE_STEPS.map((step) => (
          <rect key={step.label} x={56} y={step.y} width={296} height={44} rx={2} />
        ))}
      </g>
      <g className="fig-label">
        {CYCLE_STEPS.map((step) => (
          <text key={step.label} x={204} y={step.y + 27} textAnchor="middle">
            {step.label}
          </text>
        ))}
      </g>
      {[50, 118, 204, 272].map((y) => (
        <CycleArrow key={y} y={y} />
      ))}
      <g className="fig-loop">
        <path d="M 56 318 L 30 318 L 30 182 L 50 182" />
        <path d="M 48 176.5 L 56 182 L 48 187.5 Z" className="fig-loop-head" />
      </g>
      <text
        className="fig-note"
        x={18}
        y={250}
        textAnchor="middle"
        transform="rotate(-90 18 250)"
      >
        à chaque réponse
      </text>
    </svg>
  ),
};

const INTERVAL: FigureDefinition = {
  caption:
    'La largeur de la fourchette est la confiance du modèle. À centre égal, une fourchette étroite veut dire qu’il a tranché.',
  description:
    'Deux états du même concept, lus sur une même échelle horizontale graduée fragile, en cours, solide, acquis. Au début, la courbe est large et plate et la fourchette couvre presque toute l’échelle, de fragile jusqu’au-delà de solide : le modèle n’a pas encore de quoi trancher. Après plusieurs réponses, la même courbe est resserrée et pointue, et la fourchette ne couvre plus qu’une bande étroite entre en cours et solide. Le centre de l’estimation est laissé identique dans les deux états, pour isoler ce qui change : la largeur.',
  drawing: (
    <svg viewBox="0 0 360 270" className="fig-svg" aria-hidden="true" focusable="false">
      <g className="fig-guide">
        {LADDER.map((tick) => (
          <line key={tick.label} x1={tick.x} y1={30} x2={tick.x} y2={238} />
        ))}
      </g>

      <text className="fig-step" x={22} y={18}>
        Au début : fourchette large
      </text>
      <path className="fig-curve" d="M 62 76 C 112 76, 126 38, 192 38 C 258 38, 272 76, 322 76" />
      <g className="fig-span">
        <line x1={62} y1={90} x2={322} y2={90} />
        <line x1={62} y1={83} x2={62} y2={97} />
        <line x1={322} y1={83} x2={322} y2={97} />
      </g>
      <circle className="fig-point" cx={192} cy={90} r={4} />

      <text className="fig-step" x={22} y={132}>
        Après plusieurs réponses : resserrée
      </text>
      <path
        className="fig-curve"
        d="M 154 198 C 172 198, 174 146, 192 146 C 210 146, 212 198, 230 198"
      />
      <g className="fig-span">
        <line x1={154} y1={212} x2={230} y2={212} />
        <line x1={154} y1={205} x2={154} y2={219} />
        <line x1={230} y1={205} x2={230} y2={219} />
      </g>
      <circle className="fig-point" cx={192} cy={212} r={4} />

      <line className="fig-axis" x1={22} y1={238} x2={344} y2={238} />
      <g className="fig-tick">
        {LADDER.map((tick) => (
          <text key={tick.label} x={tick.x} y={258} textAnchor="middle">
            {tick.label}
          </text>
        ))}
      </g>
    </svg>
  ),
};

const TARGET: FigureDefinition = {
  caption:
    'La cible de réussite est posée d’abord, et la difficulté de la question s’en déduit. Jamais l’inverse.',
  description:
    'Une courbe décroissante relie la difficulté de la question servie, en abscisse de plus facile à plus difficile, à la chance de la réussir, en ordonnée de 100 % à 0 %. Une ligne horizontale marque la cible : environ 75 % de réussite. Le point où cette ligne coupe la courbe est redescendu en pointillés sur l’abscisse, et c’est lui qui donne la difficulté à servir. La lecture va donc de la cible de réussite vers la difficulté, et non de la difficulté vers la réussite. À gauche de ce point, les questions presque toujours réussies n’apprennent rien ; à droite, les questions trop dures font décrocher.',
  drawing: (
    <svg viewBox="0 0 360 266" className="fig-svg" aria-hidden="true" focusable="false">
      <text className="fig-step" x={12} y={16}>
        Chance de réussir
      </text>

      <g className="fig-tick">
        <text x={42} y={34} textAnchor="end">
          100 %
        </text>
        <text x={42} y={214} textAnchor="end">
          0 %
        </text>
      </g>

      <line className="fig-axis" x1={48} y1={210} x2={344} y2={210} />
      <line className="fig-axis" x1={48} y1={28} x2={48} y2={210} />

      <path className="fig-curve" d="M 48 36 C 130 40, 160 58, 200 120 C 240 182, 268 198, 340 203" />

      <line className="fig-target" x1={48} y1={75} x2={165} y2={75} />
      <line className="fig-drop" x1={165} y1={75} x2={165} y2={210} />
      <circle className="fig-point" cx={165} cy={75} r={4.5} />

      <text className="fig-aim" x={54} y={93}>
        Cible : 75 %
      </text>
      <text
        className="fig-aim"
        x={188}
        y={155}
        textAnchor="middle"
        transform="rotate(-90 188 155)"
      >
        difficulté servie
      </text>

      <g className="fig-note">
        <text x={54} y={120}>
          trop facile,
        </text>
        <text x={54} y={134}>
          rien à apprendre
        </text>
        <text x={338} y={142} textAnchor="end">
          trop dur,
        </text>
        <text x={338} y={156} textAnchor="end">
          on décroche
        </text>
      </g>

      <g className="fig-tick">
        <text x={48} y={230}>
          plus facile
        </text>
        <text x={340} y={230} textAnchor="end">
          plus difficile
        </text>
      </g>
      <text className="fig-step" x={196} y={254} textAnchor="middle">
        Difficulté de la question servie
      </text>
    </svg>
  ),
};

const FIGURES: Record<CaseStudyFigureId, FigureDefinition> = {
  'edukai-cycle': CYCLE,
  'edukai-interval': INTERVAL,
  'edukai-target': TARGET,
};

/**
 * One hand-drawn diagram closing a narrative section.
 */
export function CaseStudyFigure({ id }: CaseStudyFigureProps) {
  const figure = FIGURES[id];

  return (
    <figure className="case-figure">
      {figure.drawing}
      <p className="sr-only">{figure.description}</p>
      <figcaption>{figure.caption}</figcaption>
    </figure>
  );
}
