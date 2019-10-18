function BoardGame() {
    this.score = 0;
    this.control = function () {
        document.addEventListener('keydown', function (event) {
            if (event.keyCode === 37) {
                plane.isMoveLeft = true;
            } else if (event.keyCode === 39) {
                plane.isMoveRight = true;
            } else if (event.keyCode === 32) {
                plane.isShoot = true;
            }
        });
        document.addEventListener('keyup', function (event) {
            if (event.keyCode === 37) {
                plane.isMoveLeft = false;
            } else if (event.keyCode === 39) {
                plane.isMoveRight = false;
            } else if (event.keyCode === 32) {
                plane.isShoot = false;
            }
        });
        document.addEventListener('keypress', function () {
            if (event.keyCode === 13) {
                start();
            }

        });
    };

    this.crash = function (enemy, bullet) {
        let leftEnemy = enemy.position_x;
        let rightEnemy = enemy.position_x + enemy.width;
        let topEnemy = enemy.position_y;
        let bottomEnemy = enemy.position_y + enemy.height;
        let leftBullet = bullet.position_x;
        let rightBullet = bullet.position_x + bullet.width;
        let topBullet = bullet.position_y;
        let bottomBullet = bullet.position_y + bullet.height;
        let checkPosition = leftBullet > rightEnemy || rightBullet < leftEnemy || topBullet > bottomEnemy || bottomBullet < topEnemy;
        if (checkPosition) {
            return false;
        } else {
            return true;
        }
    };
    this.checkCrash = function () {
        for (let i = 0; i < enemies.length; i++) {
            for (let j = 0; j < plane.bullets.length; j++) {
                if (this.crash(enemies[i], plane.bullets[j])) {
                    enemies[i].isLive = false;
                    plane.bullets.splice(j,1); //xoa bullet
                    j--;
                }
            }
            if (!enemies[i].isLive) {
                enemies.splice(i, 1); //xoa enemy
                this.score++;
                i--;
            }
            if (enemies.length === 0) {
                creat30Enemy();
                showEnemy();
            }
        }
    };
    this.drawBoard = function () {
        ctx.beginPath();
        let image = new Image();
        image.src = './image/boardGame.png';
        image.onload = function () {
            ctx.drawImage(image, 0, 0);
        };
        ctx.closePath();
    };
    this.drawScore = function () {
        ctx.beginPath();
        ctx.font = '15px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText('Score: '+this.score,10,10);
        ctx.closePath();
    };
    this.guide = function () {
        // ctx.beginPath();
        ctx.font ='40px Arial';
        ctx.fillStyle = 'White';
        ctx.fillText('Ấn Enter để bắt đầu chơi',100,250);
        // ctx.closePath();
    }
}

// let boardGame  = new BoardGame();
// boardGame.init();

