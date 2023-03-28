input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # . . # .
        # . . # .
        # # # # .
        # . . # .
        # . . # .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . # .
        . . # . .
        . . # # .
        . . . # .
        . . # . .
        `)
    basic.showLeds(`
        # . # . .
        # # . . .
        # # . . .
        # . # . .
        # . . # .
        `)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . . .
        . # # # .
        `)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.South)
})
basic.showLeds(`
    # . . # .
    # . . # .
    # # # # .
    # . . # .
    # . . # .
    `)
basic.showLeds(`
    . . # . .
    . . . . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    . . . # .
    . . # . .
    . . # # .
    . . . # .
    . . # . .
    `)
basic.showLeds(`
    # . # . .
    # # . . .
    # # . . .
    # . # . .
    # . . # .
    `)
basic.showLeds(`
    . # # # .
    . # . # .
    . # # # .
    . # . . .
    . # # # .
    `)
basic.showIcon(IconNames.Heart)
