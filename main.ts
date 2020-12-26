let X = 0
let Y = 0
function explosion () {
    led.unplot(X, Y)
    led.plot(X - 1, Y - 1)
    led.plot(X + 1, Y - 1)
    led.plot(X + 1, Y + 1)
    led.plot(X - 1, Y + 1)
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.playTone(220, music.beat(BeatFraction.Quarter))
    basic.pause(100)
}
basic.forever(function () {
    X = randint(0, 4)
    Y = randint(0, 4)
    led.plot(X, Y)
    basic.pause(1000)
    explosion()
    basic.clearScreen()
})
