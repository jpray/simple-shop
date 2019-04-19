const fs = require("fs-extra");

function copyStatic () {
    fs.copySync('server', './dist/server');
}

module.exports = copyStatic;