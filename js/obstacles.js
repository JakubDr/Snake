class Obstacles {
  constructor(count = 5) { 
    this.size = 20;
    this.blocks = [];
    for (let i = 0; i < count; i++) {
      const x = Math.floor(Math.random() * 25) * this.size;
      const y = Math.floor(Math.random() * 25) * this.size;
      this.blocks.push({ x, y });
    }
  }

  draw(ctx) {
    ctx.fillStyle = "gray";
    ctx.shadowBlur = 10;
    ctx.shadowColor = "gray";
    this.blocks.forEach(b => ctx.fillRect(b.x, b.y, this.size, this.size));
    ctx.shadowBlur = 0;
  }

  hit(snake) {
    return this.blocks.some(b =>
      b.x === snake.body[0].x && b.y === snake.body[0].y
    );
  }
}
