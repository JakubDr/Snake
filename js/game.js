class Game {
  constructor() {
    this.canvas = document.getElementById("gameCanvas");
    this.ctx = this.canvas.getContext("2d");

    this.snake = new Snake();
    this.food = new Food();

    this.score = 0;
    this.bestScore = localStorage.getItem("bestScore") || 0;

    this.interval = 120;
    this.paused = false;

    this.loop();
  }

  loop() {
    this.timer = setInterval(() => this.update(), this.interval);
  }

  setSpeed(speed) {
    clearInterval(this.timer);
    this.interval = speed;
    this.loop();
  }

  togglePause() {
    this.paused = !this.paused;
  }

  restart() {
    clearInterval(this.timer);
    this.snake.reset();
    this.score = 0;
    this.paused = false;
    this.loop();
  }

  update() {
    if (this.paused) return;

    this.ctx.clearRect(0, 0, 400, 400);

    this.snake.update();

    if (this.snake.body[0].x === this.food.position.x &&
        this.snake.body[0].y === this.food.position.y) {
      this.snake.grow = true;
      this.food.spawn();
      this.score++;
    }

    if (this.snake.checkCollision(400, 400)) {
      if (this.score > this.bestScore) {
        localStorage.setItem("bestScore", this.score);
      }
      alert("Konec hry!");
      this.restart();
      return;
    }

    this.food.draw(this.ctx);
    this.snake.draw(this.ctx);

    document.getElementById("score").textContent = this.score;
    document.getElementById("bestScore").textContent =
      localStorage.getItem("bestScore") || 0;
  }
}

const game = new Game();
