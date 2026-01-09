class Snake {
  constructor(color) {
    this.size = 20;
    this.color = color;
    this.reset();
  }

  reset() {
    this.body = [{ x: 240, y: 240 }];
    this.dx = 1;
    this.dy = 0;
    this.grow = false;
  }

  move() {
    const head = {
      x: this.body[0].x + this.dx * this.size,
      y: this.body[0].y + this.dy * this.size
    };
    this.body.unshift(head);
    if (!this.grow) this.body.pop();
    else this.grow = false;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.shadowBlur = 15;
    ctx.shadowColor = this.color;
    this.body.forEach(p =>
      ctx.fillRect(p.x, p.y, this.size, this.size)
    );
    ctx.shadowBlur = 0;
  }

  eat(obj) {
    return this.body[0].x === obj.x && this.body[0].y === obj.y;
  }

  checkSelfCollision() {
    const [head, ...rest] = this.body;
    return rest.some(p => p.x === head.x && p.y === head.y);
  }
}
