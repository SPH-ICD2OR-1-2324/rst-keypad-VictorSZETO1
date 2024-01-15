namespace SpriteKind {
    export const UI = SpriteKind.create()
    export const answear = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    curY = Math.max(0, curY - 1)
    UpdateCursor()
})
function InitKeys () {
    while (index <= keypadList.length - 1) {
        mySprite = sprites.create(keypadList[index], SpriteKind.UI)
        mySprite.left = index % 7 * 23
        mySprite.top = Math.floor(index / 7) * 31
        index += 1
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
            if (Selections[6] != 1) {
                sprites.destroy(symbols[6])
            } else {
                list2.unshift(symbols[6])
            }
            if (Selections[5] != 1) {
                sprites.destroy(symbols[5])
            } else {
                list2.unshift(symbols[5])
            }
            if (Selections[4] != 1) {
                sprites.destroy(symbols[4])
            } else {
                list2.unshift(symbols[4])
            }
            if (Selections[3] != 1) {
                sprites.destroy(symbols[3])
            } else {
                list2.unshift(symbols[3])
            }
            if (Selections[2] != 1) {
                sprites.destroy(symbols[2])
            } else {
                list2.unshift(symbols[2])
            }
            if (Selections[1] != 1) {
                sprites.destroy(symbols[1])
            } else {
                list2.unshift(symbols[1])
            }
            if (Selections[0] != 1) {
                sprites.destroy(symbols[0])
            } else {
                list2.unshift(symbols[0])
            }
            clearScreen()
            setuporder()
            reset_value()
        }
        if (incol2 == 4) {
            game.splash("col2")
            if (Selections[10] != 1) {
                sprites.destroy(symbols[10])
            } else {
                list2.unshift(symbols[10])
            }
            if (Selections[5] != 1) {
                sprites.destroy(symbols[5])
            } else {
                list2.unshift(symbols[5])
            }
            if (Selections[9] != 1) {
                sprites.destroy(symbols[9])
            } else {
                list2.unshift(symbols[9])
            }
            if (Selections[8] != 1) {
                sprites.destroy(symbols[8])
            } else {
                list2.unshift(symbols[8])
            }
            if (Selections[6] != 1) {
                sprites.destroy(symbols[6])
            } else {
                list2.unshift(symbols[6])
            }
            if (Selections[0] != 1) {
                sprites.destroy(symbols[0])
            } else {
                list2.unshift(symbols[0])
            }
            if (Selections[7] != 1) {
                sprites.destroy(symbols[7])
            } else {
                list2.unshift(symbols[7])
            }
            clearScreen()
            setuporder()
            reset_value()
        }
        if (incol3 == 4) {
            game.splash("col3")
            if (Selections[9] != 1) {
                sprites.destroy(symbols[9])
            } else {
                list2.unshift(symbols[9])
            }
            if (Selections[3] != 1) {
                sprites.destroy(symbols[3])
            } else {
                list2.unshift(symbols[3])
            }
            if (Selections[14] != 1) {
                sprites.destroy(symbols[14])
            } else {
                list2.unshift(symbols[14])
            }
            if (Selections[13] != 1) {
                sprites.destroy(symbols[13])
            } else {
                list2.unshift(symbols[13])
            }
            if (Selections[8] != 1) {
                sprites.destroy(symbols[8])
            } else {
                list2.unshift(symbols[8])
            }
            if (Selections[12] != 1) {
                sprites.destroy(symbols[12])
            } else {
                list2.unshift(symbols[12])
            }
            if (Selections[11] != 1) {
                sprites.destroy(symbols[11])
            } else {
                list2.unshift(symbols[11])
            }
            clearScreen()
            setuporder()
            reset_value()
        }
        if (incol4 == 4) {
            game.splash("col4")
            if (Selections[18] != 1) {
                sprites.destroy(symbols[18])
            } else {
                list2.unshift(symbols[18])
            }
            if (Selections[10] != 1) {
                sprites.destroy(symbols[10])
            } else {
                list2.unshift(symbols[10])
            }
            if (Selections[13] != 1) {
                sprites.destroy(symbols[13])
            } else {
                list2.unshift(symbols[13])
            }
            if (Selections[4] != 1) {
                sprites.destroy(symbols[4])
            } else {
                list2.unshift(symbols[4])
            }
            if (Selections[17] != 1) {
                sprites.destroy(symbols[17])
            } else {
                list2.unshift(symbols[17])
            }
            if (Selections[16] != 1) {
                sprites.destroy(symbols[16])
            } else {
                list2.unshift(symbols[16])
            }
            if (Selections[15] != 1) {
                sprites.destroy(symbols[15])
            } else {
                list2.unshift(symbols[15])
            }
            clearScreen()
            setuporder()
            reset_value()
        }
        if (incol5 == 4) {
            game.splash("col5")
            if (Selections[22] != 1) {
                sprites.destroy(symbols[22])
            } else {
                list2.unshift(symbols[22])
            }
            if (Selections[21] != 1) {
                sprites.destroy(symbols[21])
            } else {
                list2.unshift(symbols[21])
            }
            if (Selections[16] != 1) {
                sprites.destroy(symbols[16])
            } else {
                list2.unshift(symbols[16])
            }
            if (Selections[20] != 1) {
                sprites.destroy(symbols[20])
            } else {
                list2.unshift(symbols[20])
            }
            if (Selections[17] != 1) {
                sprites.destroy(symbols[17])
            } else {
                list2.unshift(symbols[17])
            }
            if (Selections[18] != 1) {
                sprites.destroy(symbols[18])
            } else {
                list2.unshift(symbols[18])
            }
            if (Selections[19] != 1) {
                sprites.destroy(symbols[19])
            } else {
                list2.unshift(symbols[19])
            }
            clearScreen()
            setuporder()
            reset_value()
        }
        if (incol6 == 4) {
            game.splash("col6")
            if (Selections[26] != 1) {
                sprites.destroy(symbols[26])
            } else {
                list2.unshift(symbols[26])
            }
            if (Selections[25] != 1) {
                sprites.destroy(symbols[25])
            } else {
                list2.unshift(symbols[25])
            }
            if (Selections[19] != 1) {
                sprites.destroy(symbols[19])
            } else {
                list2.unshift(symbols[19])
            }
            if (Selections[24] != 1) {
                sprites.destroy(symbols[24])
            } else {
                list2.unshift(symbols[24])
            }
            if (Selections[23] != 1) {
                sprites.destroy(symbols[23])
            } else {
                list2.unshift(symbols[23])
            }
            if (Selections[7] != 1) {
                sprites.destroy(symbols[7])
            } else {
                list2.unshift(symbols[7])
            }
            if (Selections[15] != 1) {
                sprites.destroy(symbols[15])
            } else {
                list2.unshift(symbols[15])
            }
            clearScreen()
            setuporder()
            reset_value()
        }
        if (sprites.allOfKind(SpriteKind.answear).length == 0) {
            list2 = []
            scene.setBackgroundImage(bgImage)
            InitKeys()
            symbols = sprites.allOfKind(SpriteKind.UI)
            reset_value()
            game.splash("Invalid")
        }
    }
})
function setuporder () {
    for (let value of list2) {
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.answear)
        value.left = makelocal % 7 * 23
        value.top = Math.floor(makelocal / 7) * 31
        makelocal += 1
    }
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
        incol5 += 1
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
    if (Selections[26] == 1) {
        incol6 += 1
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    curX = Math.max(0, curX - 1)
    UpdateCursor()
})
function clearScreen () {
    sprite_list = sprites.allOfKind(SpriteKind.UI)
    for (let value of list2) {
        value.setKind(SpriteKind.answear)
    }
    for (let value2 of sprites.allOfKind(SpriteKind.UI)) {
        sprites.destroy(value2)
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
function reset_value () {
    incol1 = 0
    incol2 = 0
    incol3 = 0
    incol4 = 0
    incol5 = 0
    incol6 = 0
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (curY < 3) {
        curX = Math.min(6, curX + 1)
    } else {
        curX = Math.min(5, curX + 1)
    }
    UpdateCursor()
})
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
let current = 0
let makelocal = 0
let incol6 = 0
let incol5 = 0
let incol4 = 0
let incol3 = 0
let incol2 = 0
let Selections: number[] = []
let incol1 = 0
let SelectedCount = 0
let cursorSprite: Sprite = null
let mySprite: Sprite = null
let index = 0
let symbols: Sprite[] = []
let curY = 0
let curX = 0
let list2: Sprite[] = []
list2 = []
curX = 0
curY = 0
scene.setBackgroundImage(bgImage)
InitKeys()
symbols = sprites.allOfKind(SpriteKind.UI)
InitCursor()
InitArray()
