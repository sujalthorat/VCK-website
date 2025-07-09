// fix-vite-permission.js
const fs = require('fs');
const path = require('path');

const vitePath = path.join(__dirname, 'node_modules', '.bin', 'vite');

fs.chmod(vitePath, 0o755, (err) => {
  if (err) {
    console.log('[postinstall] Skipping chmod: not needed on this OS or failed.');
  } else {
    console.log('[postinstall] Fixed Vite binary permissions.');
  }
});

