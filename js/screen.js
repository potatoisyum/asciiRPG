/**
 * Initalizes the screen by putting together a bunch of paragraphs that represent the x and y of the sceen. y negative x increases to the right (0,0) in top left
 */

const screenElement = document.getElementById('screen'); 
let renderedState = null; 

const rows = 20;
const cols = 30;


/**
 *  Initiallize rows x cols screen
 */
function createScreen() {
    screenElement.innerHTML = ''; // Clear screen element in case anything is in there
    renderedState = null; // Screen is new
    for (let rowNum = 0; rowNum < rows; rowNum++) {
        const row = document.createElement('div'); 
        row.id = "row"+String(rowNum); 
        for (let col = 0; col < cols; col++) {
            const char = document.createElement('span');
            char.row = rowNum; 
            char.col = col;
            char.id = "col"+String(col);
            char.classList.add('char');
            row.appendChild(char); 
        }
        screenElement.appendChild(row);
    }
}

/**
 * @function renderscreen
 * @description Render the whole screen given a 2D array
 * @param screenState
 */
function renderscreen(screenState) {
    for (let rowNum = 0; rowNum < rows; rowNum++) {
        const row
        for (let col = 0; col < cols; col++) {
            const char = document.getElementById("row"+String(row)); 
        }
    }
}