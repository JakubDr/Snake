class Snake {
  constructor() {
    this.reset();
  }

  reset() {
    this.body = [{ x: 200, y: 200 }];
    this.direction = { x: 20, y: 0 };
    this.grow = false;
  }

  setDirection(x, y) {
    if (-x !== this.direction.x && -y !== this.direction.y) {
      this.direction = { x, y };
    }
  }

  update() {
    const head = {
      x: this.body[0].x + this.direction.x,
      y: this.body[0].y + this.direction.y
    };

    this.body.unshift(head);

    if (!this.grow) {
      this.body.pop();
    } else {
      this.grow = false;
    }
  }

  draw(ctx) {
    this.body.forEach((segment, index) => {
      ctx.fillStyle = index === 0 ? "#7CFF00" : "#3FA700";
      ctx.fillRect(segment.x, segment.y, 18, 18);
    });
  }

  checkCollision(width, height) {
    const head = this.body[0];

    if (
      head.x < 0 || head.y < 0 ||
      head.x >= width || head.y >= height
    ) return true;

    for (let i = 1; i < this.body.length; i++) {
      if (head.x === this.body[i].x && head.y === this.body[i].y) {
        return true;
      }
    }
    return false;
  }
}
