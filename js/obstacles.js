class Obstacles {
  constructor() {
    // pole překážek s pevně danými souřadnicemi
    this.blocks = [
      { x: 200, y: 200 },
      { x: 220, y: 200 },
      { x: 240, y: 200 }, 
      { x: 260, y: 200 },  
      { x: 200, y: 220 },  
      { x: 220, y: 220 },
      { x: 240, y: 220 },
    ];
  }
draw(ctx) {
  // ctx je 2D kontext canvasu, pomocí něj kreslím tvary
  ctx.fillStyle = "grey";  
  this.blocks.forEach(b =>
    // vykreslí každý blok jako čtverec o velikosti 20x20
    ctx.fillRect(b.x, b.y, 20, 20)
  );
}

  hit(snake) {
    // zjistí, jestli hlava hada narazila do některé překážky
    // vrátí true, pokud souřadnice hlavy hada odpovídají některému bloku
    return this.blocks.some(b =>
      b.x === snake.body[0].x && b.y === snake.body[0].y
    );
  }
}







