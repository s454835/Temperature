let current_variable = 0
basic.forever(function () {
    current_variable = input.temperature()
    basic.showNumber(input.temperature())
    basic.pause(1000)
    basic.clearScreen()
})
