class Game {
  constructor() {
    this.canvas = document.getElementById("gameCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.best = localStorage.getItem("best") || 0;
    document.getElementById("best").textContent = this.best;
    this.paused = false;

    this.initMenu();
    this.start();
  }

  initMenu() {
    this.difficultySelect = document.getElementById("difficulty");
    this.skinSelect = document.getElementById("skin");
    this.modeSelect = document.getElementById("mode");
    document.getElementById("restartBtn").addEventListener("click", () => this.restart());
    document.getElementById("pauseBtn").addEventListener("click", () => this.togglePause());
  }

  start() {
    this.snake = new Snake(this.skinSelect.value);
    this.food = new Food();
    this.bonus = null;
    this.obstacles = this.modeSelect.value === "walls" ? new Obstacles() : null;
    this.score = 0;

    clearInterval(this.loop);
    this.loop = setInterval(() => this.update(), parseInt(this.difficultySelect.value));
  }

  update() {
    if (this.paused) return;

    this.snake.move();

    if (this.snake.eat(this.food)) {
      this.snake.grow = true;
      this.food.spawn();
      this.score++;
    }

    if (Math.random() < 0.005 && !this.bonus) {
      this.bonus = new BonusFood();
    }

    if (this.bonus && this.snake.eat(this.bonus)) {
      this.snake.grow = true;
      this.score += 5;
      this.bonus = null;
    }

    if (
      this.snake.body[0].x < 0 || this.snake.body[0].x >= 500 ||
      this.snake.body[0].y < 0 || this.snake.body[0].y >= 500 ||
      (this.obstacles && this.obstacles.hit(this.snake)) ||
      this.snake.checkSelfCollision()
    ) {
      this.end();
    }

    this.draw();
    document.getElementById("score").textContent = this.score;
  }

  draw() {
    // grid
    this.ctx.fillStyle = "#111";
    this.ctx.fillRect(0,0,500,500);
    this.ctx.strokeStyle = "#222";
    for(let i=0;i<500;i+=20){
      this.ctx.beginPath();
      this.ctx.moveTo(i,0);
      this.ctx.lineTo(i,500);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.moveTo(0,i);
      this.ctx.lineTo(500,i);
      this.ctx.stroke();
    }

    this.food.draw(this.ctx);
    if(this.bonus) this.bonus.draw(this.ctx);
    if(this.obstacles) this.obstacles.draw(this.ctx);
    this.snake.draw(this.ctx);
  }

  end() {
    clearInterval(this.loop);
    if(this.score > this.best){
      localStorage.setItem("best", this.score);
    }
    setTimeout(()=>alert("Konec hry!"), 10);
  }

  restart() { this.start(); }
  togglePause() { this.paused = !this.paused; }
}

const game = new Game();
