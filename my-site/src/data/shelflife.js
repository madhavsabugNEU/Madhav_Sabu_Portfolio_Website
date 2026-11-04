// Everything the ShelfLife "Blueprint" world shows. The diagram, phone cards,
// and station card preview all read from here.
// Schema source: database-files/01_schema.sql in the ShelfLife repo.

export const shelflifeLinks = {
  github: 'https://github.com/madhavsabugNEU/26S-ShelfLife-GroupProject',
  video: 'https://www.youtube-nocookie.com/embed/jpNh5U-58YQ',
}

// Diagram canvas and table box sizes, in SVG units.
export const canvas = { width: 1200, height: 660 }
export const box = { width: 160, header: 24, row: 16, padding: 8 }

// The four "rooms" (dashed outlines), with their position on the canvas.
export const groups = [
  { id: 'catalog', label: 'Catalog', x: 20, y: 30, w: 200, h: 610 },
  { id: 'marketplace', label: 'Marketplace', x: 250, y: 30, w: 600, h: 610 },
  { id: 'moderation', label: 'Moderation', x: 880, y: 30, w: 300, h: 300 },
  { id: 'analytics', label: 'Analytics', x: 880, y: 360, w: 300, h: 280 },
]

// Each table: its group, top-left position, and columns.
// Column flags: pk = primary key, fk = referenced table, unique, check.
// `unique` on the table lists composite UNIQUE constraints.
export const tables = [
  // Catalog
  {
    id: 'DEPARTMENT',
    group: 'catalog',
    x: 40,
    y: 70,
    columns: [{ name: 'dept_id', pk: true }, { name: 'dept_name' }, { name: 'college' }],
  },
  {
    id: 'COURSE',
    group: 'catalog',
    x: 40,
    y: 180,
    columns: [
      { name: 'course_id', pk: true },
      { name: 'dept_id', fk: 'DEPARTMENT' },
      { name: 'course_number' },
      { name: 'course_name' },
      { name: 'semester' },
      { name: 'is_active' },
    ],
  },
  {
    id: 'COURSE_MATERIAL',
    group: 'catalog',
    x: 40,
    y: 300,
    columns: [
      { name: 'course_material_id', pk: true },
      { name: 'course_id', fk: 'COURSE' },
      { name: 'item_id', fk: 'ITEM' },
      { name: 'required' },
    ],
    unique: [['course_id', 'item_id']],
  },
  {
    id: 'ITEM',
    group: 'catalog',
    x: 40,
    y: 440,
    columns: [
      { name: 'item_id', pk: true },
      { name: 'title' },
      { name: 'author' },
      { name: 'isbn', unique: true },
      { name: 'category' },
    ],
  },
  {
    id: 'PRICE_HISTORY',
    group: 'catalog',
    x: 40,
    y: 550,
    columns: [
      { name: 'history_id', pk: true },
      { name: 'item_id', fk: 'ITEM' },
      { name: 'semester' },
      { name: 'avg_price' },
      { name: 'low_price' },
      { name: 'high_price' },
      { name: 'total_sales' },
    ],
  },

  // Marketplace
  {
    id: 'USER',
    group: 'marketplace',
    x: 470,
    y: 80,
    columns: [
      { name: 'user_id', pk: true },
      { name: 'name' },
      { name: 'email', unique: true },
      { name: 'is_active' },
      { name: 'avg_rating' },
      { name: 'created_at' },
    ],
  },
  {
    id: 'LISTING',
    group: 'marketplace',
    x: 470,
    y: 330,
    columns: [
      { name: 'listing_id', pk: true },
      { name: 'user_id', fk: 'USER' },
      { name: 'item_id', fk: 'ITEM' },
      { name: 'course_id', fk: 'COURSE' },
      { name: 'price' },
      { name: 'condition_desc' },
      { name: 'status' },
      { name: 'created_at' },
      { name: 'search_count' },
    ],
  },
  {
    id: 'TRANSACTION',
    group: 'marketplace',
    x: 670,
    y: 180,
    columns: [
      { name: 'transaction_id', pk: true },
      { name: 'listing_id', fk: 'LISTING', unique: true },
      { name: 'buyer_id', fk: 'USER' },
      { name: 'sale_price' },
      { name: 'sold_at' },
      { name: 'days_to_sale' },
    ],
  },
  {
    id: 'REVIEW',
    group: 'marketplace',
    x: 670,
    y: 472,
    columns: [
      { name: 'review_id', pk: true },
      { name: 'listing_id', fk: 'LISTING' },
      { name: 'reviewer_id', fk: 'USER' },
      { name: 'seller_id', fk: 'USER' },
      { name: 'rating', check: '1–5' },
      { name: 'comment' },
      { name: 'created_at' },
    ],
  },
  {
    id: 'WISHLIST',
    group: 'marketplace',
    x: 270,
    y: 520,
    columns: [
      { name: 'wishlist_id', pk: true },
      { name: 'user_id', fk: 'USER' },
      { name: 'listing_id', fk: 'LISTING' },
      { name: 'saved_at' },
    ],
    unique: [['user_id', 'listing_id']],
  },
  {
    id: 'BUNDLE',
    group: 'marketplace',
    x: 270,
    y: 72,
    columns: [
      { name: 'bundle_id', pk: true },
      { name: 'user_id', fk: 'USER' },
      { name: 'total_price' },
      { name: 'created_at' },
    ],
  },
  {
    id: 'BUNDLE_LISTING',
    group: 'marketplace',
    x: 270,
    y: 188,
    columns: [
      { name: 'bundle_id', pk: true, fk: 'BUNDLE' },
      { name: 'listing_id', pk: true, fk: 'LISTING' },
    ],
  },

  // Moderation
  {
    id: 'ADMIN',
    group: 'moderation',
    x: 945,
    y: 70,
    columns: [{ name: 'admin_id', pk: true }, { name: 'name' }, { name: 'email', unique: true }],
  },
  {
    id: 'ADMIN_FLAG',
    group: 'moderation',
    x: 945,
    y: 150,
    columns: [
      { name: 'admin_id', pk: true, fk: 'ADMIN' },
      { name: 'flag_id', pk: true, fk: 'FLAG' },
    ],
  },
  {
    id: 'FLAG',
    group: 'moderation',
    x: 945,
    y: 246,
    columns: [
      { name: 'flag_id', pk: true },
      { name: 'listing_id', fk: 'LISTING' },
      { name: 'reason' },
      { name: 'flag_status' },
      { name: 'flagged_at' },
    ],
  },

  // Analytics
  {
    id: 'ANALYST',
    group: 'analytics',
    x: 945,
    y: 395,
    columns: [{ name: 'analyst_id', pk: true }, { name: 'name' }, { name: 'email', unique: true }],
  },
  {
    id: 'REPORT',
    group: 'analytics',
    x: 945,
    y: 470,
    columns: [
      { name: 'report_id', pk: true },
      { name: 'analyst_id', fk: 'ANALYST' },
      { name: 'filter_params' },
      { name: 'export_format' },
      { name: 'created_at' },
    ],
  },
  {
    id: 'PLATFORM_METRIC',
    group: 'analytics',
    x: 945,
    y: 560,
    note: 'snapshot table · no links',
    columns: [
      { name: 'metric_id', pk: true },
      { name: 'active_users' },
      { name: 'total_listings' },
      { name: 'total_transactions' },
      { name: 'recorded_at' },
    ],
  },
]

