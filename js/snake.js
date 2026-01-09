class Snake {
  constructor() {
    this.size = 20;
    this.reset();
  }

  reset() {
    this.body = [{ x: 200, y: 200 }];
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

    if (!this.grow) {
      this.body.pop();
    } else {
      this.grow = false;
    }
  }

  draw(ctx) {
    ctx.fillStyle = "#00ff99";
    for (let part of this.body) {
      ctx.fillRect(part.x, part.y, this.size, this.size);
    }
  }

  eat(food) {
    if (this.body[0].x === food.x && this.body[0].y === food.y) {
      this.grow = true;
      return true;
    }
    return false;
  }

  hitWall(width, height) {
    const head = this.body[0];
    return (
      head.x < 0 ||
      head.y < 0 ||
      head.x >= width ||
      head.y >= height
    );
  }

  hitSelf() {
    const [head, ...rest] = this.body;
    return rest.some(p => p.x === head.x && p.y === head.y);
  }
}
