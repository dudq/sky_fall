let boardGame = new BoardGame();
let plane = new AirPlane(AIRPLANE_POSITION_X, AIRPLANE_POSITION_Y, AIRPLANE_WIDTH, AIRPLANE_HEIGHT);
let isGameOver = false;
boardGame.control();
boardGame.drawBoard();
boardGame.guide();
function start() {
    if (!isGameOver) {
        boardGame.drawBoard();
        showEnemy();
        plane.draw();
        plane.move();
        plane.shoot();
        boardGame.checkCrash();
        boardGame.drawScore();
        for (let i = 0; i < enemies.length; i++) {
            if (enemies[i].position_y > canvas.height) {
                isGameOver = true;
            }
        }
        requestAnimationFrame(start);
    } else {
        alert('Ket thuc');
    }
}
