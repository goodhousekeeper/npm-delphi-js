const gentlyCopy = require('gently-copy');
const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

const fileList = ['src', 'index.js'];
const delphiFolder = path.join(process.env.INIT_CWD, 'delphi-js');


fse.remove(delphiFolder, err => {
    console.error(err)
});

fs.mkdirSync(delphiFolder);

gentlyCopy(fileList, delphiFolder);