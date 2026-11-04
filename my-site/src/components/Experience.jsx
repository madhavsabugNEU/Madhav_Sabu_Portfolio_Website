const roles = [
  {
    id: 'electric-racing',
    title: 'Software Product Team Member',
    meta: 'Northeastern Electric Racing · Jan 2026 to present · Boston, MA',
    current: true,
    text:
      "I design high-fidelity Figma mockups for features of the team's main data dashboard, gather user feedback to iterate on the designs, and present concepts to club leadership for board approval.",
  },
  {
    id: 'knack',
    title: 'Peer Tutor',
    meta: 'Knack · Feb to Jun 2026 · Boston, MA',
    text:
      'I tutored students in financial accounting (ACCT 1201) and Excel-based calculations, and earned a 5-star rating across student reviews.',
  },
  {
    id: 'creative-factory',
    title: 'Product & Client Management Intern',
    meta: 'My Creative Factory · Jun to Jul 2024 · Singapore',
    text:
      'I turned requirements from four clients into customized deliverables, conducted competitive analysis for internal reports, and produced and edited client marketing videos in DaVinci Resolve.',
  },
]

// Home page Experience section: one stop per role on a vertical green line.
export default function Experience() {
  return (
    <section id="experience" className="section home-section" aria-labelledby="experience-heading">
      <div className="stations-head">
        <h2 id="experience-heading">Experience</h2>
      </div>
      <ol className="line-stops experience-stops">
        {roles.map((role) => (
          <li key={role.id} id={role.id} className={role.current ? 'is-current' : undefined}>
            <h3 className="stop-name">{role.title}</h3>
            <p className="experience-meta">{role.meta}</p>
            <p className="experience-text">{role.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
