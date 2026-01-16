class Snake {
  constructor(color) {
    this.size = 20;
    this.color = color;
    // nastaví výchozí pozici a směr
    this.reset();
  }

  reset() {
    this.body = [{ x: 240, y: 240 }];
    // počáteční směr pohybu (doprava)
    this.dx = 1;
    this.dy = 0;
    // had zatím neroste
    this.grow = false;
  }

  move() {
    // vytvoří novou hlavu podle směru
    const head = {
      x: this.body[0].x + this.dx * this.size,
      y: this.body[0].y + this.dy * this.size
    };
    // přidá hlavu na začátek těla
    this.body.unshift(head);
    // pokud had neroste, odstraní poslední článek
    if (!this.grow) this.body.pop();
    else this.grow = false; // po růstu se vypne
  }

  draw(ctx) {
    ctx.fillStyle = this.color;  
    ctx.shadowBlur = 15;         
    ctx.shadowColor = this.color;

    // vykreslí každý článek hada jako čtverec
    this.body.forEach(p =>
      ctx.fillRect(p.x, p.y, this.size, this.size)
    );

    // vypne stín po vykreslení
    ctx.shadowBlur = 0;
  }

  eat(obj) {
    // vrátí true, pokud hlava hada je na stejné pozici jako objekt (např. jídlo)
    return this.body[0].x === obj.x && this.body[0].y === obj.y;
  }

  checkSelfCollision() {
    // zkontroluje, jestli hlava narazila do vlastního těla
    const [head, ...rest] = this.body;
    return rest.some(p => p.x === head.x && p.y === head.y);
  }
}
