document.addEventListener("keydown", e => {
  if (e.key === "ArrowUp" && game.snake.dy === 0) game.snake = {...game.snake, dx:0, dy:-1};
  if (e.key === "ArrowDown" && game.snake.dy === 0) game.snake = {...game.snake, dx:0, dy:1};
  if (e.key === "ArrowLeft" && game.snake.dx === 0) game.snake = {...game.snake, dx:-1, dy:0};
  if (e.key === "ArrowRight" && game.snake.dx === 0) game.snake = {...game.snake, dx:1, dy:0};

  if (e.key === "r") game.reset();
});
