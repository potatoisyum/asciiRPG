/**
 * Manages all the screens, the game stuff, state, and basically everything
 */


/**
 * Initializes game and creates the menu screen
 */
function initializeGame() {
    menuScreen(); 
    console.log("Game initalized.")
}

/**
 * Starts the menu screen
 */
function menuScreen() {
    createScreen(); 
    renderScreen(); 
}