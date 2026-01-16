class Obstacles {
  constructor() {
    this.blocks = [
      {x:200,y:200},{x:220,y:200},{x:240,y:200}
    ];
  }

  draw(ctx) {
    ctx.fillStyle = "gray";
    ctx.shadowBlur = 10;
    ctx.shadowColor = "gray";
    this.blocks.forEach(b =>
      ctx.fillRect(b.x, b.y, 20, 20)
    );
    ctx.shadowBlur = 0;
  }

  hit(snake) {
    return this.blocks.some(b =>
      b.x === snake.body[0].x && b.y === snake.body[0].y
    );
  }
}
