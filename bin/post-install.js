/* enable npm modules */
const gentlyCopy = require('gently-copy');
const fse = require('fs-extra');
const path = require('path');
/* set path and source files  */
const fileList = ['src', 'index.js'];
const delphiFolder = path.join(process.env.INIT_CWD, 'delphi-js');
/* empty or create folder*/
fse.emptyDirSync(delphiFolder);
/* copy source files */
gentlyCopy(fileList, delphiFolder);