/**
 * Manages all the screens, the game stuff, state, and basically everything
 */


/**
 * Initializes game and creates the menu screen
 */
function initializeGame() {
    createScreen(); 
    console.log("Game initalized."); 
}

/**
 * @function getLevel
 * @description Takes the level from config and turns it into a 2D array and returns it to be rendered and manipulated
 * @param level A string that is the level name
 * @returns a 2D array representing the level
 */
function getLevel(level) {
    const rawLevelData = config[level] 
    var levelData = Array(config[level]['yaxis'])
    for (let i = 0; i < levelData.length; i++) {
        
    }
}