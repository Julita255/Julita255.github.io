// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("kartka","swiateczna.png")

loadSprite("nogizlaczone","mikolaj2.png")

loadSprite("nogirozdzielone","mikolaj.png")

loadSound("muzyka","muzyka.mp3")

let rozwarte=false
add([
    sprite("kartka"),
    pos(0,0)
])

const nogi = add([
    sprite("nogizlaczone"),
    pos(270,94)
])



loop(1, ()=>{

    if(rozwarte)

    {
        nogi.use(sprite("nogizlaczone"))
        rozwarte=false
    }

    else
    
    {
        nogi.use(sprite("nogirozdzielone")) 
        rozwarte=true
    }

    
})

onMouseRelease(()=>play("muzyka"))