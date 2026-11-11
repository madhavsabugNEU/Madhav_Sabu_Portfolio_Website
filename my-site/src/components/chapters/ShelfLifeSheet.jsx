import ExternalLink from '../ExternalLink.jsx'
import { contributions, shelflifeLinks } from '../../data/shelflife.js'

// The rest of the blueprint sheet below the diagram: my contributions box,
// the demo video as "Detail A", the repo link, and the end of sheet.

// A measurement-style divider: a thin line with end ticks and a centered label.
function DimensionLine({ id, children }) {
  return (
    <h2 id={id} className="bp-dim">
      <span className="bp-dim-line" aria-hidden="true" />
      <span className="bp-dim-label">{children}</span>
      <span className="bp-dim-line" aria-hidden="true" />
    </h2>
  )
}

export default function ShelfLifeSheet() {
  return (
    <div className="bp-sheet">
      <section className="bp-sheet-section" aria-labelledby="bp-notes-heading">
        <DimensionLine id="bp-notes-heading">sheet notes · my contributions</DimensionLine>
        <ul className="bp-contributions">
          {contributions.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      </section>

      <section className="bp-sheet-section" aria-labelledby="bp-detail-heading">
        <DimensionLine id="bp-detail-heading">detail A · walkthrough</DimensionLine>
        <figure className="bp-detail">
          <div className="bp-detail-frame">
            <span className="bp-corner is-tl" aria-hidden="true" />
            <span className="bp-corner is-tr" aria-hidden="true" />
            <span className="bp-corner is-bl" aria-hidden="true" />
            <span className="bp-corner is-br" aria-hidden="true" />
            <div className="video">
              <iframe
                src={shelflifeLinks.video}
                title="ShelfLife demo video"
                loading="lazy"
                allow="encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <figcaption className="bp-detail-caption">Team demo of the finished app.</figcaption>
        </figure>

        <p className="bp-links">
          <ExternalLink className="bp-repo" href={shelflifeLinks.github}>
            View the repo on GitHub →
          </ExternalLink>
        </p>
      </section>

      <p className="bp-end">end of sheet</p>
    </div>
  )
}
