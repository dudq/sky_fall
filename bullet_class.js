// let BULLET_POSITION_X = 400;
// let BULLET_POSITION_Y = 200;

function Bullet(position_x,position_y,width,height) {
    this.position_x = position_x ;
    this.position_y = position_y;
    this.width = width;
    this.height = height;
    this.speed = 10;
    this.draw = function () {
        let bulletPosition_x = this.position_x;
        let bulletPosition_y = this.position_y;
        let image = new Image();
        image.src = './image/bullet1.png';
        image.onload = function () {
            ctx.drawImage(image, bulletPosition_x, bulletPosition_y);
        }
    };
    this.move = function () {
        this.position_y -= this.speed;
    }
}


