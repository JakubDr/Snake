document.addEventListener("keydown", e => {
  if (!game || !game.snake) return;

  if (e.key === "ArrowUp" && game.snake.dy === 0) {
    game.snake.dx = 0;
    game.snake.dy = -1;
  }

  if (e.key === "ArrowDown" && game.snake.dy === 0) {
    game.snake.dx = 0;
    game.snake.dy = 1;
  }

  if (e.key === "ArrowLeft" && game.snake.dx === 0) {
    game.snake.dx = -1;
    game.snake.dy = 0;
  }

  if (e.key === "ArrowRight" && game.snake.dx === 0) {
    game.snake.dx = 1;
    game.snake.dy = 0;
  }

  if (e.key === "r" || e.key === "R") {
    game.reset();
  }
});
