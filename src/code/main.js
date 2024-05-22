


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


function loopy(ms)
{
    requestAnimationFrame( loopy )

    // Delta Time 
    currentAnimationTime = ms / 1000 
    dt = currentAnimationTime - lastAnimationTime
    lastAnimationTime = currentAnimationTime 


    console.log( dt ) 

}



requestAnimationFrame( loopy )