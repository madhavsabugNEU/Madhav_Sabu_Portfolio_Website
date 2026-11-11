import { groups, tables, links, titleBlock } from '../../data/shelflife.js'

// Phone version of the ShelfLife diagram: the four rooms as stacked cards.
// Tapping a table shows its columns and what it links to, in plain text.
// Shares the open table and role highlighting with the desktop diagram.

const keyLabel = (col) =>
  [col.pk && 'PK', col.fk && 'FK', col.unique && 'U', col.check && 'CHK'].filter(Boolean).join(' ')

const unique = (ids) => [...new Set(ids)]
const linksTo = (id) => unique(links.filter((l) => l.from === id).map((l) => l.to))
const linkedFrom = (id) => unique(links.filter((l) => l.to === id).map((l) => l.from))

export default function ShelfLifeRoomCards({ expandedId, onToggle, tableState }) {
  return (
    <div className="bp-rooms">
      {groups.map((g) => (
        <section key={g.id} className="bp-room-card" aria-label={`${g.label} tables`}>
          <h3 className="bp-room-card-label">{g.label}</h3>
          <ul>
            {tables
              .filter((t) => t.group === g.id)
              .map((t) => {
                const open = t.id === expandedId
                const to = linksTo(t.id)
                const from = linkedFrom(t.id)
                return (
                  <li key={t.id} className={`bp-room-table ${tableState(t.id)}`}>
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={`bp-card-${t.id}`}
                      onClick={() => onToggle(t.id)}
                    >
                      <span className="bp-room-table-name">{t.id}</span>
                      <span className="bp-room-table-count">
                        {t.columns.length} columns {open ? '−' : '+'}
                      </span>
                    </button>
                    {open && (
                      <div id={`bp-card-${t.id}`} className="bp-room-table-detail">
                        <ul className="bp-room-cols">
                          {t.columns.map((c) => (
                            <li key={c.name}>
                              <span>{c.name}</span>
                              <span className="bp-room-key">{keyLabel(c)}</span>
                            </li>
                          ))}
                        </ul>
                        {to.length > 0 && <p>→ links to {to.join(', ')}</p>}
                        {from.length > 0 && <p>← linked from {from.join(', ')}</p>}
                        {t.note && <p>{t.note}</p>}
                      </div>
                    )}
                  </li>
                )
              })}
          </ul>
        </section>
      ))}

      <div className="bp-room-title-block">
        {titleBlock.lines.map((line, i) => (
          <p key={line} className={i === 0 ? 'is-title' : undefined}>
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}
