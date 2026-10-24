namespace SpriteKind {
    export const Door = SpriteKind.create()
    export const door2 = SpriteKind.create()
    export const door3 = SpriteKind.create()
    export const key = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.door2, function (sprite3, otherSprite3) {
    if (haveKey) {
        kill = false
        if (set_colour == 1) {
            animation.runImageAnimation(
            killer_45w49e,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . 5 5 5 5 f 5 5 5 f 5 5 5 5 . . 
                . 5 5 5 5 f 5 5 5 f 5 5 5 5 . . 
                . 5 5 5 f f 5 5 5 f f 5 5 5 . . 
                . 5 5 5 f 5 5 2 5 5 f 5 5 5 . . 
                . 5 5 5 f 5 5 5 5 5 f 5 5 5 . . 
                . 5 5 5 f f 5 5 5 f f 5 5 5 . . 
                . 5 5 5 5 f 5 5 5 f 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . 5 5 5 5 f 5 5 5 f 5 5 5 5 . . 
                . 5 5 5 5 f 5 5 5 f 5 5 5 5 . . 
                . 5 5 5 f f 5 2 5 f f 5 5 5 . . 
                . 5 5 5 f 5 2 2 2 5 f 5 5 5 . . 
                . 5 5 5 f 5 5 2 5 5 f 5 5 5 . . 
                . 5 5 5 f f 5 5 5 f f 5 5 5 . . 
                . 5 5 5 5 f 5 5 5 f 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . 5 5 5 5 f 5 5 5 f 5 5 5 5 . . 
                . 5 5 5 5 f 5 2 5 f 5 5 5 5 . . 
                . 5 5 5 f f 2 2 2 f f 5 5 5 . . 
                . 5 5 5 f 2 2 2 2 2 f 5 5 5 . . 
                . 5 5 5 f 5 2 2 2 5 f 5 5 5 . . 
                . 5 5 5 f f 5 2 5 f f 5 5 5 . . 
                . 5 5 5 5 f 5 5 5 f 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . 5 5 5 5 f 5 5 5 f 5 5 5 5 . . 
                . 5 5 5 5 f 5 2 5 f 5 5 5 5 . . 
                . 5 5 5 f f 2 2 2 f f 5 5 5 . . 
                . 5 5 5 f 2 2 2 2 2 f 5 5 5 . . 
                . 5 5 5 f 5 2 2 2 5 f 5 5 5 . . 
                . 5 5 5 f f 5 2 5 f f 5 5 5 . . 
                . 5 5 5 5 f 5 5 5 f 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . 5 5 5 5 f 5 5 5 f 5 5 5 5 . . 
                . 5 5 5 5 f 5 2 5 f 5 5 5 5 . . 
                . 5 5 5 f f 2 2 2 f f 5 5 5 . . 
                . 5 5 5 f 2 2 2 2 2 f 5 5 5 . . 
                . 5 5 5 f 5 2 2 2 5 f 5 5 5 . . 
                . 5 5 5 f f 5 2 5 f f 5 5 5 . . 
                . 5 5 5 5 f 5 5 5 f 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . 5 5 5 5 f 5 5 5 f 5 5 5 5 . . 
                . 5 5 5 5 f 5 2 5 f 5 5 5 5 . . 
                . 5 5 5 f f 2 2 2 f f 5 5 5 . . 
                . 5 5 5 f 2 2 2 2 2 f 5 5 5 . . 
                . 5 5 5 f 5 2 2 2 5 f 5 5 5 . . 
                . 5 5 5 f f 5 2 5 f f 5 5 5 . . 
                . 5 5 5 5 f 5 5 5 f 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . 5 5 5 5 f 5 5 5 f 5 5 5 5 . . 
                . 5 5 5 5 f 5 2 5 f 5 5 5 5 . . 
                . 5 5 5 f f 2 2 2 f f 5 5 5 . . 
                . 5 5 5 f 2 2 f 2 2 f 5 5 5 . . 
                . 5 5 5 f 5 2 2 2 5 f 5 5 5 . . 
                . 5 5 5 f f 5 2 5 f f 5 5 5 . . 
                . 5 5 5 5 f 5 5 5 f 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . 5 5 5 5 f 5 2 5 f 5 5 5 5 . . 
                . 5 5 5 f f 2 2 2 f f 5 5 5 . . 
                . 5 5 5 f 2 2 f 2 2 f 5 5 5 . . 
                . 5 5 5 f 5 2 2 2 5 f 5 5 5 . . 
                . 5 5 5 f f 5 2 5 f f 5 5 5 . . 
                . 5 5 5 5 f 5 5 5 f 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . 5 5 5 5 5 5 2 5 5 5 5 5 5 . . 
                . 5 5 5 f f 2 2 2 f f 5 5 5 . . 
                . 5 5 5 f 2 2 f 2 2 f 5 5 5 . . 
                . 5 5 5 f 5 2 2 2 5 f 5 5 5 . . 
                . 5 5 5 f f 5 2 5 f f 5 5 5 . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . 5 5 5 5 5 5 2 5 5 5 5 5 5 . . 
                . 5 5 5 5 5 2 2 2 5 5 5 5 5 . . 
                . 5 5 5 f 2 2 f 2 2 f 5 5 5 . . 
                . 5 5 5 f 5 2 2 2 5 f 5 5 5 . . 
                . 5 5 5 5 5 5 2 5 5 5 5 5 5 . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . 5 5 5 5 5 5 2 5 5 5 5 5 5 . . 
                . 5 5 5 5 5 2 2 2 5 5 5 5 5 . . 
                . 5 5 5 f 2 2 f 2 2 f 5 5 5 . . 
                . 5 5 5 5 5 2 2 2 5 5 5 5 5 . . 
                . 5 5 5 5 5 5 2 5 5 5 5 5 5 . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . 5 5 5 5 5 5 2 5 5 5 5 5 5 . . 
                . 5 5 5 5 5 2 2 2 5 5 5 5 5 . . 
                . 5 5 5 5 2 2 f 2 2 5 5 5 5 . . 
                . 5 5 5 5 5 2 2 2 5 5 5 5 5 . . 
                . 5 5 5 5 5 5 2 5 5 5 5 5 5 . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . 5 5 5 5 5 5 2 5 5 5 5 5 5 . . 
                . 5 5 5 5 5 2 2 2 5 5 5 5 5 . . 
                . 5 5 5 5 2 2 f 2 2 5 5 5 5 . . 
                . 5 5 5 5 5 2 2 2 5 5 5 5 5 . . 
                . 5 5 5 5 5 5 2 5 5 5 5 5 5 . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . 5 5 5 5 5 5 2 5 5 5 5 5 5 . . 
                . 5 5 5 5 5 2 2 2 5 5 5 5 5 . . 
                . 5 5 5 5 2 2 f 2 2 5 5 5 5 . . 
                . 5 5 5 5 5 2 2 2 5 5 5 5 5 . . 
                . 5 5 5 5 5 5 2 5 5 5 5 5 5 . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . 5 5 5 5 5 5 2 5 5 5 5 5 5 . . 
                . 5 5 5 5 5 2 2 2 5 5 5 5 5 . . 
                . 5 5 5 5 2 2 f 2 2 5 5 5 5 . . 
                . 5 5 5 5 5 2 2 2 5 5 5 5 5 . . 
                . 5 5 5 5 5 5 2 5 5 5 5 5 5 . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . 2 2 2 2 2 2 2 2 2 . . . . 
                . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
                . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                . 2 2 2 2 2 2 f 2 2 2 2 2 2 . . 
                . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . 2 2 2 2 2 2 2 2 2 . . . . 
                . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
                . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                . 2 2 2 2 2 2 f 2 2 2 2 2 2 . . 
                . 2 2 2 2 2 f f f 2 2 2 2 2 . . 
                . 2 2 2 2 2 2 f 2 2 2 2 2 2 . . 
                . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . 2 2 2 2 2 2 2 2 2 . . . . 
                . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
                . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                . 2 2 2 2 2 2 f 2 2 2 2 2 2 . . 
                . 2 2 2 2 2 f f f 2 2 2 2 2 . . 
                . 2 2 2 2 f f f f f 2 2 2 2 . . 
                . 2 2 2 2 2 f f f 2 2 2 2 2 . . 
                . 2 2 2 2 2 2 f 2 2 2 2 2 2 . . 
                . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . 2 2 2 2 2 2 2 2 2 . . . . 
                . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
                . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                . 2 2 2 2 2 2 f 2 2 2 2 2 2 . . 
                . 2 2 2 2 2 f f f 2 2 2 2 2 . . 
                . 2 2 2 2 f f 4 f f 2 2 2 2 . . 
                . 2 2 2 2 2 f f f 2 2 2 2 2 . . 
                . 2 2 2 2 2 2 f 2 2 2 2 2 2 . . 
                . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . 2 2 2 2 2 2 2 2 2 . . . . 
                . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
                . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                . 2 2 2 2 2 2 f 2 2 2 2 2 2 . . 
                . 2 2 2 2 2 f f f 2 2 2 2 2 . . 
                . 2 2 2 2 f f 4 f f 2 2 2 2 . . 
                . 2 2 2 2 2 f f f 2 2 2 2 2 . . 
                . 2 2 2 2 2 2 f 2 2 2 2 2 2 . . 
                . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . 2 2 2 2 2 2 2 2 2 . . . . 
                . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
                . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                . 2 2 2 2 2 2 f 2 2 2 2 2 2 . . 
                . 2 2 2 2 2 f f f 2 2 2 2 2 . . 
                . 2 2 2 2 f f 4 f f 2 2 2 2 . . 
                . 2 2 2 2 2 f f f 2 2 2 2 2 . . 
                . 2 2 2 2 2 2 f 2 2 2 2 2 2 . . 
                . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f f . . . . . 
                . . . f f f f f f f f f . . . . 
                . . f f f f f f f f f f f . . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f 4 f f f f f f . . 
                . f f f f f f 4 f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . . f f f f f f f f f f f . . . 
                . . . f f f f f f f f f . . . . 
                . . . . f f f f f f f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f f . . . . . 
                . . . f f f f f f f f f . . . . 
                . . f f f f f f f f f f f . . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f 4 f f f f f f . . 
                . f f f f f f 4 f f f f f f . . 
                . f f f f f f 4 f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . . f f f f f f f f f f f . . . 
                . . . f f f f f f f f f . . . . 
                . . . . f f f f f f f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f f . . . . . 
                . . . f f f f f f f f f . . . . 
                . . f f f f f f f f f f f . . . 
                . f f f f f f 4 f f f f f f . . 
                . f f f f f f 4 f f f f f f . . 
                . f f f f f f 4 f f f f f f . . 
                . f f f f f f 4 f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . . f f f f f f f f f f f . . . 
                . . . f f f f f f f f f . . . . 
                . . . . f f f f f f f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f f . . . . . 
                . . . f f f f f f f f f . . . . 
                . . f f f f f 4 f f f f f . . . 
                . f f f f f f 4 f f f f f f . . 
                . f f f f f f 4 f f f f f f . . 
                . f f f f f f 4 f f f f f f . . 
                . f f f f f f 4 f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . . f f f f f f f f f f f . . . 
                . . . f f f f f f f f f . . . . 
                . . . . f f f f f f f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f f . . . . . 
                . . . f f f f 4 f f f f . . . . 
                . . f f f f f 4 f f f f f . . . 
                . f f f f f f 4 f f f f f f . . 
                . f f f f f f 4 f f f f f f . . 
                . f f f f f f 4 f f f f f f . . 
                . f f f f f f 4 f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . . f f f f f f f f f f f . . . 
                . . . f f f f f f f f f . . . . 
                . . . . f f f f f f f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f 4 4 4 f f . . . . . 
                . . . f f f f 4 f f f f . . . . 
                . . f f f f f 4 f f f f f . . . 
                . f f f f f f 4 f f f f f f . . 
                . f f f f f f 4 f f f f f f . . 
                . f f f f f f 4 f f f f f f . . 
                . f f f f f f 4 f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . . f f f f f f f f f f f . . . 
                . . . f f f f f f f f f . . . . 
                . . . . f f f f f f f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f 4 4 4 4 4 f . . . . . 
                . . . f f f f 4 f f f f . . . . 
                . . f f f f f 4 f f f f f . . . 
                . f f f f f f 4 f f f f f f . . 
                . f f f f f f 4 f f f f f f . . 
                . f f f f f f 4 f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . . f f f f f f f f f f f . . . 
                . . . f f f f f f f f f . . . . 
                . . . . f f f f f f f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 4 4 4 4 4 4 4 . . . . . 
                . . . f f f f 4 f f f f . . . . 
                . . f f f f f 4 f f f f f . . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . . f f f f f f f f f f f . . . 
                . . . f f f f f f f f f . . . . 
                . . . . f f f f f f f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 4 4 4 4 4 4 4 . . . . . 
                . . . 4 f f f f f f f 4 . . . . 
                . . f f f f f f f f f f f . . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . . f f f f f f f f f f f . . . 
                . . . f f f f f f f f f . . . . 
                . . . . f f f f f f f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 4 4 4 4 4 4 4 . . . . . 
                . . . 4 f f f f f f f 4 . . . . 
                . . f f f f f f f f f f f . . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f 8 f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . . f f f f f f f f f f f . . . 
                . . . f f f f f f f f f . . . . 
                . . . . f f f f f f f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 4 4 4 4 4 4 4 . . . . . 
                . . . 4 f f f f f f f 4 . . . . 
                . . f f f f f f f f f f f . . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f 8 f f f f f f . . 
                . f f f f f f 8 f f f f f f . . 
                . f f f f f f 8 f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . . f f f f f f f f f f f . . . 
                . . . f f f f f f f f f . . . . 
                . . . . f f f f f f f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 4 4 4 4 4 4 4 . . . . . 
                . . . 4 f f f f f f f 4 . . . . 
                . . f f f f f f f f f f f . . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f 8 f f f f f f . . 
                . f f f f f f 8 f f f f f f . . 
                . f f f f f f 8 f f f f f f . . 
                . f f f f f f 8 f f f f f f . . 
                . . f f f f f 8 f f f f f . . . 
                . . . f f f f f f f f f . . . . 
                . . . . f f f f f f f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 4 4 4 4 4 4 4 . . . . . 
                . . . 4 f f f f f f f 4 . . . . 
                . . f f f f f f f f f f f . . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f 8 f f f f f f . . 
                . f f f f f f 8 f f f f f f . . 
                . f f f f f f 8 f f f f f f . . 
                . f f f f f f 8 f f f f f f . . 
                . . f f f f f 8 f f f f f . . . 
                . . . f f f f 8 f f f f . . . . 
                . . . . f f f 8 f f f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 4 4 4 4 4 4 4 . . . . . 
                . . . 4 f f f f f f f 4 . . . . 
                . . f f f f f f f f f f f . . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f 8 f f f f f f . . 
                . f f f f f f 8 f f f f f f . . 
                . f f f f f f 8 f f f f f f . . 
                . . f f f f f 8 f f f f f . . . 
                . . . f f f f 8 f f f f . . . . 
                . . . . f f 8 8 8 f f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 4 4 4 4 4 4 4 . . . . . 
                . . . 4 f f f f f f f 4 . . . . 
                . . f f f f f f f f f f f . . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f 8 f f f f f f . . 
                . . f f f f f 8 f f f f f . . . 
                . . . f f f f 8 f f f f . . . . 
                . . . . f 8 8 8 8 8 f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 4 4 4 4 4 4 4 . . . . . 
                . . . 4 f f f f f f f 4 . . . . 
                . . f f f f f f f f f f f . . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . . f f f f f f f f f f f . . . 
                . . . f f f f 8 f f f f . . . . 
                . . . . 8 8 8 8 8 8 8 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 4 4 4 4 4 4 4 . . . . . 
                . . . 4 f f f f f f f 4 . . . . 
                . . f f f f f f f f f f f . . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f 2 f f f 2 f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . . f f f f f f f f f f f . . . 
                . . . 8 f f f f f f f 8 . . . . 
                . . . . 8 8 8 8 8 8 8 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            200,
            false
            )
            pause(8000)
            killer_45w49e.setImage(assets.image`myImage2`)
        } else {
            animation.runImageAnimation(
            killer_45w49e,
            [img`
                ....................
                ....................
                ....................
                ......fffffff.......
                .....fffffffff......
                ....fffffffffff.....
                ...fffffffffffff....
                ...fffffffffffff....
                ...ffff2fff2ffff....
                ...ffff2fff2ffff....
                ...ffff2fff2ffff....
                ...fffffffffffff....
                ...ff2fffffff2ff....
                ....ff2222222ff.....
                .....fffffffff......
                ......fffffff.......
                ....................
                ....................
                ....................
                ....................
                `,img`
                ....................
                ....................
                ....................
                ......fffffff.......
                .....fffffffff......
                ....fffffffffff.....
                ...fffffffffffff....
                ...fffffffffffff....
                ...ffff2fff2ffff....
                ...ffff2fff2ffff....
                ...ffff2fff2ffff....
                ...fffffffffffff....
                ..fff2fffffff2fff...
                ....ff2222222ff.....
                .....fffffffff......
                ......fffffff.......
                ....................
                ....................
                ....................
                ....................
                `,img`
                ....................
                ....................
                ....................
                ......fffffff.......
                .....fffffffff......
                ....fffffffffff.....
                ...fffffffffffff....
                ...fffffffffffff....
                ...ffff2fff2ffff....
                ...ffff2fff2ffff....
                ...ffff2fff2ffff....
                ...fffffffffffff....
                .ffff2fffffff2ffff..
                ....ff2222222ff.....
                .....fffffffff......
                ......fffffff.......
                ....................
                ....................
                ....................
                ....................
                `,img`
                ....................
                ....................
                ....................
                ......fffffff.......
                .....fffffffff......
                ....fffffffffff.....
                ...fffffffffffff....
                ...fffffffffffff....
                ...ffff2fff2ffff....
                ...ffff2fff2ffff....
                ...ffff2fff2ffff....
                ...fffffffffffff....
                .ffff2fffffff2ffff..
                .f..ff2222222ff..f..
                .....fffffffff......
                ......fffffff.......
                ....................
                ....................
                ....................
                ....................
                `,img`
                ....................
                ....................
                ....................
                ......fffffff.......
                .....fffffffff......
                ....fffffffffff.....
                ...fffffffffffff....
                ...fffffffffffff....
                ...ffff2fff2ffff....
                ...ffff2fff2ffff....
                ...ffff2fff2ffff....
                ...fffffffffffff....
                .ffff2fffffff2ffff..
                .f..ff2222222ff..f..
                .f...fffffffff...f..
                ......fffffff.......
                ....................
                ....................
                ....................
                ....................
                `,img`
                ....................
                ....................
                ....................
                ......fffffff.......
                .....fffffffff......
                ....fffffffffff.....
                ...fffffffffffff....
                ...fffffffffffff....
                ...ffff2fff2ffff....
                ...ffff2fff2ffff....
                ...ffff2fff2ffff....
                ...fffffffffffff....
                .ffff2fffffff2ffff..
                .f..ff2222222ff..f..
                ff...fffffffff...ff.
                ......fffffff.......
                ....................
                ....................
                ....................
                ....................
                `,img`
                ....................
                ....................
                ....................
                ......fffffff.......
                .....fffffffff......
                ....fffffffffff.....
                ...fffffffffffff....
                ...fffffffffffff....
                ...ffff2fff2ffff....
                ...ffff2fff2ffff....
                ...ffff2fff2ffff....
                ...fffffffffffff....
                .ffff2fffffff2ffff..
                .f..ff2222222ff..f..
                ff...fffffffff...ff.
                f.....fffffff.....f.
                ....................
                ....................
                ....................
                ....................
                `,img`
                ....................
                ....................
                ....................
                ......fffffff.......
                .....fffffffff......
                ....fffffffffff.....
                ...fffffffffffff....
                ...fffffffffffff....
                ...ffff2fff2ffff....
                ...ffff2fff2ffff....
                ...ffff2fff2ffff....
                ...fffffffffffff....
                .ffff2fffffff2ffff..
                .f..ff2222222ff..f..
                ff...fffffffff...ff.
                f.....fffffff.....f.
                f.................f.
                f.................f.
                ....................
                ....................
                `,img`
                ....................
                ....................
                ....................
                ......fffffff.......
                .....fffffffff......
                ....fffffffffff.....
                ...fffffffffffff....
                ...fffffffffffff....
                ...ffff2fff2ffff....
                ...ffff2fff2ffff....
                ...ffff2fff2ffff....
                ...fffffffffffff....
                .ffff2fffffff2ffff..
                .f..ff2222222ff..f..
                ff...fffffffff...ff.
                f.....fffffff.....f.
                f.................f.
                f.................f.
                f.................f.
                f.................f.
                `,img`
                ....................
                ....................
                ....................
                ......fffffff.......
                .....fffffffff......
                ....fffffffffff.....
                ...fffffffffffff....
                ...fffffffffffff....
                ...ffff2fff2ffff....
                ...ffff2fff2ffff....
                ...ffff2fff2ffff....
                ...fffffffffffff....
                .ffff2fffffff2ffff..
                .f..ff2222222ff..f..
                ff...fffffffff...ff.
                f.....fffffff.....f.
                f.................f.
                f.................f.
                f.................f.
                f.................f.
                `,img`
                ....................
                ....................
                ....................
                ......fffffff.......
                .....fffffffff......
                ....fffffffffff.....
                ...fffffffffffff....
                ...fffffffffffff....
                ...ffff2fff2ffff....
                ...ffff2fff2ffff....
                ...ffff2fff2ffff....
                ...fffffffffffff....
                .ffff2fffffff2ffff..
                .f..ff2222222ff..f..
                ff...fffffffff...ff.
                f....fffffffff....f.
                f...f.........f...f.
                f.................f.
                f.................f.
                f.................f.
                `,img`
                ....................
                ....................
                ....................
                ......fffffff.......
                .....fffffffff......
                ....fffffffffff.....
                ...fffffffffffff....
                ...fffffffffffff....
                ...ffff2fff2ffff....
                ...ffff2fff2ffff....
                ...ffff2fff2ffff....
                ...fffffffffffff....
                .ffff2fffffff2ffff..
                .f..ff2222222ff..f..
                ff...fffffffff...ff.
                f....fffffffff....f.
                f...f.........f...f.
                f...f.........f...f.
                f...f.........f...f.
                f...f.........f...f.
                `,img`
                ....................
                ....................
                ....................
                ......fffffff.......
                .....fffffffff......
                ....fffffffffff.....
                ...fffffffffffff....
                ...fffffffffffff....
                ...ffff2fff2ffff....
                ...ffff2fff2ffff....
                ...ffff2fff2ffff....
                ...fffffffffffff....
                .ffff2fffffff2ffff..
                .f..ff2222222ff..f..
                ff...fffffffff...ff.
                f....fffffffff....f.
                f...f..f..f...f...f.
                f...f..f..f...f...f.
                f...f.........f...f.
                f...f.........f...f.
                `,img`
                ....................
                ....................
                ....................
                ......fffffff.......
                .....fffffffff......
                ....fffffffffff.....
                ...fffffffffffff....
                ...fffffffffffff....
                ...ffff2fff2ffff....
                ...ffff2fff2ffff....
                ...ffff2fff2ffff....
                ...fffffffffffff....
                .ffff2fffffff2ffff..
                .f..ff2222222ff..f..
                ff...fffffffff...ff.
                f....fffffffff....f.
                f...f..f..f...f...f.
                f...f..f..f...f...f.
                f...f..f..f...f...f.
                f...f..f..f...f...f.
                `,img`
                ....................
                ....................
                ....................
                ......fffffff.......
                .....fffffffff......
                ....fffffffffff.....
                ...fffffffffffff....
                ...fffffffffffff....
                ...ffff2fff2ffff....
                ...ffff2fff2ffff....
                ...ffff2fff2ffff....
                ...fffffffffffff....
                .ffff2fffffff2ffff..
                .f..ff2222222ff..f..
                ff...fffffffff...ff.
                f....fffffffff....f.
                f...f..f..f...f...f.
                f...f..f..f...f...f.
                f...f..f..f...f...f.
                f...f..f..f...f...f.
                `],
            300,
            false
            )
            pause(7000)
            killer_45w49e.setImage(assets.image`myImage1`)
        }
        sprites.destroyAllSpritesOfKind(SpriteKind.Food, effects.none, 500)
        sprites.destroyAllSpritesOfKind(SpriteKind.door2, effects.none, 500)
        tiles.setCurrentTilemap(tilemap`level4`)
        for (let index = 0; index < 3; index++) {
            tiles.placeOnRandomTile(killer_45w49e, assets.tile`myTile27`)
        }
        key_3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f f f 1 1 1 1 1 f f . . . 
            . . . f 1 1 1 f f f 1 f f . . . 
            . . . f 1 f f f f f 1 f f . . . 
            . . . f 1 1 1 f f f 1 f f . . . 
            . . . f f f 1 1 1 1 1 f f . . . 
            . . . . f f f f f f f f . . . . 
            . . . . . . b b . . . . . . . . 
            . . . . . . b b . . . . . . . . 
            . . . . . . b b . . . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . b b . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.key)
        tiles.placeOnRandomTile(key_3, sprites.dungeon.floorLight2)
        door_3 = sprites.create(img`
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            ....2222.5e55e5..5e55e5..
            ..222992.5e55e5..5e55e5..
            .2299992.5e55e5..5e55e5..
            .2999992.5e55e5..5e55e5..
            b2222222.5e55e5..5e55e5..
            b222222222222222222222222
            b2fffff222222222222fffff2
            b2fbbbf222222222222fbbbf2
            b2fbbbf222222222222fbbbf2
            ..fffff............fffff.
            `, SpriteKind.door3)
        tiles.placeOnRandomTile(door_3, sprites.skillmap.islandTile4)
        kill = true
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite4, otherSprite4) {
    if (loser_LOL) {
        game.setGameOverMessage(false, "Loser")
    }
    if (kill) {
        game.gameOver(false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Door, function (sprite, otherSprite) {
    if (haveKey) {
        haveKey = false
        music.stopAllSounds()
        controller.moveSprite(Player_one, 0, 0)
        kill = false
        if (_666) {
            animation.runImageAnimation(
            killer_45w49e,
            assets.animation`breathing`,
            400,
            false
            )
            pause(7000)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.none, 100)
        } else if (set_colour == 1) {
            animation.runImageAnimation(
            killer_45w49e,
            assets.animation`myAnim2`,
            200,
            false
            )
            pause(6000)
        } else {
            animation.runImageAnimation(
            killer_45w49e,
            assets.animation`myAnim0`,
            200,
            false
            )
            pause(5000)
        }
        tiles.setCurrentTilemap(tilemap`level3`)
        tiles.placeOnRandomTile(Player_one, sprites.castle.tileGrass2)
        if (set_colour == 1) {
            killer_45w49e.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . 5 5 5 5 f 5 5 5 f 5 5 5 5 . . 
                . 5 5 5 5 f 5 5 5 f 5 5 5 5 . . 
                . 5 5 5 f f 5 5 5 f f 5 5 5 . . 
                . 5 5 5 f 5 5 2 5 5 f 5 5 5 . . 
                . 5 5 5 f 5 5 5 5 5 f 5 5 5 . . 
                . 5 5 5 f f 5 5 5 f f 5 5 5 . . 
                . 5 5 5 5 f 5 5 5 f 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . . . 5 5 5 5 5 5 5 5 5 . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        } else {
            killer_45w49e.setImage(assets.image`myImage0`)
        }
        tiles.placeOnRandomTile(killer_45w49e, assets.tile`myTile12`)
        controller.moveSprite(Player_one, 100, 100)
        kill = true
        pause(2000)
        sprites.destroyAllSpritesOfKind(SpriteKind.Door)
        key_2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 1 1 1 1 1 1 . . . . . . . 
            . . . 5 5 5 5 5 5 . . . . . . . 
            . . . 5 5 5 5 5 5 . . . . . . . 
            . . . 5 5 . . 5 5 1 . . . . . . 
            . . . 5 5 . . . 5 5 1 1 1 1 1 1 
            . . . 5 5 . . . 5 5 5 5 5 5 5 5 
            . . . 5 5 . . . 5 5 5 5 5 5 5 5 
            . . . 5 5 . . 5 5 5 . 5 . 5 . 5 
            . . . 5 5 5 5 5 5 5 . 5 . 5 . . 
            . . . 5 5 5 5 5 5 5 . 5 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        tiles.placeOnRandomTile(key_2, sprites.dungeon.floorLight0)
        door1 = sprites.create(assets.image`myImage`, SpriteKind.door2)
        tiles.placeOnRandomTile(door1, sprites.dungeon.floorLight0)
    }
})
info.onCountdownEnd(function () {
    killer_45w49e = sprites.create(assets.image`Entity`, SpriteKind.Enemy)
    if (set_colour == 1) {
        if (kill) {
            if (!(_666)) {
                animation.runImageAnimation(
                killer_45w49e,
                assets.animation`myAnim`,
                500,
                true
                )
            }
        }
    } else {
        killer_45w49e.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 1 1 1 1 1 1 1 f . . . . 
            . . f 1 1 1 1 1 1 1 1 1 f . . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . f 1 1 1 f 1 1 1 f 1 1 1 f . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . . f 1 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        animation.runImageAnimation(
        killer_45w49e,
        assets.animation`myAnim1`,
        500,
        true
        )
    }
    if (_666) {
        killer_45w49e.setImage(assets.image`666`)
    }
    tiles.placeOnRandomTile(killer_45w49e, assets.tile`myTile`)
    Key = sprites.create(assets.image`key`, SpriteKind.Food)
    tiles.placeOnRandomTile(Key, sprites.dungeon.floorDark0)
    killer_speed = 0
    animation.runImageAnimation(
    Key,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 1 1 1 1 1 1 1 . . . . . . . . 
        . 5 5 5 5 5 5 5 . . . . . . . . 
        . 5 . . . . . 5 . . . . . . . . 
        . 5 . . . . . 5 1 1 1 1 1 1 1 1 
        . 5 . . . . . 5 5 5 5 5 5 5 5 5 
        . 5 . . . . . 5 . . . 5 . 5 . 5 
        . 5 . . . . . 5 . . . . . 5 . 5 
        . 5 5 5 5 5 5 5 . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 1 1 1 1 1 1 1 . . . . . . . . 
        . 5 5 5 5 5 5 5 . . . . . . . . 
        . 5 . . . . . 5 . . . . . . . . 
        . 5 . . . . . 5 1 1 1 1 1 1 1 1 
        . 5 . . . . . 5 5 5 5 5 5 5 5 5 
        . 5 . . . . . 5 . . . 5 . 5 . 5 
        . 5 . . . . . 5 . . . . . 5 . 5 
        . 5 5 5 5 5 5 5 . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    Door_10 = sprites.create(img`
        b d d d d d d c b d d d d d d c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b b d b b b b b b b 
        c c c c c c b a c c c c c c b a 
        b d d d d d d c b d d d d d d c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b b d b b b b b b b 
        c c c c c c b a b c c c c c c a 
        `, SpriteKind.Door)
    tiles.placeOnRandomTile(Door_10, sprites.dungeon.floorDark0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.key, function (sprite2, otherSprite2) {
    haveKey = true
    sprites.destroyAllSpritesOfKind(SpriteKind.key)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite2, otherSprite2) {
    if (!(haveKey)) {
        haveKey = true
        Door_10.setImage(img`
            b d d d d d d c b d d d d d d c 
            d b b b b b b c d b b b b b b c 
            d b b b e e e e e e e e b b b c 
            d b b e e f f f f f f e e b b c 
            d b e f f f f f f f f f e b b c 
            d b e f f f f f f f f f f e b c 
            d b e f f f f f f f f f f e b b 
            c c e f f f f f f f f f f e b a 
            b d e f f f f f f f f f f e d c 
            d b e f f f f f f f f f f e b c 
            d b e f f f f f f f f f f e b c 
            d b e f f f f f f f f f e b b c 
            d b b e f f f f f f f e e b b c 
            d b b b e e f f f e e e b b b c 
            d b b b b e e e e b b b b b b b 
            c c c c c c b a b c c c c c c a 
            `)
        sprites.destroy(otherSprite2, effects.none, 100)
        tiles.placeOnRandomTile(Door_10, sprites.dungeon.floorDarkDiamond)
        Door_10.z = 0
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.door3, function (sprite, otherSprite) {
    if (haveKey) {
        game.gameOver(true)
    }
})
let path: tiles.Location[] = []
let Door_10: Sprite = null
let killer_speed = 0
let Key: Sprite = null
let door1: Sprite = null
let key_2: Sprite = null
let door_3: Sprite = null
let key_3: Sprite = null
let killer_45w49e: Sprite = null
let set_colour = 0
let loser_LOL = false
let _666 = false
let kill = false
let haveKey = false
let Player_one: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
Player_one = sprites.create(assets.image`brickhead`, SpriteKind.Player)
controller.moveSprite(Player_one)
scene.cameraFollowSprite(Player_one)
tiles.placeOnRandomTile(Player_one, sprites.dungeon.floorDark1)
haveKey = false
kill = true
music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.LoopingInBackground)
Player_one.z = 1
game.splash("the Basement ", "press \"A\" to start")
game.showLongText("recommend don't set speed for the chaser lower than 75 or higher tan 150", DialogLayout.Full)
let set_speed = game.askForNumber("set speed", 3, false)
if (set_speed == 666) {
    _666 = true
} else {
    _666 = false
}
if (set_speed < 76) {
    controller.moveSprite(Player_one, 1, 1)
    loser_LOL = true
} else {
	
}
set_colour = game.askForNumber("choose the Entity one or two?  ", 1, false)
info.startCountdown(3)
forever(function () {
    let heaven: number;
if (killer_45w49e) {
        heaven = 0
        if (kill) {
            if (!(_666)) {
                path = scene.aStar(killer_45w49e.tilemapLocation(), Player_one.tilemapLocation())
                scene.followPath(killer_45w49e, path, set_speed)
            } else {
                path = scene.aStar(killer_45w49e.tilemapLocation(), Player_one.tilemapLocation())
                scene.followPath(killer_45w49e, path, 115)
            }
        }
        if (heaven) {
            path = scene.aStar(killer_45w49e.tilemapLocation(), Player_one.tilemapLocation())
            scene.followPath(killer_45w49e, path, 100)
        }
    }
    pause(500)
})
