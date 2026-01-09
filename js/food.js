class Food {
  constructor(type = "normal") {
    this.x = Math.floor(Math.random() * 20);
    this.y = Math.floor(Math.random() * 20);
    this.type = type;
  }

  draw(ctx, size) {
    if (this.type === "normal") ctx.fillStyle = "#ef4444";
    if (this.type === "bonus") ctx.fillStyle = "#facc15";
    if (this.type === "slow") ctx.fillStyle = "#38bdf8";

    ctx.shadowBlur = 15;
    ctx.shadowColor = ctx.fillStyle;

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
