namespace SpriteKind {
    export const UI = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    curY = Math.max(0, curY - 1)
    UpdateCursor()
})
function InitKeys () {
    for (let index = 0; index <= keypadList.length - 1; index++) {
        mySprite = sprites.create(keypadList[index], SpriteKind.UI)
        mySprite.left = index % 7 * 23
        mySprite.top = Math.floor(index / 7) * 31
    }
}
function UpdateCursor () {
    cursorSprite.left = curX * 23
    cursorSprite.top = curY * 31
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (SelectedCount == 4) {
        find_colom()
        if (incol1 == 4) {
            game.splash("col1")
        }
        if (incol2 == 4) {
            game.splash("col2")
        }
        if (incol3 == 4) {
            game.splash("col3")
        }
        if (incol4 == 4) {
            game.splash("col4")
        }
        if (incol5 == 4) {
            game.splash("col5")
        }
        if (incol6 == 4) {
            game.splash("col6")
        }
        InitKeys()
        reset_value()
    }
})
function reset_value () {
    incol1 = 0
    incol2 = 0
    incol3 = 0
    incol4 = 0
    incol5 = 0
    incol6 = 0
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    current = curY * 7 + curX
    Selections[current] = Selections[current] * -1
    if (Selections[current] == 1) {
        if (SelectedCount == 4) {
            Selections[current] = Selections[current] * -1
        } else {
            SelectedCount += 1
            keypadList[current].replace(0, 7)
        }
    } else {
        SelectedCount += -1
        keypadList[current].replace(7, 0)
    }
    clearScreen()
    InitKeys()
    InitCursor()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    curX = Math.max(0, curX - 1)
    UpdateCursor()
})
function clearScreen () {
    sprite_list = sprites.allOfKind(SpriteKind.UI)
    for (let value of sprite_list) {
        value.destroy()
    }
}
function InitCursor () {
    cursorSprite = sprites.create(img`
        88888..........88888
        88888..........88888
        88................88
        88................88
        88................88
        88................88
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        88................88
        88................88
        88................88
        88................88
        88................88
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        88................88
        88................88
        88................88
        88888..........88888
        88888..........88888
        `, SpriteKind.UI)
    UpdateCursor()
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (curY < 3) {
        curX = Math.min(6, curX + 1)
    } else {
        curX = Math.min(5, curX + 1)
    }
    UpdateCursor()
})
function find_colom () {
    if (Selections[0] == 1) {
        incol1 += 1
        incol2 += 1
    }
    if (Selections[1] == 1) {
        incol1 += 1
    }
    if (Selections[2] == 1) {
        incol1 += 1
        incol3 += 1
    }
    if (Selections[3] == 1) {
        incol1 += 1
    }
    if (Selections[4] == 1) {
        incol1 += 1
        incol4 += 1
    }
    if (Selections[5] == 1) {
        incol1 += 1
        incol2 += 1
    }
    if (Selections[6] == 1) {
        incol2 += 1
        incol1 += 1
    }
    if (Selections[7] == 1) {
        incol2 += 1
        incol6 += 1
    }
    if (Selections[8] == 1) {
        incol2 += 1
        incol3 += 1
    }
    if (Selections[9] == 1) {
        incol2 += 1
        incol3 += 1
    }
    if (Selections[10] == 1) {
        incol2 += 1
        incol4 += 1
    }
    if (Selections[11] == 1) {
        incol3 += 1
    }
    if (Selections[12] == 1) {
        incol3 += 1
    }
    if (Selections[13] == 1) {
        incol3 += 1
        incol4 += 1
    }
    if (Selections[14] == 1) {
        incol3 += 1
    }
    if (Selections[15] == 1) {
        incol4 += 1
        incol6 += 1
    }
    if (Selections[16] == 1) {
        incol4 += 1
        incol5 += 1
    }
    if (Selections[17] == 1) {
        incol4 += 1
        incol5 += 1
    }
    if (Selections[18] == 1) {
        incol4 += 1
        incol5 += 1
    }
    if (Selections[19] == 1) {
        incol6 += 1
    }
    if (Selections[20] == 1) {
        incol5 += 1
    }
    if (Selections[21] == 1) {
        incol5 += 1
    }
    if (Selections[22] == 1) {
        incol5 += 1
    }
    if (Selections[23] == 1) {
        incol6 += 1
    }
    if (Selections[24] == 1) {
        incol6 += 1
    }
    if (Selections[25] == 1) {
        incol6 += 1
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (curX == 6) {
        curY = Math.min(2, curY + 1)
    } else {
        curY = Math.min(3, curY + 1)
    }
    UpdateCursor()
})
function InitArray () {
    Selections = [
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1
    ]
}
sprites.onCreated(SpriteKind.UI, function (sprite) {
    sprite.setFlag(SpriteFlag.Ghost, true)
})
let sprite_list: Sprite[] = []
let Selections: number[] = []
let current = 0
let incol6 = 0
let incol5 = 0
let incol4 = 0
let incol3 = 0
let incol2 = 0
let incol1 = 0
let SelectedCount = 0
let cursorSprite: Sprite = null
let mySprite: Sprite = null
let curY = 0
let curX = 0
let list: number[] = []
curX = 0
curY = 0
scene.setBackgroundImage(bgImage)
InitArray()
InitKeys()
InitCursor()
