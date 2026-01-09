class Game {
  constructor() {
    this.canvas = document.getElementById("gameCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.best = localStorage.getItem("best") || 0;
    document.getElementById("best").textContent = this.best;
    this.start();
  }

  start() {
    this.snake = new Snake(skin.value);
    this.food = new Food();
    this.bonus = null;
    this.obstacles = mode.value === "walls" ? new Obstacles() : null;
    this.score = 0;
    this.paused = false;

    clearInterval(this.loop);
    this.loop = setInterval(() => this.update(), difficulty.value);
  }

  update() {
    if (this.paused) return;

    this.snake.move();

    if (this.snake.eat(this.food)) {
      this.food.spawn();
      this.score++;
    }

    if (Math.random() < 0.005 && !this.bonus) {
      this.bonus = new BonusFood();
    }

    if (this.bonus && this.snake.eat(this.bonus)) {
      this.score += 5;
      this.bonus = null;
    }

    if (
      this.snake.body[0].x < 0 ||
      this.snake.body[0].x >= 500 ||
      this.snake.body[0].y < 0 ||
      this.snake.body[0].y >= 500 ||
      (this.obstacles && this.obstacles.hit(this.snake))
    ) {
      this.end();
    }

    this.draw();
    document.getElementById("score").textContent = this.score;
  }

  draw() {
    this.ctx.clearRect(0,0,500,500);
    this.food.draw(this.ctx);
    if (this.bonus) this.bonus.draw(this.ctx);
    if (this.obstacles) this.obstacles.draw(this.ctx);
    this.snake.draw(this.ctx);
  }

  end() {
    clearInterval(this.loop);
    if (this.score > this.best) {
      localStorage.setItem("best", this.score);
    }
    alert("Konec hry!");
  }

  restart() {
    this.start();
  }
}

const game = new Game();
