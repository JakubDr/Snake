class BonusFood extends Food {
  constructor() {
    super();
    this.timer = 300;
  }

  draw(ctx) {
    ctx.fillStyle = "gold";
    ctx.fillRect(this.x, this.y, 20, 20);
    this.timer--;
  }
}
