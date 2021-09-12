let on = false
function p1のイベント () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        `)
    music.playTone(440, music.beat(BeatFraction.Whole))
}
input.onButtonPressed(Button.A, function () {
    on = !(on)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        `)
    music.playTone(262, music.beat(BeatFraction.Whole))
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 350) {
        p1のイベント()
    }
})
basic.forever(function () {
    if (on) {
        music.playTone(262, pins.map(
        Math.abs(input.acceleration(Dimension.Y)),
        0,
        1023,
        60,
        320
        ))
        music.playTone(input.lightLevel() * 25, music.beat(BeatFraction.Quarter))
    } else {
        music.rest(music.beat(BeatFraction.Whole))
    }
})
