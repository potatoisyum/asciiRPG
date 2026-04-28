/**
 * A script to setup the game area
 */

config = {
    // If I add any cool features
    FEATURES: {
        // Eventually toggle features here
    },

    // Animations (ms)
    ANIMATIONS: {
        FRAME_TIME: 50
    },

    // Assets
    ASSETS: {
        PLACE: "assets/sounds/place.mp3",
        DESTROY: "assets/sounds/destroy.mp3"
    }
}

levels = {
    // menu level
    menu: {
        xaxis: 10,
        yaxis: 6, 
        pieces: [['o', 'piece', 2, 2], ['1', 'piece', 4, 4], ["Yo Buddy", "text", 0, 0]]
    }
}