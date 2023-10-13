import simpleSvgPlaceholder from "./simple-svg-placeholder/mjs/index.js"
const logoHolder =  simpleSvgPlaceholder({width: 100, height: 100});

document.getElementById("logo").src = logoHolder;