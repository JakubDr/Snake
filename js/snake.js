class Snake {
  constructor() {
    this.body = [{ x: 10, y: 10 }];
    this.dx = 1;
    this.dy = 0;
  }

  move() {
    const head = {
      x: this.body[0].x + this.dx,
      y: this.body[0].y + this.dy
    };
    this.body.unshift(head);
    this.body.pop();
  }

  grow() {
    const tail = this.body[this.body.length - 1];
    this.body.push({ ...tail });
  }

  draw(ctx, size) {
    this.body.forEach((part, i) => {
      ctx.fillStyle = i === 0 ? "#22c55e" : "#16a34a";
      ctx.shadowBlur = i === 0 ? 15 : 5;
      ctx.shadowColor = "#22c55e";
      ctx.fillRect(part.x * size, part.y * size, size, size);
    });
    ctx.shadowBlur = 0;
  }
}
