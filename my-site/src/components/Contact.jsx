import ExternalLink from './ExternalLink.jsx'
import { contact } from '../data/links.js'

// Home page Contact section: a navy band styled like the next-stop sign.
export default function Contact() {
  return (
    <section id="contact" className="section home-section" aria-labelledby="contact-heading">
      <div className="contact-band">
        <span className="next-stop-label">End of the line</span>
        <h2 id="contact-heading">Contact</h2>
        <p>
          I'm looking for Spring 2027 co-op roles (January to June 2027) in data
          science, analytics, and related fields. The best way to reach me is by
          email.
        </p>
        <div className="contact-links">
          <a className="btn contact-email" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          <ExternalLink className="btn contact-outline" href={contact.linkedin}>
            LinkedIn
          </ExternalLink>
          <ExternalLink className="btn contact-outline" href={contact.github}>
            GitHub
          </ExternalLink>
        </div>
      </div>
    </section>
  )
}
