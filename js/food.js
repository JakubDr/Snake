class Food {
  constructor() {
    this.size = 20; 
    // velikost jednoho políčka
    this.spawn(); 
    // při vytvoření jídla se rovnou vygeneruje pozice
  }

  spawn(obstacles = []) {
    // vygeneruje náhodnou pozici jídla, která není na překážce
    let valid = false;

    while (!valid) {
      // náhodná pozice po 20 px
      this.x = Math.floor(Math.random() * 25) * 20;
      this.y = Math.floor(Math.random() * 25) * 20;

      // kontrola, že náhodná pozice není na žádné překážce
      valid = !obstacles.some(b => b.x === this.x && b.y === this.y);
    }
  }

  draw(ctx) {
    // vykreslení jídla na canvas
    ctx.fillStyle = "red";
    ctx.beginPath();
    // kreslí kruh doprostřed políčka
    ctx.arc(this.x + 10, this.y + 10, 10, 0, Math.PI * 2);
    ctx.fill();
  }
}
