document.addEventListener("keydown", e => {
  switch (e.key) {
    case "ArrowUp":
      if (snake.dy === 0) { snake.dx = 0; snake.dy = -1; }
      break;
    case "ArrowDown":
      if (snake.dy === 0) { snake.dx = 0; snake.dy = 1; }
      break;
    case "ArrowLeft":
      if (snake.dx === 0) { snake.dx = -1; snake.dy = 0; }
      break;
    case "ArrowRight":
      if (snake.dx === 0) { snake.dx = 1; snake.dy = 0; }
      break;
  }
});
