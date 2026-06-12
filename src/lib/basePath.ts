// In dev (NODE_ENV=development): no prefix needed — Next.js serves public files from root
// In prod (NODE_ENV=production): GitHub Pages serves from /portfolio/
export const BASE = process.env.NODE_ENV === "production" ? "/portfolio" : "";
