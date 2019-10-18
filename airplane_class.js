
// let AIRPLANE_POSITION_Y = 500;
function AirPlane(position_x,position_y,width,height){
    this.position_x = position_x;
    this.position_y = position_y;
    this.width = width;
    this.height = height;
    this.speed =10;
    this.isShoot = false;
    this.isMoveLeft = false;
    this.isMoveRight = false;
    this.bullets = [];
    this.reloadTime = 5;
    this.reload =5;
    this.image = './image/plane1.png';
    this.draw = function() {
        let position_x = this.position_x;
        let position_y = this.position_y;
        let image = new Image();
        image.src  = this.image;
        image.onload = function () {
            ctx.drawImage(image,position_x,position_y);
        }
    };
    this.moveRight = function () {
        this.position_x += this.speed;
    };
    this.moveLeft = function () {
        this.position_x -= this.speed;
    };
    this.move = function () {
        if (this.isMoveLeft){
            this.moveLeft();
        } else if (this.isMoveRight){
            this.moveRight();
        }
        if (this.position_x<(-this.width/2)){
            this.position_x = canvas.width - this.width/2;
        } else if(this.position_x>(canvas.width-this.width/2)){
            this.position_x = -this.width/2
        }
    };
    this.shoot = function () {

        if(this.isShoot){
            this.reload ++;
            if (this.reload>=this.reloadTime) {
                let bullet_x = this.position_x + this.width / 2 - BULLET_WIDTH / 2;
                let bullet = new Bullet(bullet_x, this.position_y, BULLET_WIDTH, BOARDGAME_HEIGHT);
                this.bullets.push(bullet);
                this.reload =0;
            }
        }
        //ve bullet va xoa bullet neu ra khoi man hinh
      for (let i=0;i<this.bullets.length;i++){
          if (this.bullets[i].position_y<0){
              this.bullets.splice(i,1);
              i--;
          } else {
              this.bullets[i].draw();
              this.bullets[i].move();
          }
      }

    };
}
// let plane = new AirPlane();
// plane.show();
