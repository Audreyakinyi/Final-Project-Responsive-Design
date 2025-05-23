const fs = require('fs-extra');
const path = require('path');

// Creating dist directory if it doesn't exist
fs.ensureDirSync('dist');

// Copy all necessary files to dist directory
fs.copySync('index.html', 'dist/index.html');
fs.copySync('css', 'dist/css');
fs.copySync('js', 'dist/js');
fs.copySync('images', 'dist/images');
