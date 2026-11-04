import { canvas, box, groups, tables, links, findTable, isKey, boxHeight } from '../../data/shelflife.js'

// Static ER diagram for the ShelfLife "Blueprint" world (desktop and tablet).
// Each box shows the table name and its key columns. Foreign-key lines run
// from the table holding the key to the table it references (arrowhead end).

const keyLabel = (col) => [col.pk && 'PK', col.fk && 'FK'].filter(Boolean).join(' ')

function boxRect(table) {
  const rows = table.columns.filter(isKey).length
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
function linkLines() {
  const pairCount = {}
  const pairIndex = {}
  for (const l of links) pairCount[`${l.from}>${l.to}`] = (pairCount[`${l.from}>${l.to}`] ?? 0) + 1

  return links.map((l) => {
    const key = `${l.from}>${l.to}`
    const i = (pairIndex[key] = (pairIndex[key] ?? -1) + 1)
    const offset = (i - (pairCount[key] - 1) / 2) * 8

    const a = boxRect(findTable(l.from))
    const b = boxRect(findTable(l.to))
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
    return { id: `${l.from}.${l.column}`, start, end }
  })
}

function TableBox({ table }) {
  const rect = boxRect(table)
  const keys = table.columns.filter(isKey)
  return (
    <g className="bp-table">
      <rect className="bp-box" x={rect.x} y={rect.y} width={rect.w} height={rect.h} rx="3" />
      <rect className="bp-box-head" x={rect.x} y={rect.y} width={rect.w} height={box.header} rx="3" />
      <text className="bp-table-name" x={rect.x + 10} y={rect.y + 16}>
        {table.id}
      </text>
      {keys.map((col, i) => {
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

export default function ShelfLifeDiagram() {
  const lines = linkLines()
  return (
    <div className="bp-diagram-wrap">
      <svg
        className="bp-diagram"
        viewBox={`0 0 ${canvas.width} ${canvas.height}`}
        role="img"
        aria-label={`ShelfLife relational schema: ${tables.length} tables in four groups (Catalog, Marketplace, Moderation, Analytics), connected by ${links.length} foreign keys.`}
      >
        <defs>
          <marker
            id="bp-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="9"
            markerHeight="9"
            markerUnits="userSpaceOnUse"
            orient="auto"
          >
            <path d="M 0 1 L 9 5 L 0 9" className="bp-arrow" />
          </marker>
        </defs>

        {groups.map((g) => (
          <g key={g.id}>
            <rect className="bp-room" x={g.x} y={g.y} width={g.w} height={g.h} rx="6" />
            <text className="bp-room-label" x={g.x + 12} y={g.y + 18}>
              {g.label}
            </text>
          </g>
        ))}

        {lines.map((l) => (
          <line
            key={l.id}
            className="bp-link"
            x1={l.start.x}
            y1={l.start.y}
            x2={l.end.x}
            y2={l.end.y}
            markerEnd="url(#bp-arrow)"
          />
        ))}

        {tables.map((t) => (
          <TableBox key={t.id} table={t} />
        ))}
      </svg>
    </div>
  )
}
