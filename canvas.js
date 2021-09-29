let canvas = document.getElementById('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

const bg1 = new Background('sprites/Background/bg1.png', canvas.width*3, canvas.height);
const bg2 = new Background2('sprites/Background/bg2.png', canvas.width*3, canvas.height);
const bg3 = new Background3('sprites/Background/bg3.png', canvas.width*3, canvas.height);
const bg4 = new Background4('sprites/Background/bg4.png', canvas.width*3, canvas.height);

const player = new Player(0, canvas.height*0.07)

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    bg1.update();
    bg1.draw();

    

    if (player.isflying && this.x < canvas.width/2 ){
        bg2.update();
        bg2.draw();
    }
    

    
    // bg3.update();
    // bg3.draw();

    // bg4.update();
    // bg4.draw();




    player.update('flying');
    player.draw('flying');
    
    requestAnimationFrame(animate);
}

animate()


document.addEventListener('keydown', key_down_listener)
document.addEventListener('keyup', key_up_listener)

function key_down_listener(event) {
    console.log('[hold]')
    player.move("keydown", event.key);
}

function key_up_listener(event) {
    console.log('[release]')
    player.move("keyup", event.key)
}