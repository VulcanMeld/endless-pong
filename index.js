let pongNameSpace = {         //Declare namespace to hold global variables for application
    "windowWidth" : 800,
    "windowHeight" : 600,

}


const initializeGame = ( width, height) => {
    Crafty.init(width, height, document.getElementById('game')) //init game
}

const setBackground = (color) => {
    Crafty.background(color)
}


const createWalls = (color) => {
    let leftWall = Crafty.e(`Wall, Sidewall, 2D, Canvas, Color`)
    .attr({x: 0, y:0, w: pongNameSpace.windowHeight / 16, h: pongNameSpace.windowWidth })
    .color(color)

    let rightWall = Crafty.e(`Wall, Sidewall, 2D, Canvas, Color`)
    .attr({x: pongNameSpace.windowWidth - pongNameSpace.windowHeight / 16, y:0, w: pongNameSpace.windowHeight  / 16, h: pongNameSpace.windowWidth })
    .color(color)

    let topWall = Crafty.e(`Wall, 2D, Canvas, Color`)
    .attr({x: 0, y:0, w: pongNameSpace.windowWidth, h: pongNameSpace.windowHeight / 16 })
    .color(color)

    let bottomWall = Crafty.e(`Wall, 2D, Canvas, Color`)
    .attr({x: 0, y: pongNameSpace.windowHeight - pongNameSpace.windowHeight / 16, w: pongNameSpace.windowWidth, h: pongNameSpace.windowHeight / 2 })
    .color(color)
}


const createPlayerPaddle = (color) => {
    
    let playerPaddle = Crafty.e(`2D, Canvas, Color, Multiway, Collision`)
    .attr({x: pongNameSpace.windowWidth / 2, y: pongNameSpace.windowHeight * 0.905, w: pongNameSpace.windowWidth / 8, h: pongNameSpace.windowHeight / 32})
    .color(color).multiway(pongNameSpace.windowWidth / 4, {RIGHT_ARROW: 0, LEFT_ARROW: 180})


}

const createBalls = (color, number) => {
    ballsArray = []
    for(i=0; i<number; i++) {
        ballsArray.push(
            Crafty.e(`2D, Canvas, Color, Collision, Gravity`)
            .attr({x: Crafty.math.randomNumber(pongNameSpace.windowWidth / 24, pongNameSpace.windowWidth - pongNameSpace.windowWidth / 32), y:pongNameSpace.windowHeight / 16, w: pongNameSpace.windowWidth / 32, h: pongNameSpace.windowHeight / 32 })
            .color(color).gravity(`Wall`)
            )

    }

}














// RUN GAME

//What color background do you want? What color paddle do you want?

initializeGame(pongNameSpace.windowWidth, pongNameSpace.windowHeight)
setBackground('black')
createWalls('pink')
createPlayerPaddle(`purple`)
createBalls(`white`, 1)