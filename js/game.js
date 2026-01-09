const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const size = 25;
const snake = new Snake();
let food = new Food();
let score = 0;

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  snake.move();

  // kolize s jídlem
  if (snake.body[0].x === food.x && snake.body[0].y === food.y) {
    snake.grow();
    food = new Food();
    score++;
  }

  snake.draw(ctx, size);
  food.draw(ctx, size);

  // skóre
  ctx.fillStyle = "#e5e7eb";
  ctx.fillText("Skóre: " + score, 10, 20);

  setTimeout(gameLoop, 120);
}

gameLoop();
