let pClassD: Sprite = null
let class_select = miniMenu.createMenu(
miniMenu.createMenuItem("Class D"),
miniMenu.createMenuItem("Chaos Insurgency"),
miniMenu.createMenuItem("Security Force"),
miniMenu.createMenuItem("Scientist"),
miniMenu.createMenuItem("MTF")
)
tiles.setCurrentTilemap(tilemap`level1`)
miniMenu.onButtonPressed(class_select, miniMenu.Button.A, function (selection, selectedIndex) {
    if (selectedIndex == 0) {
        miniMenu.close(class_select)
        game.showLongText("Class D tutorial text", DialogLayout.Bottom)
        pClassD = sprites.create(img`
            . . . f f f f f f f . . . 
            . . f d d d d d d d f . . 
            . f d d 1 d d d 1 d d f . 
            . f d 1 f d d d f 1 d f . 
            . f d d d d d d d d d f . 
            . f d d d f f f d d d f . 
            . . f d d d d d d d f . . 
            . f f 1 4 4 4 4 4 1 f f . 
            f 4 f 4 1 4 4 4 1 4 f 4 f 
            f 4 f 4 1 4 4 4 1 4 f 4 f 
            f 6 f 4 1 4 4 4 1 4 f 6 f 
            . f f 4 1 4 4 4 1 4 f f . 
            . . f 1 4 4 4 4 4 1 f . . 
            . . f f f f f f f f f . . 
            . f b 4 4 f . f 4 4 b f . 
            . . f f f . . . f f f . . 
            `, SpriteKind.Player)
        tiles.placeOnRandomTile(pClassD, assets.tile`Main_Tile-Class-D Spawn`)
        controller.moveSprite(pClassD)
        scene.cameraFollowSprite(pClassD)
    } else if (selectedIndex == 1) {
        game.showLongText("CI tutorial text", DialogLayout.Bottom)
    } else if (selectedIndex == 2) {
        game.showLongText("SF tutorial text", DialogLayout.Bottom)
    } else if (selectedIndex == 3) {
        game.showLongText("Scientist tutorial text", DialogLayout.Bottom)
    } else if (selectedIndex == 4) {
        game.showLongText("MTF tutorial text", DialogLayout.Bottom)
    }
})
