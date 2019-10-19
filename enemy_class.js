let enemies =[];
function Enemy(position_x,position_y,width,height) {
    // vung duoc xuat hien cua may bay
    this.position_x = position_x;
    this.position_y = position_y;
    this.width = width;
    this.height = height;
    this.speed = 2;
    this.isLive = true;
    this.image = './image/enemy1.png';
    this.draw = function () {
        let position_x = this.position_x;
        let position_y = this.position_y;
        let image = new Image();
        image.src = this.image ;
        image.onload = function () {
            ctx.drawImage(image,position_x,position_y);
        }
    };
    this.move = function () {
        this.position_y += this.speed;
    };
}
function creatEnemy() {
    let position_x = Math.floor(Math.random()*(canvas.width - ENEMY_WIDTH));
    let position_y = Math.floor(Math.random()*(0-canvas.height/2));
    let newEnemy = new Enemy(position_x,position_y,ENEMY_WIDTH,ENEMY_HEIGHT);
    enemies.push(newEnemy);
}
function creat30Enemy() {
    for (let i= 0;i<30;i++){
        creatEnemy();
    }
}
creat30Enemy();
function showEnemy() {
    for (let i=0;i<enemies.length;i++){
        enemies[i].draw();
        enemies[i].move();
    }
}
