input.onButtonPressed(Button.A, function () {
    radio.sendString("front")
    basic.pause(1000)
    radio.sendString("stop")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("win")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "win") {
        RGB.showColor(neopixel.colors(NeoPixelColors.Green))
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.UntilDone)
        counter += 1
    }
    if (receivedString == "lose") {
        RGB.showColor(neopixel.colors(NeoPixelColors.Orange))
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerDown), music.PlaybackMode.UntilDone)
        counter += -1
    }
    if (receivedString == "front") {
        RGB.showColor(neopixel.colors(NeoPixelColors.Red))
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.UntilDone)
        pins.servoWritePin(AnalogPin.P0, 85)
        pins.servoWritePin(AnalogPin.P1, 95)
    }
    if (receivedString == "back") {
        RGB.showColor(neopixel.colors(NeoPixelColors.Indigo))
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.UntilDone)
        pins.servoWritePin(AnalogPin.P0, 95)
        pins.servoWritePin(AnalogPin.P1, 85)
    }
    if (receivedString == "stop") {
        RGB.showColor(neopixel.colors(NeoPixelColors.Violet))
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpDown), music.PlaybackMode.UntilDone)
        pins.servoWritePin(AnalogPin.P0, 90)
        pins.servoWritePin(AnalogPin.P1, 90)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("back")
    basic.pause(1000)
    radio.sendString("stop")
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 3; index++) {
        basic.showNumber(countdown)
        countdown += 0 - 1
    }
    tool = randint(0, 2)
    if (tool == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (tool == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
    basic.pause(2000)
    control.reset()
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("lose")
})
let tool = 0
let countdown = 0
let RGB: neopixel.Strip = null
radio.setGroup(1)
basic.showIcon(IconNames.Happy)
RGB = robotbit.rgb()
let counter = 0
countdown = 3
