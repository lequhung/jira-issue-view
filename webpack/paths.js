const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.resolve(ROOT, 'src');
const ENTRY_POINT = path.resolve(SRC, 'index.tsx');
const BUILD = path.resolve(ROOT, 'build');
const PUBLIC = path.resolve(ROOT, 'public');
const PUBLIC_ENTRY_POINT_HTML = path.resolve(PUBLIC, 'index.html');

module.exports = {
  ROOT,
  SRC,
  ENTRY_POINT,
  BUILD,
  PUBLIC,
  PUBLIC_ENTRY_POINT_HTML
};
