@namespace
class SpriteKind:
    Door = SpriteKind.create()
    door2 = SpriteKind.create()

def on_on_overlap(sprite3, otherSprite3):
    if haveKey:
        game.game_over(True)
sprites.on_overlap(SpriteKind.player, SpriteKind.door2, on_on_overlap)

def on_on_overlap2(sprite4, otherSprite4):
    if loser_LOL:
        game.set_game_over_message(False, "Loser")
    if kill:
        game.game_over(False)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap2)

def on_on_overlap3(sprite, otherSprite):
    global haveKey, kill, key_2, door1
    if haveKey:
        haveKey = False
        music.stop_all_sounds()
        controller.move_sprite(Player_one, 0, 0)
        kill = False
        if _666:
            animation.run_image_animation(killer_45w49e,
                assets.animation("""
                    breathing
                    """),
                400,
                False)
            pause(7000)
            sprites.destroy_all_sprites_of_kind(SpriteKind.enemy, effects.none, 100)
            game.game_over(True)
        elif set_colour == 1:
            animation.run_image_animation(killer_45w49e,
                assets.animation("""
                    myAnim2
                    """),
                200,
                False)
            pause(4000)
        else:
            animation.run_image_animation(killer_45w49e,
                assets.animation("""
                    myAnim0
                    """),
                200,
                False)
            pause(5000)
        tiles.set_current_tilemap(tilemap("""
            level3
            """))
        tiles.place_on_random_tile(Player_one, sprites.castle.tile_grass2)
        if set_colour == 1:
            killer_45w49e.set_image(img("""
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
                """))
        else:
            killer_45w49e.set_image(assets.image("""
                myImage0
                """))
        tiles.place_on_random_tile(killer_45w49e, assets.tile("""
            myTile12
            """))
        controller.move_sprite(Player_one, 100, 100)
        kill = True
        pause(2000)
        sprites.destroy_all_sprites_of_kind(SpriteKind.Door)
        key_2 = sprites.create(img("""
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
                """),
            SpriteKind.food)
        tiles.place_on_random_tile(key_2, sprites.dungeon.floor_light0)
        door1 = sprites.create(assets.image("""
            myImage
            """), SpriteKind.door2)
        tiles.place_on_random_tile(door1, sprites.dungeon.floor_light0)
sprites.on_overlap(SpriteKind.player, SpriteKind.Door, on_on_overlap3)

def on_countdown_end():
    global killer_45w49e, Key, killer_speed, Door_10
    killer_45w49e = sprites.create(assets.image("""
        Entity
        """), SpriteKind.enemy)
    if set_colour == 1:
        if kill:
            if not (_666):
                animation.run_image_animation(killer_45w49e,
                    assets.animation("""
                        myAnim
                        """),
                    500,
                    True)
    else:
        killer_45w49e.set_image(img("""
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
            """))
        animation.run_image_animation(killer_45w49e,
            assets.animation("""
                myAnim1
                """),
            500,
            True)
    if _666:
        killer_45w49e.set_image(assets.image("""
            666
            """))
    tiles.place_on_random_tile(killer_45w49e, assets.tile("""
        myTile
        """))
    Key = sprites.create(assets.image("""
        key
        """), SpriteKind.food)
    tiles.place_on_random_tile(Key, sprites.dungeon.floor_dark0)
    killer_speed = 0
    animation.run_image_animation(Key,
        [img("""
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
                """),
            img("""
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
                """)],
        500,
        True)
    Door_10 = sprites.create(img("""
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
            """),
        SpriteKind.Door)
    tiles.place_on_random_tile(Door_10, sprites.dungeon.floor_dark0)
info.on_countdown_end(on_countdown_end)

def on_on_overlap4(sprite2, otherSprite2):
    global haveKey
    if not (haveKey):
        haveKey = True
        Door_10.set_image(img("""
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
            """))
        sprites.destroy(otherSprite2, effects.none, 100)
        tiles.place_on_random_tile(Door_10, sprites.dungeon.floor_dark_diamond)
        Door_10.z = 0
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap4)

path: List[tiles.Location] = []
Door_10: Sprite = None
killer_speed = 0
Key: Sprite = None
door1: Sprite = None
key_2: Sprite = None
killer_45w49e: Sprite = None
set_colour = 0
loser_LOL = False
_666 = False
kill = False
haveKey = False
Player_one: Sprite = None
tiles.set_current_tilemap(tilemap("""
    level1
    """))
Player_one = sprites.create(assets.image("""
    brickhead
    """), SpriteKind.player)
controller.move_sprite(Player_one)
scene.camera_follow_sprite(Player_one)
tiles.place_on_random_tile(Player_one, sprites.dungeon.floor_dark1)
haveKey = False
kill = True
music.play(music.create_song(hex("""
        00780004080200
        """)),
    music.PlaybackMode.LOOPING_IN_BACKGROUND)
Player_one.z = 1
game.splash("the Basement ", "press \"A\" to start")
game.show_long_text("recommend don't set speed for the chaser lower than 75 or higher tan 150",
    DialogLayout.FULL)
set_speed = game.ask_for_number("set speed", 3, False)
if set_speed == 666:
    _666 = True
else:
    _666 = False
if set_speed < 76:
    controller.move_sprite(Player_one, 1, 1)
    loser_LOL = True
else:
    pass
set_colour = game.ask_for_number("choose the Entity one or two?  ", 1, False)
info.start_countdown(3)

def on_forever():
    global path
    if killer_45w49e:
        heaven = 0
        if kill:
            if not (_666):
                path = scene.a_star(killer_45w49e.tilemap_location(),
                    Player_one.tilemap_location())
                scene.follow_path(killer_45w49e, path, set_speed)
            else:
                path = scene.a_star(killer_45w49e.tilemap_location(),
                    Player_one.tilemap_location())
                scene.follow_path(killer_45w49e, path, 115)
        if heaven:
            path = scene.a_star(killer_45w49e.tilemap_location(),
                Player_one.tilemap_location())
            scene.follow_path(killer_45w49e, path, 100)
    pause(500)
forever(on_forever)
