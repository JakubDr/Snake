class Food {
  constructor() {
    this.size = 20;
    this.spawn();
  }

  spawn() {
    this.x = Math.floor(Math.random() * 25) * 20;
    this.y = Math.floor(Math.random() * 25) * 20;
  }

  draw(ctx) {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(this.x + 10, this.y + 10, 10, 0, Math.PI * 2);
    ctx.fill();
  }
}
