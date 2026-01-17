class Obstacles {
  constructor() {
    // pole překážek s pevně danými souřadnicemi
    this.blocks = [
      // původní blok
      { x: 200, y: 200 },
      { x: 220, y: 200 },
      { x: 240, y: 200 }, 
      { x: 260, y: 200 },  
      { x: 200, y: 220 },  
      { x: 220, y: 220 },
      { x: 240, y: 220 },

      // nové překážky – horní část mapy
      { x: 100, y: 100 },
      { x: 120, y: 100 },
      { x: 140, y: 100 },

      // levá část
      { x: 60, y: 200 },
      { x: 60, y: 220 },
      { x: 60, y: 240 },

      // pravá část
      { x: 400, y: 180 },
      { x: 420, y: 180 },
      { x: 440, y: 180 },

      // spodní část
      { x: 300, y: 320 },
      { x: 320, y: 320 },
      { x: 340, y: 320 },
      { x: 340, y: 340 }
    ];
  }

  draw(ctx) {
    this.blocks.forEach((b, i) => {
      const shade = 140 + (i % 3) * 20;
      ctx.fillStyle = `rgb(${shade}, ${shade}, ${shade})`;
      ctx.fillRect(b.x, b.y, 20, 20);

      ctx.strokeStyle = "#444";
      ctx.strokeRect(b.x, b.y, 20, 20);
    });
  }

  hit(snake) {
    return this.blocks.some(b =>
      b.x === snake.body[0].x && b.y === snake.body[0].y
    );
  }
}
