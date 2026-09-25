namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
/**
 * O= classd
 * 
 * 1=security
 */
let myMenu2: Sprite = null
let BrainList: number[] = []
let mySprite2: Sprite = null
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
        mySprite2 = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f d d f f f . . . . 
            . . . f f f d d d d f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e d d d d d d e e f . . 
            . . f e d f f f f f f d e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f b b f b f e f f . 
            . f e e b 1 f b b f 1 b e e f . 
            . . f e e b b b b b b e e f . . 
            . . . f e e b b b b e e f . . . 
            . . e b f d d d d d d f b e . . 
            . . b b f d d d d d d f b b . . 
            . . b b f b b 5 5 b b f b b . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.NPC)
        sprites.setDataNumber(mySprite2, "faction", 1)
        sprites.setDataNumber(mySprite2, "health", 100)
        BrainList = []
        sprites.setDataNumber(mySprite2, "brainID", BrainList.length)
    } else if (selectedIndex == 2) {
        myMenu2 = miniMenu.createMenu(
        miniMenu.createMenuItem("Nu-7"),
        miniMenu.createMenuItem("Beta-7"),
        miniMenu.createMenuItem("Epsilon-11"),
        miniMenu.createMenuItem("Alpha-1")
        )
        miniMenu.onButtonPressed(myMenu, miniMenu.Button.A, function (selection, selectedIndex) {
            if (selectedIndex == 0) {
            	
            } else if (selectedIndex == 1) {
            	
            } else if (selectedIndex == 2) {
            	
            } else if (selectedIndex == 3) {
            	
            }
            miniMenu.close(myMenu2)
        })
    }
    miniMenu.close(myMenu)
})
game.onUpdateInterval(200, function () {
	
})
