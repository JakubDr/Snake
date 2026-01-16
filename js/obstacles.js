class Obstacles {
  constructor() {
    // pole překážek s pevně danými souřadnicemi
    this.blocks = [
      { x: 200, y: 200 },
      { x: 220, y: 200 },
      { x: 240, y: 200 },
      { x: 320, y: 120 },
      { x: 340, y: 140 },
      { x: 340, y: 120 }
    ];
  }

  draw(ctx) {
    // ctx je 2D kontext canvasu, pomocí něj kreslím tvary
    ctx.fillStyle = "gray";      
    ctx.shadowBlur = 10;         /
    ctx.shadowColor = "gray";    
    // vykreslí každý blok jako čtverec o velikosti 20x20
    this.blocks.forEach(b =>
      ctx.fillRect(b.x, b.y, 20, 20)
    );

    ctx.shadowBlur = 0;          // po vykreslení vypne stín
  }

  hit(snake) {
    // zjistí, jestli hlava hada narazila do některé překážky
    // vrátí true, pokud souřadnice hlavy hada odpovídají některému bloku
    return this.blocks.some(b =>
      b.x === snake.body[0].x && b.y === snake.body[0].y
    );
  }
}

