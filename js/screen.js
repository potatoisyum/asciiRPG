/**
 * Initalizes the screen by putting together a bunch of paragraphs that represent the x and y of the sceen. y negative x increases to the right (0,0) in top left
 */

const screenElement = document.getElementById('screen'); 
const renderedScreen = []; 

/**
 *  Initiallize rows x cols screen
 */
function createScreen() {
    screenElement.innerHTML = ''; // Clear screen element in case anything is in there
}

/**
 * @function renderScreen
 * @description Turns a 2D array into a string and displays it in the screen
 * @param screenData A 2D array containing what is to be rendered
 */
function renderScreen(screenData) {
    render = ``; 
    for(let i = 0; i < screenData.length; i++) {
        rowRender = ``; 
        for(let j = 0; j < screenData[0].length; j++) {
            rowRender += screenData[i][j]; 
        }
        render += rowRender+`\n`; 
    }
    screenElement.innerHTML = render; 
    const renderedScreen = screenData; 
}

/**
 * @function getScreen
 * @description A function that returns the 2D array of the current rendered screen
 * @returns 2D array of rendered screen
 */
function getScreen() {
    return renderedScreen; 
}