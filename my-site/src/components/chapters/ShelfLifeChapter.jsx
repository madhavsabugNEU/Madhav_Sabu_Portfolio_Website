import ShelfLifeDiagram from './ShelfLifeDiagram.jsx'
import ShelfLifeSheet from './ShelfLifeSheet.jsx'

// World theme: "Blueprint". Schema data comes from src/data/shelflife.js.
export default function ShelfLifeChapter() {
  return (
    <section className="blueprint" aria-labelledby="shelflife-title">
      <div className="blueprint-inner">
        <header className="blueprint-header">
          <p className="blueprint-label">blueprint</p>
          <div className="blueprint-title-row">
            <h1 id="shelflife-title">ShelfLife</h1>
            <span className="bp-pill">Team of 5</span>
          </div>
          <p className="blueprint-meta">
            CS 3200 Database Design course project · Jan to Apr 2026 · MySQL, Flask,
            Streamlit, Docker, Python
          </p>
          <p className="blueprint-intro">
            My team of five built ShelfLife, a course materials marketplace for
            Northeastern students where every listing is tied to a course. I designed
            the 18-table relational schema underneath it.
          </p>
        </header>
        <ShelfLifeDiagram />
        <ShelfLifeSheet />
      </div>
    </section>
  )
}
