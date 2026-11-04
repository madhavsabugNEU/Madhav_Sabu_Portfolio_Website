import ExternalLink from '../ExternalLink.jsx'
import ShelfLifeDiagram from './ShelfLifeDiagram.jsx'
import { shelflifeLinks } from '../../data/shelflife.js'

// World theme: "Blueprint". Schema data comes from src/data/shelflife.js.
export default function ShelfLifeChapter() {
  return (
    <>
      <section className="blueprint" aria-labelledby="shelflife-title">
        <div className="blueprint-inner">
          {/* Full header comes in step 8c. */}
          <p className="blueprint-label">blueprint</p>
          <h1 id="shelflife-title">ShelfLife</h1>
          <ShelfLifeDiagram />
        </div>
      </section>

      {/* Plain content until step 8c restyles it inside the blueprint. */}
      <section id="shelflife" className="section">
        <p className="meta">
          Team project (five people) · CS 3200 Database Design course project · Jan to Apr 2026
        </p>
        <p className="meta">MySQL, Flask, Streamlit, Docker, Python</p>
        <p>
          ShelfLife is a course materials marketplace for Northeastern students,
          with separate roles for buyers, sellers, data analysts, and admins. My
          team of five built it for CS 3200 (Database Design).
        </p>
        <h2>My contributions</h2>
        <ul>
          <li>I designed the relational schema, including the linked tables and foreign keys.</li>
          <li>I generated mock data for testing.</li>
          <li>
            I found and fixed data integrity issues, such as missing
            price-history records.
          </li>
          <li>I helped debug the Streamlit analytics dashboard.</li>
        </ul>

        <div className="video">
          <iframe
            src={shelflifeLinks.video}
            title="ShelfLife demo video"
            loading="lazy"
            allow="encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>

        <p>
          <ExternalLink href={shelflifeLinks.github}>View on GitHub</ExternalLink>
        </p>
      </section>
    </>
  )
}
