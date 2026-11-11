import { useEffect, useState } from 'react'
import ShelfLifeRoomCards from './ShelfLifeRoomCards.jsx'
import {
  canvas,
  box,
  groups,
  tables,
  links,
  roles,
  annotations,
  titleBlock,
  findTable,
  isKey,
  boxHeight,
  linkedTables,
} from '../../data/shelflife.js'

// ER diagram for the ShelfLife "Blueprint" world (desktop and tablet).
// Each box shows the table name and its key columns; clicking a box expands it
// to every column and highlights the tables it links to. Role buttons highlight
// the tables each role uses. Foreign-key lines run from the table holding the
// key to the table it references (arrowhead end) and draw in one by one on load.

const LINE_STAGGER_MS = 70
const LINE_DRAW_MS = 450
const ARROW = 8

const keyLabel = (col) =>
  [col.pk && 'PK', col.fk && 'FK', col.unique && 'U', col.check && 'CHK'].filter(Boolean).join(' ')

function boxRect(table, expanded) {
  const rows = expanded ? table.columns.length : table.columns.filter(isKey).length
  return { x: table.x, y: table.y, w: box.width, h: boxHeight(rows) }
}

// Where the line from a box's center toward point p crosses the box's edge.
function edgePoint(rect, cx, cy, px, py) {
  const dx = px - cx
  const dy = py - cy
  const t = Math.min(
    dx === 0 ? Infinity : rect.w / 2 / Math.abs(dx),
    dy === 0 ? Infinity : rect.h / 2 / Math.abs(dy),
  )
  return { x: cx + dx * t, y: cy + dy * t }
}

// One straight line per foreign key. Two keys between the same pair of
// tables (like REVIEW's reviewer_id and seller_id) are drawn side by side.
function linkLines(expandedId) {
  const pairCount = {}
  const pairIndex = {}
  for (const l of links) pairCount[`${l.from}>${l.to}`] = (pairCount[`${l.from}>${l.to}`] ?? 0) + 1

  return links.map((l) => {
    const key = `${l.from}>${l.to}`
    const i = (pairIndex[key] = (pairIndex[key] ?? -1) + 1)
    const offset = (i - (pairCount[key] - 1) / 2) * 8

    const a = boxRect(findTable(l.from), l.from === expandedId)
    const b = boxRect(findTable(l.to), l.to === expandedId)
    let ax = a.x + a.w / 2
    let ay = a.y + a.h / 2
    let bx = b.x + b.w / 2
    let by = b.y + b.h / 2

    // Shift both ends sideways (perpendicular to the line) by the offset.
    const len = Math.hypot(bx - ax, by - ay)
    const nx = (-(by - ay) / len) * offset
    const ny = ((bx - ax) / len) * offset
    ax += nx
    ay += ny
    bx += nx
    by += ny

    const start = edgePoint(a, ax, ay, bx, by)
    const end = edgePoint(b, bx, by, ax, ay)

    // Arrowhead at the referenced end, pointing into the box.
    const angle = Math.atan2(end.y - start.y, end.x - start.x)
    const wing = (side) => {
      const t = angle + side * 0.45
      return `${end.x - ARROW * Math.cos(t)} ${end.y - ARROW * Math.sin(t)}`
    }
    const arrow = `M ${wing(1)} L ${end.x} ${end.y} L ${wing(-1)}`

    return { ...l, id: `${l.from}.${l.column}`, start, end, arrow }
  })
}

// `overlay` is a copy of the open table drawn last so it sits on top of its
// neighbors; the original stays in place so keyboard focus isn't lost.
function TableBox({ table, expanded, state, onToggle, overlay = false }) {
  const rect = boxRect(table, expanded)
  const cols = expanded ? table.columns : table.columns.filter(isKey)

  function onKeyDown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onToggle(table.id)
    }
  }

  return (
    <g
      className={`bp-table ${state}`}
      {...(overlay
        ? { 'aria-hidden': true }
        : {
            role: 'button',
            tabIndex: 0,
            'aria-expanded': expanded,
            'aria-label': `${table.id} table, ${table.columns.length} columns`,
            onKeyDown,
          })}
      onClick={() => onToggle(table.id)}
    >
      <rect className="bp-box" x={rect.x} y={rect.y} width={rect.w} height={rect.h} rx="3" />
      <rect className="bp-box-head" x={rect.x} y={rect.y} width={rect.w} height={box.header} rx="3" />
      <text className="bp-table-name" x={rect.x + 10} y={rect.y + 16}>
        {table.id}
      </text>
      <text className="bp-toggle" x={rect.x + rect.w - 10} y={rect.y + 16} textAnchor="end" aria-hidden="true">
        {expanded ? '−' : '+'}
      </text>
      {cols.map((col, i) => {
        const y = rect.y + box.header + box.row * (i + 1) - 3
        return (
          <g key={col.name}>
            <text className="bp-col" x={rect.x + 10} y={y}>
              {col.name}
            </text>
            <text className="bp-key" x={rect.x + rect.w - 10} y={y} textAnchor="end">
              {keyLabel(col)}
            </text>
          </g>
        )
      })}
      {table.note && (
        <text className="bp-note" x={rect.x} y={rect.y + rect.h + 16}>
          {table.note}
        </text>
      )}
    </g>
  )
}

