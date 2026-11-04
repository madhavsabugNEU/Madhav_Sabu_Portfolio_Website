import ExternalLink from './ExternalLink.jsx'
import { resumes } from '../data/links.js'

// Home page Resume section: one card per version, each with its line's badge.
export default function Resume() {
  return (
    <section id="resume" className="section home-section" aria-labelledby="resume-heading">
      <div className="stations-head">
        <h2 id="resume-heading">Resume</h2>
      </div>
      <p className="resume-intro">Choose the version that best matches the role.</p>
      <ul className="resume-grid">
        {resumes.map((r) => (
          <li key={r.id} className="resume-card">
            <span className="line-badge resume-badge" aria-hidden="true">
              {r.line}
            </span>
            <div className="resume-body">
              <h3 className="resume-name">{r.label}</h3>
              <p className="resume-best">Best for: {r.bestFor}</p>
              <ExternalLink className="btn btn-filled" href={r.href}>
                Download PDF
              </ExternalLink>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
