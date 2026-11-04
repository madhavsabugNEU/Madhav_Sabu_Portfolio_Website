import { Link } from 'react-router-dom'

const skillGroups = [
  { label: 'Languages', items: ['Python', 'SQL'] },
  {
    label: 'Libraries and tools',
    items: [
      'pandas',
      'NumPy',
      'scikit-learn',
      'Matplotlib',
      'Streamlit',
      'Jupyter Notebook',
      'Git/GitHub',
      'Excel',
      'MySQL',
      'Figma',
      'DaVinci Resolve',
    ],
  },
  {
    label: 'Skills',
    items: [
      'machine learning',
      'data analysis',
      'data cleaning',
      'data validation',
      'data visualization',
      'database design',
      'REST APIs',
      'UI/UX design',
    ],
  },
]

const activities = [
  'Smith and Kennedy Hall Vice President',
  'Kappa Theta Pi (Professional Technology Fraternity), Pledge Engagement Lead',
  'Resident Student Association',
  'Badminton team captain (UWCSEA)',
  'Special Olympics technical officer (coordinated logistics and coached badminton athletes)',
]

// Home page About section: intro beside a photo, then a grid of cards.
export default function About() {
  return (
    <section id="about" className="section home-section" aria-labelledby="about-heading">
      <div className="stations-head">
        <h2 id="about-heading">About</h2>
      </div>

      <div className="about-intro">
        <p>
          I'm a second-year student at Northeastern University in Boston. I grew
          up in India, Dubai, and Singapore, where
          I attended UWC South East Asia and completed the IB Diploma.
        </p>
        <div className="about-photo">[TODO: photo]</div>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3 className="about-label">Education</h3>
          <p>
            <strong>Northeastern University</strong>, Boston, MA · Expected May 2029
          </p>
          <p>
            B.S. in Data Science &amp; Business, Concentration in Marketing
            Analytics, Minor in Biology
          </p>
          <p>GPA 3.74/4.0 · Dean's List (Fall 2025, Spring 2026)</p>
          <Link to="/line/e" className="about-link">
            See all coursework on the E line →
          </Link>
        </div>

        <div className="about-card">
          <h3 className="about-label">Skills</h3>
          {skillGroups.map((group) => (
            <div key={group.label} className="skill-group">
              <p className="skill-group-name">{group.label}</p>
              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="about-card">
          <h3 className="about-label">Leadership and activities</h3>
          <ul className="about-list">
            {activities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="about-card">
          <h3 className="about-label">Outside of class</h3>
          <p>
            Outside of class, I enjoy badminton, football (soccer) analytics,
            biking, and exploring new music.
          </p>
          <h3 className="about-label">Earlier project</h3>
          <p>
            <strong>Sentiment Analysis Classifier</strong> (Jun to Jul 2023): With
            a team of four, I built a classifier in Python, pandas, and Jupyter
            that labeled IMDB movie reviews as positive or negative.
          </p>
        </div>
      </div>
    </section>
  )
}
