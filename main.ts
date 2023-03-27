input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Target)
    basic.showIcon(IconNames.SmallDiamond)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(8)
    basic.showLeds(`
        . . . . .
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . # # .
        . . . # .
        # # # # .
        # . . # .
        . # # # .
        `)
    basic.showLeds(`
        # . . . .
        # # # # .
        # . . # .
        # . . # .
        # . . # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Yes)
    basic.showIcon(IconNames.No)
})
basic.showNumber(8)
basic.showLeds(`
    . . . . .
    # # . # #
    # . # . #
    # . . . #
    # . . . #
    `)
basic.showLeds(`
    . . # . .
    . . . . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    . . # # .
    . . . # .
    # # # # .
    # . . # .
    . # # # .
    `)
basic.showLeds(`
    # . . . .
    # # # # .
    # . . # .
    # . . # .
    # . . # .
    `)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
    basic.clearScreen()
})
