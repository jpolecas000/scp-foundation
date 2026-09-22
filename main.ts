let mySprite: Sprite = null
let myMenu = miniMenu.createMenu(
miniMenu.createMenuItem("Class D"),
miniMenu.createMenuItem("Security"),
miniMenu.createMenuItem("MTF")
)
miniMenu.onButtonPressed(myMenu, miniMenu.Button.A, function (selection, selectedIndex) {
    if (selectedIndex == 0) {
        mySprite = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 4 4 f f f . . . . 
            . . . f f f 4 4 4 4 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 4 4 4 4 4 4 e e f . . 
            . . f e 4 f f f f f f 4 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f d d f b f e f f . 
            . f e e d 1 f d d f 1 d e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e d d d d e e f . . . 
            . . e d f 4 4 4 4 4 4 f d e . . 
            . . d d f 4 4 4 4 4 4 f d d . . 
            . . d d f d d 5 5 d d f d d . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player)
        controller.moveSprite(mySprite)
        tiles.setCurrentTilemap(tilemap`Seat map`)
        scene.cameraFollowSprite(mySprite)
        tiles.placeOnRandomTile(mySprite, assets.tile`Main_Tile-Class-D Spawn`)
    } else if (selectedIndex == 1) {
    	
    } else if (selectedIndex == 2) {
    	
    }
    miniMenu.close(myMenu)
})
