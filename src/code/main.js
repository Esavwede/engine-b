


import engineB from "../lib/index.js" 

// Square Sample Code 
import createRect from "../lib/temp/funcs/createRect.js"
import updateCords from "../lib/temp/funcs/updateCords.js"




// Vars 
const { KeyboardController } = engineB 


// Canvas 
const canvas = document.getElementById("canvas")
canvas.width = 640
canvas.height = 480 

const ctx = canvas.getContext("2d") 



// Presets 
ctx.fillStyle = "blue"
ctx.strokeStyle = "orange" 


//  Game Loop 

var lastAnimationTime = 0 
var currentAnimationTime = 0 
var dt = 0 


// Game Entities 

var rect = createRect() 
var keyboardController = new KeyboardController() 


function loopy(ms)
{
    requestAnimationFrame( loopy )

    // Delta Time 
    currentAnimationTime = ms / 1000 
    dt = currentAnimationTime - lastAnimationTime
    lastAnimationTime = currentAnimationTime 


    // clear screen 
    ctx.save() 
    ctx.fillStyle = "pink"
    ctx.clearRect(0,0, canvas.width, canvas.height ) 
    ctx.fillRect( 0, 0, canvas.width, canvas.height ) 
    ctx.restore() 
    
    
    // Update Shape Position
    updateCords( rect )

    // Check for collision
    // Respond to collision


    // Draw new state 
    ctx.fillRect( rect.x , rect.y ,  rect.width, rect.height )

}



requestAnimationFrame( loopy )