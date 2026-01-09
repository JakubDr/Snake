const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  moveSnake();
  drawFood(ctx);
  drawSnake(ctx);

  if (snake[0].x === food.x && snake[0].y === food.y) {
    snake.push({ ...snake[snake.length - 1] });
    food = randomFood();
  }
}

setInterval(gameLoop, 150);
