class Game {
  constructor() {
    this.canvas = document.getElementById("gameCanvas");
    this.ctx = this.canvas.getContext("2d");

    this.snake = new Snake();
    this.food = new Food(20, this.canvas.width, this.canvas.height);
    this.score = 0;
    this.running = true;

    this.loop = setInterval(() => this.update(), 120);
  }

  update() {
    if (!this.running) return;

    this.snake.move();

    if (this.snake.eat(this.food)) {
      this.food.spawn();
      this.score++;
      document.getElementById("score").textContent = this.score;
    }

    if (
      this.snake.hitWall(this.canvas.width, this.canvas.height) ||
      this.snake.hitSelf()
    ) {
      this.running = false;
      alert("💀 Konec hry! Skóre: " + this.score);
    }

    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.food.draw(this.ctx);
    this.snake.draw(this.ctx);
  }

  restart() {
    this.snake.reset();
    this.food.spawn();
    this.score = 0;
    this.running = true;
    document.getElementById("score").textContent = 0;
  }
}

const game = new Game();
