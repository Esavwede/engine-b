


class KeyboardController 
{

    constructor()
    {
        this.pos = { x: 1, y: 1} 
        this.keys = { SpaceKey: false } 
        this.arrowKeys = { ArrowUp: true, ArrowDown: true, ArrowRight: true, ArrowLeft: true } 


        // Bind Event Handler 
        document.addEventListener("keydown",(e)=>{

            const key = e.key.toLowerCase() 

            if( this.arrowKeys[key] )
            {
                e.preventDefault() 
            }


            console.log( key ) 


            // Check Key
            switch( key )
            {

                case "arrowup": 
                case "w":
        
                                    console.log(" Going Up ") 
                                    this.pos.y = -1 
                                    break

                        
                case "arrowdown":
                case  "s":
                                    console.log(" Going Down") 
                                    this.pos.y = 1
                                    break

                
                case "arrowleft":
                case "a":
                                    console.log(" Going Left") 
                                    this.pos.x = -1 
                                    break


                case "arrowright":
                case "d":
                                    console.log(" Going Right ") 
                                    this.pos.x = 1
                                    break

                case " ":
                                    console.log(" Firing ") 
                                    this.keys['SpaceKey'] = true 
                                    break

                default: 
                                    console.log(" Not an action key ")
            }
        })
    }

    getX()
    {
        return this.x 
    }

    getY()
    {
        return this.y 
    }

    getActionKey()
    {
        return this.keys['SpaceKey'] 
    }

}



export default KeyboardController 