// Small callouts pointing at real constraints in the schema.
export const annotations = [
  { table: 'TRANSACTION', text: 'one sale per listing' },
  { table: 'REVIEW', text: 'rating 1–5' },
  { table: 'COURSE_MATERIAL', text: 'an item links to a course only once' },
  { table: 'WISHLIST', text: 'no duplicate saves' },
  { table: 'BUNDLE_LISTING', text: 'junction table · composite key' },
  { table: 'ADMIN_FLAG', text: 'junction table · composite key' },
]

// Role buttons: which tables each role touches. "All" is the default.
export const roles = [
  { id: 'buyer', label: 'Buyer', tables: ['COURSE', 'LISTING', 'WISHLIST', 'TRANSACTION', 'REVIEW'] },
  { id: 'seller', label: 'Seller', tables: ['LISTING', 'ITEM', 'PRICE_HISTORY', 'BUNDLE'] },
  {
    id: 'analyst',
    label: 'Data analyst',
    tables: ['REPORT', 'PLATFORM_METRIC', 'TRANSACTION', 'PRICE_HISTORY'],
  },
  { id: 'admin', label: 'Admin', tables: ['FLAG', 'ADMIN_FLAG', 'COURSE', 'DEPARTMENT'] },
]

// My contributions, as red-pencil notes. `target` is what the marker points to.
export const revisionNotes = [
  {
    target: 'titleBlock',
    text: 'I designed the relational schema, including the linked tables and foreign keys.',
  },
  {
    target: 'PRICE_HISTORY',
    text: 'I found and fixed data integrity issues, such as missing price-history records.',
  },
  { target: 'diagram', text: 'I generated the mock data the team used for testing.' },
  { target: 'analytics', text: 'I helped the team debug the Streamlit analytics dashboard.' },
]

// ---------- Helpers ----------

export const findTable = (id) => tables.find((t) => t.id === id)

export const isKey = (col) => Boolean(col.pk || col.fk)

// Box height for a table showing `rows` columns.
export const boxHeight = (rows) => box.header + rows * box.row + box.padding

// Every foreign key as a link: from the table that holds it to the one it references.
export const links = tables.flatMap((t) =>
  t.columns.filter((c) => c.fk).map((c) => ({ from: t.id, to: c.fk, column: c.name })),
)

// The tables a table links to or is linked from.
export function linkedTables(id) {
  const out = new Set()
  for (const l of links) {
    if (l.from === id) out.add(l.to)
    if (l.to === id) out.add(l.from)
  }
  return [...out]
}
