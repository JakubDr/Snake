class Game {
  constructor() {
    this.canvas = document.getElementById("game");
    this.ctx = this.canvas.getContext("2d");
    this.size = 25;
    this.reset();
  }

  reset() {
    this.snake = new Snake();
    this.food = this.randomFood();
    this.score = 0;
    this.speed = 130;
    this.running = true;
    clearInterval(this.loop);
    this.loop = setInterval(() => this.update(), this.speed);
  }

  randomFood() {
    const types = ["normal", "bonus", "slow"];
    return new Food(types[Math.floor(Math.random() * types.length)]);
  }

  update() {
    this.ctx.clearRect(0, 0, 500, 500);
    this.snake.move();

    const head = this.snake.body[0];

    // kolize se zdí
    if (head.x < 0 || head.y < 0 || head.x >= 20 || head.y >= 20) {
      this.gameOver();
      return;
    }

    // jídlo
    if (head.x === this.food.x && head.y === this.food.y) {
      this.snake.grow();

      if (this.food.type === "bonus") this.score += 3;
      else this.score++;

      if (this.food.type === "slow") {
        this.speed += 20;
        clearInterval(this.loop);
        this.loop = setInterval(() => this.update(), this.speed);
      }

      this.food = this.randomFood();
    }

    this.food.draw(this.ctx, this.size);
    this.snake.draw(this.ctx, this.size);

    this.ctx.fillStyle = "#e5e7eb";
    this.ctx.fillText("Skóre: " + this.score, 10, 20);
  }

  gameOver() {
    clearInterval(this.loop);
    this.ctx.fillStyle = "white";
    this.ctx.font = "20px Arial";
    this.ctx.fillText("GAME OVER (R = restart)", 110, 250);
  }
}

const game = new Game();
