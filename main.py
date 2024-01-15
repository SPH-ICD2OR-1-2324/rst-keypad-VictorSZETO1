@namespace
class SpriteKind:
    UI = SpriteKind.create()

def on_up_pressed():
    global curY
    curY = max(0, curY - 1)
    UpdateCursor()
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def InitKeys():
    global mySprite
    index = 0
    while index <= len(keypad_list) - 1:
        mySprite = sprites.create(keypad_list[index], SpriteKind.UI)
        mySprite.left = index % 7 * 23
        mySprite.top = Math.floor(index / 7) * 31
        index += 1
def UpdateCursor():
    cursorSprite.left = curX * 23
    cursorSprite.top = curY * 31

def on_b_pressed():
    if SelectedCount == 4:
        find_colom()
        if incol1 == 4:
            game.splash("col1")
            if Selections[6] != 1:
                sprites.destroy(symbols[6])
            else:
                list2.unshift(symbols[6])
            if Selections[5] != 1:
                sprites.destroy(symbols[5])
            else:
                list2.unshift(symbols[5])
            if Selections[4] != 1:
                sprites.destroy(symbols[4])
            else:
                list2.unshift(list2[4])
            if Selections[3] != 1:
                sprites.destroy(symbols[3])
            else:
                list2.unshift(symbols[3])
            if Selections[2] != 1:
                sprites.destroy(symbols[2])
            else:
                list2.unshift(symbols[2])
            if Selections[1] != 1:
                sprites.destroy(symbols[1])
            else:
                list2.unshift(symbols[1])
            if Selections[0] != 1:
                sprites.destroy(symbols[0])
            else:
                list2.unshift(symbols[0])
        if incol2 == 4:
            game.splash("col2")
            if Selections[10] != 1:
                sprites.destroy(symbols[10])
            else:
                list2.unshift(symbols[10])
            if Selections[5] != 1:
                sprites.destroy(symbols[5])
            else:
                list2.unshift(symbols[5])
            if Selections[9] != 1:
                sprites.destroy(symbols[9])
            else:
                list2.unshift(list2[9])
            if Selections[8] != 1:
                sprites.destroy(symbols[8])
            else:
                list2.unshift(symbols[8])
            if Selections[6] != 1:
                sprites.destroy(symbols[6])
            else:
                list2.unshift(symbols[6])
            if Selections[0] != 1:
                sprites.destroy(symbols[0])
            else:
                list2.unshift(symbols[0])
            if Selections[7] != 1:
                sprites.destroy(symbols[7])
            else:
                list2.unshift(symbols[7])
        clearScreen()
        reset_value()
        setuporder()
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def setuporder():
    global mySprite, makelocal
    for value in list2:
        mySprite = sprites.create(img("""
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
            """),
            SpriteKind.UI)
        value.left = makelocal % 7 * 23
        value.top = Math.floor(makelocal / 7) * 31
        makelocal += 1
def reset_value():
    global incol1, incol2, incol3, incol4, incol5, incol6
    incol1 = 0
    incol2 = 0
    incol3 = 0
    incol4 = 0
    incol5 = 0
    incol6 = 0

def on_a_pressed():
    global current, SelectedCount
    current = curY * 7 + curX
    Selections[current] = Selections[current] * -1
    if Selections[current] == 1:
        if SelectedCount == 4:
            Selections[current] = Selections[current] * -1
        else:
            SelectedCount += 1
            keypad_list[current].replace(0, 7)
    else:
        SelectedCount += -1
        keypad_list[current].replace(7, 0)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_left_pressed():
    global curX
    curX = max(0, curX - 1)
    UpdateCursor()
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def clearScreen():
    global sprite_list
    sprite_list = sprites.all_of_kind(SpriteKind.UI)
    for value2 in symbols:
        sprites.destroy(value2)
def InitCursor():
    global cursorSprite
    cursorSprite = sprites.create(img("""
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
        """),
        SpriteKind.UI)
    UpdateCursor()

def on_right_pressed():
    global curX
    if curY < 3:
        curX = min(6, curX + 1)
    else:
        curX = min(5, curX + 1)
    UpdateCursor()
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def find_colom():
    global incol1, incol2, incol3, incol4, incol6, incol5
    if Selections[0] == 1:
        incol1 += 1
        incol2 += 1
    if Selections[1] == 1:
        incol1 += 1
    if Selections[2] == 1:
        incol1 += 1
        incol3 += 1
    if Selections[3] == 1:
        incol1 += 1
    if Selections[4] == 1:
        incol1 += 1
        incol4 += 1
    if Selections[5] == 1:
        incol1 += 1
        incol2 += 1
    if Selections[6] == 1:
        incol2 += 1
        incol1 += 1
    if Selections[7] == 1:
        incol2 += 1
        incol6 += 1
    if Selections[8] == 1:
        incol2 += 1
        incol3 += 1
    if Selections[9] == 1:
        incol2 += 1
        incol3 += 1
    if Selections[10] == 1:
        incol2 += 1
        incol4 += 1
    if Selections[11] == 1:
        incol3 += 1
    if Selections[12] == 1:
        incol3 += 1
    if Selections[13] == 1:
        incol3 += 1
        incol4 += 1
    if Selections[14] == 1:
        incol3 += 1
    if Selections[15] == 1:
        incol4 += 1
        incol6 += 1
    if Selections[16] == 1:
        incol4 += 1
        incol5 += 1
    if Selections[17] == 1:
        incol4 += 1
        incol5 += 1
    if Selections[18] == 1:
        incol4 += 1
        incol5 += 1
    if Selections[19] == 1:
        incol6 += 1
        incol5 += 1
    if Selections[20] == 1:
        incol5 += 1
    if Selections[21] == 1:
        incol5 += 1
    if Selections[22] == 1:
        incol5 += 1
    if Selections[23] == 1:
        incol6 += 1
    if Selections[24] == 1:
        incol6 += 1
    if Selections[25] == 1:
        incol6 += 1
    if Selections[26] == 1:
        incol6 += 1

def on_down_pressed():
    global curY
    if curX == 6:
        curY = min(2, curY + 1)
    else:
        curY = min(3, curY + 1)
    UpdateCursor()
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def InitArray():
    global Selections
    Selections = [-1,
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
        -1]

def on_on_created(sprite):
    sprite.set_flag(SpriteFlag.GHOST, True)
sprites.on_created(SpriteKind.UI, on_on_created)

sprite_list: List[Sprite] = []
current = 0
incol6 = 0
incol5 = 0
incol4 = 0
incol3 = 0
makelocal = 0
incol2 = 0
Selections: List[number] = []
incol1 = 0
SelectedCount = 0
cursorSprite: Sprite = None
mySprite: Sprite = None
symbols: List[Sprite] = []
curY = 0
curX = 0
list2: List[Sprite] = []
list2 = []
curX = 0
curY = 0
scene.set_background_image(bg_image)
InitKeys()
symbols = sprites.all_of_kind(SpriteKind.UI)
InitCursor()
InitArray()