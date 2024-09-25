basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        basic.setLedColor(0x00ff00)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.setLedColor(0xff0000)
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
})
