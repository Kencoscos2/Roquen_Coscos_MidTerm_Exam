class Background {
    constructor(imagePath, width, height) {
        this.image = new Image();
        this.image.src = imagePath;
        this.image.width = width;
        this.image.height = height;
        this.x = 0;
        this.minX = -this.image.width/2-715;
        this.speed = 10;


    }
    update() {
        this.x = this.x - this.speed;

            if (this.x < this.minX){
                this.speed = 0;
        }
        }

    draw() {
       
    context.drawImage(
           this.image, 
           this.x, 0, 
           this.image.width, 
           this.image.height);
    }
}

class Background2 {
    constructor(imagePath, width, height) {
        this.image = new Image();
        this.image.src = imagePath;
        this.image.width = width;
        this.image.height = height;
        this.x = 0;
        this.minX = -this.image.width/2-715;
        this.speed = 10;


    }
    update() {
        this.x = this.x - this.speed;

            if (this.x < this.minX){
                this.speed = 0;
        }
        }

    draw() {
       
    context.drawImage(
           this.image, 
           this.x, 0, 
           this.image.width, 
           this.image.height);
    }
}

class Background3 {
    constructor(imagePath, width, height) {
        this.image = new Image();
        this.image.src = imagePath;
        this.image.width = width;
        this.image.height = height;
        this.x = 0;
        this.minX = -this.image.width/2-715;
        this.speed = 10;


    }
    update() {
        this.x = this.x - this.speed;

            if (this.x < this.minX){
                this.speed = 0;
        }
        }

    draw() {
       
    context.drawImage(
           this.image, 
           this.x, 0, 
           this.image.width, 
           this.image.height);
    }
}

class Background4 {
    constructor(imagePath, width, height) {
        this.image = new Image();
        this.image.src = imagePath;
        this.image.width = width;
        this.image.height = height;
        this.x = 0;
        this.minX = -this.image.width/2-715;
        this.speed = 10;


    }
    update() {
        this.x = this.x - this.speed;

            if (this.x < this.minX){
                this.speed = 0;
        }
        }

    draw() {
       
    context.drawImage(
           this.image, 
           this.x, 0, 
           this.image.width, 
           this.image.height);
    }
}