/**
 * Copies browser-ready liquidGL IIFE builds into public/vendor.
 * The npm package ends with `export default`, which breaks classic <script> tags.
 * We strip that export so demos' load pattern works.
 */
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'vendor');
mkdirSync(outDir, { recursive: true });

const pkgMain = join(root, 'node_modules', 'liquid-gl', 'liquidGL.js');
const pkgHelper = join(root, 'node_modules', 'liquid-gl', 'liquidGL-helper.js');

if (!existsSync(pkgMain) || !existsSync(pkgHelper)) {
  console.warn('vendor-liquidgl: liquid-gl not installed; skipping');
  process.exit(0);
}

let main = readFileSync(pkgMain, 'utf8');
main = main.replace(/\nexport default liquidGL;\s*$/, '\n');
// npm wrapper is `const liquidGL = (()=>{...; return window.liquidGL;})();`
// After stripping export, ensure window assignment remains (it does inside IIFE).
writeFileSync(join(outDir, 'liquidGL.js'), main);

copyFileSync(pkgHelper, join(outDir, 'liquidGL-helper.js'));
console.log('vendor-liquidgl: wrote public/vendor/liquidGL.js + liquidGL-helper.js');
