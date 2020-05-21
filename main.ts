controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Wall = sprites.createProjectileFromSprite(img`
c c c c c c c c c c c c c c c c 
c . . . . . . . . . . . . . . c 
c . . . . . . . . . . . . . . c 
c . . . . . . . . . . . . . . c 
c . . . . . . . . . . . . . . c 
c . . . . . . . . . . . . . . c 
c . . . . . . . . . . . . . . c 
c . . . . . . . . . . . . . . c 
c . . . . . . . . . . . . . . c 
c . . . . . . . . . . . . . . c 
c . . . . . . . . . . . . . . c 
c . . . . . . . . . . . . . . c 
c . . . . . . . . . . . . . . c 
c . . . . . . . . . . . . . . c 
c . . . . . . . . . . . . . . c 
c c c c c c c c c c c c c c c c 
`, MC, 5, 5)
    pause(2000)
    Wall.destroy(effects.disintegrate, 200)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Hero_Shot = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 8 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, MC, 50, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    otherSprite.destroy(effects.disintegrate, 200)
})
let Super_Boss_Blast: Sprite = null
let Boss_Blast: Sprite = null
let Hero_Shot: Sprite = null
let Wall: Sprite = null
let MC: Sprite = null
MC = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let MB = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . c . . . . . . . . 
. . . . . . c c c . . . . . . . 
. . . . . . . c . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
MB.setFlag(SpriteFlag.StayInScreen, true)
MC.setFlag(SpriteFlag.StayInScreen, true)
scene.setBackgroundColor(6)
MB.setPosition(144, 59)
controller.moveSprite(MC, 75, 75)
forever(function () {
    for (let index = 0; index < 1; index++) {
        MB.setVelocity(-50, 0)
        pause(2000)
        MB.setVelocity(100, 0)
    }
    pause(3000)
    for (let index = 0; index < 1; index++) {
        MB.setVelocity(-25, -35)
        pause(2000)
        MB.setVelocity(0, 0)
        Boss_Blast = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 3 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, MB, 0, 0)
        Boss_Blast.follow(MC, 100)
        pause(2000)
        MB.setVelocity(50, 35)
        pause(1500)
        MB.setVelocity(0, 0)
    }
    pause(500)
    for (let index = 0; index < 2; index++) {
        Boss_Blast = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 3 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, MB, 0, 0)
        Boss_Blast.follow(MC, 100)
    }
    pause(200)
    for (let index = 0; index < 1; index++) {
        MB.setVelocity(-75, 0)
        pause(1500)
        MB.setVelocity(100, 0)
    }
    pause(2000)
    for (let index = 0; index < 1; index++) {
        MB.setVelocity(0, 50)
        Boss_Blast = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 3 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, MB, 0, 0)
        Boss_Blast.follow(MC, 100)
        pause(1000)
        MB.setVelocity(0, -50)
        pause(1000)
        MB.setVelocity(0, 0)
    }
    pause(1000)
    for (let index = 0; index < 1; index++) {
        if (Math.percentChance(75)) {
            for (let index = 0; index < 3; index++) {
                Boss_Blast = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 3 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, MB, 0, 0)
                Boss_Blast.follow(MC, 100)
            }
        } else {
            Super_Boss_Blast = sprites.createProjectileFromSprite(img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, MB, -60, randint(3, 47))
        }
    }
    pause(1000)
})
