scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile`)
    invatory.push("whiteOrb")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    whiteOrbcount = 0
    for (let value of invatory) {
        if (value == "whiteOrb") {
            whiteOrbcount += 1
        }
    }
    if (whiteOrbcount >= 5) {
        tiles.setCurrentTilemap(tilemap`level2`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash(invatory)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.setTileAt(location, sprites.builtin.oceanSand14)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    BLUEORBCOUNT = 0
    for (let value of invatory) {
        if (value == "blueORB") {
            BLUEORBCOUNT += 1
        }
    }
    if (BLUEORBCOUNT >= 5) {
        tiles.setCurrentTilemap(tilemap`level3`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
    }
})
let BLUEORBCOUNT = 0
let whiteOrbcount = 0
let invatory: string[] = []
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . c c c c c c c . . . 
    . . . . . c f f 6 6 f f 7 c . . 
    . . . . c 7 6 6 6 6 6 6 7 6 c . 
    . . . c 7 7 7 7 7 7 7 7 7 7 c . 
    . . . c 7 8 1 f f 1 6 7 7 7 c . 
    . . . f 6 f 1 f f 1 f 7 7 7 f . 
    . . . f 6 f 2 2 2 2 f 7 7 7 f . 
    . . c c 6 f 2 2 2 2 f 7 7 6 f . 
    . c 7 7 7 7 2 2 2 2 7 7 f c . . 
    c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
    f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
    f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
    f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
    f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
    . f 6 1 1 1 1 6 6 6 6 6 c . . . 
    . . f f c c c c c c c c . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
invatory = []