// Small callout pointing at a real constraint, with a thin leader line.
function Annotation({ note }) {
  const [x1, y1, x2, y2] = note.leader
  return (
    <g className="bp-annotation">
      <line className="bp-leader" x1={x1} y1={y1} x2={x2} y2={y2} />
      <text x={note.x} y={note.y}>
        {note.lines.map((line, i) => (
          <tspan key={line} x={note.x} dy={i === 0 ? 0 : 12}>
            {line}
          </tspan>
        ))}
      </text>
    </g>
  )
}

// Bordered title block in the bottom right corner, one row per line.
const TITLE_ROW = 20

function TitleBlock() {
  const { x, y, w, lines } = titleBlock
  return (
    <g className="bp-title-block">
      <rect x={x} y={y} width={w} height={lines.length * TITLE_ROW} />
      {lines.map((line, i) => (
        <g key={line}>
          {i > 0 && <line x1={x} y1={y + i * TITLE_ROW} x2={x + w} y2={y + i * TITLE_ROW} />}
          <text className={i === 0 ? 'is-title' : undefined} x={x + 10} y={y + i * TITLE_ROW + 14}>
            {line}
          </text>
        </g>
      ))}
    </g>
  )
}

export default function ShelfLifeDiagram() {
  const [expandedId, setExpandedId] = useState(null)
  const [roleId, setRoleId] = useState('all')

  const role = roles.find((r) => r.id === roleId)
  const linked = expandedId ? linkedTables(expandedId) : []

  // Escape collapses the open table.
  useEffect(() => {
    if (!expandedId) return
    const onKey = (e) => e.key === 'Escape' && setExpandedId(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [expandedId])

  const toggle = (id) => setExpandedId((cur) => (cur === id ? null : id))

  // How each table looks: highlighted for the chosen role (or dimmed if not
  // on it), and open / linked when a table is expanded.
  function tableState(id) {
    const classes = []
    if (role) classes.push(role.tables.includes(id) ? 'is-role' : 'is-dim')
    if (id === expandedId) classes.push('is-open')
    else if (linked.includes(id)) classes.push('is-linked')
    return classes.join(' ')
  }

  function lineState(l) {
    const classes = []
    if (role && !(role.tables.includes(l.from) && role.tables.includes(l.to))) classes.push('is-dim')
    if (expandedId && (l.from === expandedId || l.to === expandedId)) classes.push('is-linked')
    return classes.join(' ')
  }

  const lines = linkLines(expandedId)

  return (
    <div className="bp-diagram-block">
      <div className="bp-controls">
        <div className="bp-roles" role="group" aria-label="Highlight tables by role">
          {[{ id: 'all', label: 'All' }, ...roles].map((r) => (
            <button
              key={r.id}
              type="button"
              className="bp-role"
              aria-pressed={roleId === r.id}
              onClick={() => setRoleId(r.id)}
            >
              {r.label}
            </button>
          ))}
        </div>
        <p className="bp-hint">
          <span className="bp-hint-desktop">click</span>
          <span className="bp-hint-phone">tap</span> a table to see all its columns
        </p>
      </div>

      <div className="bp-diagram-wrap">
        <svg
          className="bp-diagram"
          viewBox={`0 0 ${canvas.width} ${canvas.height}`}
          aria-label={`ShelfLife relational schema: ${tables.length} tables in four groups (Catalog, Marketplace, Moderation, Analytics), connected by ${links.length} foreign keys.`}
        >
          {groups.map((g) => (
            <g key={g.id} aria-hidden="true">
              <rect className="bp-room" x={g.x} y={g.y} width={g.w} height={g.h} rx="6" />
              <text className="bp-room-label" x={g.x + 12} y={g.y + 18}>
                {g.label}
              </text>
            </g>
          ))}

          <g aria-hidden="true">
            {lines.map((l, i) => {
              const style = { '--draw-delay': `${i * LINE_STAGGER_MS}ms`, '--draw-ms': `${LINE_DRAW_MS}ms` }
              return (
                <g key={l.id} className={`bp-link-group ${lineState(l)}`} style={style}>
                  <line
                    className="bp-link"
                    pathLength="1"
                    x1={l.start.x}
                    y1={l.start.y}
                    x2={l.end.x}
                    y2={l.end.y}
                  />
                  <path className="bp-arrow" d={l.arrow} />
                </g>
              )
            })}
          </g>

          <g aria-hidden="true">
            {annotations.map((a) => (
              <Annotation key={a.table} note={a} />
            ))}
          </g>

          {tables.map((t) => (
            <TableBox
              key={t.id}
              table={t}
              expanded={t.id === expandedId}
              state={tableState(t.id)}
              onToggle={toggle}
            />
          ))}
          {expandedId && (
            <TableBox
              table={findTable(expandedId)}
              expanded
              state={tableState(expandedId)}
              onToggle={toggle}
              overlay
            />
          )}

          <TitleBlock />
        </svg>
      </div>

      <ShelfLifeRoomCards expandedId={expandedId} onToggle={toggle} tableState={tableState} />
    </div>
  )
}
