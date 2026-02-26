#!/usr/bin/env node
const pkg = require('../package.json');
if (pkg.publisher !== 'joelhill') {
  console.error('Error: publisher must be joelhill');
  process.exit(1);
}
if (!/^\d+\.\d+\.\d+$/.test(pkg.version)) {
  console.error('Error: invalid semver version');
  process.exit(1);
}
console.log('Manifest OK');
process.exit(0);
