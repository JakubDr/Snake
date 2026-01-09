document.addEventListener("keydown", e => {
  switch (e.key) {
    case "ArrowUp": game.snake.setDirection(0, -20); break;
    case "ArrowDown": game.snake.setDirection(0, 20); break;
    case "ArrowLeft": game.snake.setDirection(-20, 0); break;
    case "ArrowRight": game.snake.setDirection(20, 0); break;

    case " ": game.togglePause(); break;
    case "r": case "R": game.restart(); break;

    case "1": game.setSpeed(200); break;
    case "2": game.setSpeed(120); break;
    case "3": game.setSpeed(70); break;
  }
});