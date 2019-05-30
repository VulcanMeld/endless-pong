let pongNameSpace = {         //Declare namespace to hold global variables for application
    "windowWidth" : 800,
    "windowHeight" : 600,

}


const initializeGame = () => {
    Crafty.init(pongNameSpace.windowWidth, pongNameSpace.windowHeight, document.getElementById('game')) //init game
}

const createWalls = () => {
    let leftWall = Crafty.e(`Wall, 2D, Canvas, Color`)
    .attr({x: 0, y:0, w: pongNameSpace.windowHeight / 16, h: pongNameSpace.windowWidth })
    .color(`pink`)

    let rightWall = Crafty.e(`Wall, 2D, Canvas, Color`)
    .attr({x: pongNameSpace.windowWidth - pongNameSpace.windowHeight / 16, y:0, w: pongNameSpace.windowHeight  / 16, h: pongNameSpace.windowWidth })
    .color(`pink`)

    let topWall = Crafty.e(`Wall, 2D, Canvas, Color`)
    .attr({x: 0, y:0, w: pongNameSpace.windowWidth, h: pongNameSpace.windowHeight / 16 })
    .color(`pink`)

    let bottomWall = Crafty.e(`Wall, 2D, Canvas, Color`)
    .attr({x: 0, y: pongNameSpace.windowHeight - pongNameSpace.windowHeight / 16, w: pongNameSpace.windowWidth, h: pongNameSpace.windowHeight / 2 })
    .color(`pink`)





}












// RUN GAME

initializeGame()
createWalls()