input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1023)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
})
pins.digitalWritePin(DigitalPin.P0, 0)
