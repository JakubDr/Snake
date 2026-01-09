class Food {
  constructor(size, width, height) {
    this.size = size;
    this.width = width;
    this.height = height;
    this.spawn();
  }

  spawn() {
    this.x =
      Math.floor(Math.random() * (this.width / this.size)) * this.size;
    this.y =
      Math.floor(Math.random() * (this.height / this.size)) * this.size;
  }

  draw(ctx) {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(
      this.x + this.size / 2,
      this.y + this.size / 2,
      this.size / 2,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }
}
