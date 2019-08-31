/**
 * Event handler for the window load. Trigger first
 * generate so the user isn't greeted with blank data
 */
window.addEventListener('load', () => {
    generateHexagon();
    convertSvgToText();
});

/**
 * Event handler for the generate button. On click draw
 * a hexagon of hexagons based off the given user parameters.
 */
document.getElementById('generate').onclick = () => {
    generateHexagon();
    convertSvgToText();
}

/**
 * Event handler for the copy button. On click select
 * the text contents of the text area and copy it to the clipboard
 */
document.getElementById('copy').onclick = () => {    
    let textarea = document.querySelector('textarea');
    textarea.select();
    document.execCommand("copy");
}

/**
 * Draw a hexagon of hexagons in SVG
 */
generateHexagon = () => {    
    let svg = document.querySelector('svg');
    let length = document.getElementById('side-length').value;
    console.log(length);
}

/**
 * Serialize the SVG and display the text 
 */
convertSvgToText = () => {
    let svg = document.querySelector('svg');
    let serializer = new XMLSerializer();
    let source = serializer.serializeToString(svg);

    document.querySelector('textarea').innerHTML = source;
}