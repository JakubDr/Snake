class Game {
  // hlavní třída, která řídí celou hru

  constructor() {
    // načtení canvasu a 2D kontextu
    this.canvas = document.getElementById("gameCanvas");
    this.ctx = this.canvas.getContext("2d");

    // načtení nejlepšího skóre z localStorage
    this.best = localStorage.getItem("best") || 0;
    document.getElementById("best").textContent = this.best;

    // hra není na začátku pozastavená
    this.paused = false;

    // inicializace menu a spuštění hry
    this.initMenu();
    this.start();
  }

  initMenu() {
    // načtení ovládacích prvků z menu
    this.difficultySelect = document.getElementById("difficulty");
    this.skinSelect = document.getElementById("skin");
    this.modeSelect = document.getElementById("mode");

    // tlačítka pro restart a pauzu
    document.getElementById("restartBtn")
      .addEventListener("click", () => this.restart());
    document.getElementById("pauseBtn")
      .addEventListener("click", () => this.togglePause());
  }

  start() {
    // vytvoření nových objektů pro novou hru
    this.snake = new Snake(this.skinSelect.value);
    this.food = new Food();
    this.bonus = null;

    // podle módu se zapnou nebo vypnou překážky
    this.obstacles = this.modeSelect.value === "walls"
      ? new Obstacles()
      : null;

    // reset skóre
    this.score = 0;

    // spuštění herní smyčky podle zvolené obtížnosti
    clearInterval(this.loop);
    this.loop = setInterval(
      () => this.update(),
      parseInt(this.difficultySelect.value)
    );
  }

  update() {
    // pokud je hra pozastavená, nic se neděje
    if (this.paused) return;

    // pohyb hada
    this.snake.move();

    // kontrola snědení normálního jídla
   if (this.snake.eat(this.food)) {
  this.snake.grow = true;

  // předáme pole překážek (nebo prázdné pole, pokud žádné nejsou)
  this.food.spawn(this.obstacles ? this.obstacles.blocks : []);

  this.score++;
}


  // náhodné vytvoření bonusového jídla
if (Math.random() < 0.005 && !this.bonus) {
  // předáme překážky, pokud existují
  this.bonus = new BonusFood(this.obstacles ? this.obstacles.blocks : []);
}


    // snědení bonusového jídla
    if (this.bonus && this.snake.eat(this.bonus)) {
      this.snake.grow = true;
      this.score += 5;
      this.bonus = null;
    }

    // kontrola kolizí
    if (
      this.snake.body[0].x < 0 || this.snake.body[0].x >= 500 ||
      this.snake.body[0].y < 0 || this.snake.body[0].y >= 500 ||
      (this.obstacles && this.obstacles.hit(this.snake)) ||
      this.snake.checkSelfCollision()
    ) {
      this.end();
    }

    // vykreslení hry a aktualizace skóre
    this.draw();
    document.getElementById("score").textContent = this.score;
  }

  draw() {
    // vykreslení pozadí a mřížky
    this.ctx.fillStyle = "#111";
    this.ctx.fillRect(0, 0, 500, 500);
    this.ctx.strokeStyle = "#222";

    for (let i = 0; i < 500; i += 20) {
      this.ctx.beginPath();
      this.ctx.moveTo(i, 0);
      this.ctx.lineTo(i, 500);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(0, i);
      this.ctx.lineTo(500, i);
      this.ctx.stroke();
    }

    // vykreslení všech herních objektů
    this.food.draw(this.ctx);
    if (this.bonus) this.bonus.draw(this.ctx);
    if (this.obstacles) this.obstacles.draw(this.ctx);
    this.snake.draw(this.ctx);
  }

  end() {
    // ukončení hry a uložení nejlepšího skóre
    clearInterval(this.loop);

    if (this.score > this.best) {
      localStorage.setItem("best", this.score);
    }

    setTimeout(() => alert("Konec hry!"), 10);
  }

  restart() {
    // restart hry
    this.start();
  }

  togglePause() {
    // přepnutí pauzy
    this.paused = !this.paused;
  }
}

// vytvoření hry
const game = new Game();


