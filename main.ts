function Game (Speed: number) {
    Zombie.turn(Direction.Right, 90)
    Zombie.move(1)
    Zombie.ifOnEdgeBounce()
    if (Zombie.isTouchingEdge()) {
        game.setScore(game.score() + 1)
    }
    if (The_Last_Survivor_You.isTouching(Zombie)) {
        Lives += -1
    }
    basic.pause(Speed)
}
input.onButtonPressed(Button.B, function () {
    The_Last_Survivor_You.move(1)
})
input.onButtonPressed(Button.A, function () {
    The_Last_Survivor_You.move(-1)
})
let The_Last_Survivor_You: game.LedSprite = null
let Zombie: game.LedSprite = null
game.startCountdown(30000)
let Lives = 3
game.setScore(0)
Zombie = game.createSprite(0, 5)
The_Last_Survivor_You = game.createSprite(2, 0)
The_Last_Survivor_You.turn(Direction.Right, 90)
The_Last_Survivor_You.set(LedSpriteProperty.Brightness, 50)
basic.forever(function () {
    if (Lives <= 0) {
        game.gameOver()
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        Game(250)
    } else if (input.isGesture(Gesture.TiltRight)) {
        Game(500)
    } else {
        Game(750)
    }
})
