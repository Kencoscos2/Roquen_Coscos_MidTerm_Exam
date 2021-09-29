class Player {
    constructor(posX, posY) {
        this.spritesheet_fly = new Image();
        this.spritesheet_fly.src = "sprites/plane/Fly/spritesheet.png";

        this.x = posX;
        this.y = posY;
        this.imageWidth = canvas.width
        this.imageHeight = canvas.height

        this.gameFrame = 0;
        this.frameSpeed = 5;

        this.movement = {
            LEFT : false,
            RIGHT : false,
            UP: false,
            DOWN : false,
        }

        this.keyCodes = {
            UP : "ArrowUp",
            LEFT : "ArrowLeft",
            RIGHT : "ArrowRight",
            DOWN : "ArrowDown",
            UP : "w",
            LEFT : "a",
            DOWN : "s",
            RIGHT: "d"

        }

        this.actions = {
            'flying' : {
                'spritesheet' : this.spritesheet_fly,
                'frame_counter' : 0,
                'spriteWidth' : 444,
                'spriteHeight': 303,
                'speed' : 15,
            }
        }  
    }

    move(keyType, key) {
        console.log(key)
        if (keyType == "keydown") {
            if (key == this.keyCodes.RIGHT) {
                this.movement.RIGHT = true;
            }

            if (key == this.keyCodes.LEFT ) {
                this.movement.LEFT = true;  
            }

            if (key == this.keyCodes.UP ) {
                this.movement.UP = true
            }

            if (key == this.keyCodes.DOWN ) {
                this.movement.DOWN = true
            }
        }
        if (keyType == "keyup") {
            if (key == this.keyCodes.RIGHT ) {
                this.movement.RIGHT = false;
            }

            if (key == this.keyCodes.LEFT ) {
                this.movement.LEFT = false
            }
            if (key == this.keyCodes.UP ){
                this.movement.UP = false
            }
            if (key == this.keyCodes.DOWN ){
                this.movement.DOWN = false
            }
        }
    }

    isflying() {
        if (this.movement.RIGHT || this.movement.LEFT || this.movement.DOWN || this.movement.UP) {
            return true;
        }

        else {
            return false;
        }
    }
   update(action) {
        if (this.gameFrame % this.frameSpeed == 0) {
                if (this.movement.RIGHT && this.x < canvas.width-200 ) {
                    this.x = this.x + this.actions[action].speed
            }
               else if (this.movement.LEFT && this.x > canvas.width - 1900) {
                    this.x = this.x - this.actions[action].speed
            }
               else if (this.movement.UP && this.y > canvas.height - 943 ){
                    this.y = this.y - this.actions[action].speed
                }
                else  if (this.movement.DOWN && this.y < canvas.height - 100){
                    this.y = this.y + this.actions[action].speed

                     }
                } 

            if (action == "flying") {
                this.actions[action].frame_counter++;
    
                if (this.actions[action].frame_counter > 1) {
                    this.actions[action].frame_counter = 0;
                }
            }
        

        this.gameFrame++;
    }

    draw(action) {
        context.drawImage(
            this.actions[action].spritesheet, 
            this.actions[action].frame_counter*this.actions[action].spriteWidth, 
            0, 
            this.actions[action].spriteWidth, 
            this.actions[action].spritesheet.height, 
            this.x, 
            this.y, 
            canvas.width*0.1, 
            canvas.height*0.1
        )
    }
}
