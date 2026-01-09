
class Food {
  constructor() {
    this.position = { x: 0, y: 0 };
    this.spawn();
  }

  spawn() {
    this.position.x = Math.floor(Math.random() * 20) * 20;
    this.position.y = Math.floor(Math.random() * 20) * 20;
  }

  draw(ctx) {
    ctx.fillStyle = "#FF3C3C";
    ctx.beginPath();
    ctx.arc(this.position.x + 10, this.position.y + 10, 8, 0, Math.PI * 2);
    ctx.fill();
  }
}



