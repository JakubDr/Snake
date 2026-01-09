class Food {
  constructor() {
    this.x = Math.floor(Math.random() * 20);
    this.y = Math.floor(Math.random() * 20);
  }

  draw(ctx, size) {
    ctx.fillStyle = "#ef4444";
    ctx.shadowBlur = 20;
    ctx.shadowColor = "#ef4444";
    ctx.beginPath();
    ctx.arc(
      this.x * size + size / 2,
      this.y * size + size / 2,
      size / 2.5,
      0,
      Math.PI * 2
    );
    ctx.fill();
    ctx.shadowBlur = 0;
  }
}
