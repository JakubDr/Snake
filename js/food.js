class Food {
 // třída pro jídlo 

  constructor() {
    this.size = 20;
    // velikost jednoho políčka

    this.spawn();
  }

  spawn() {
    // vygeneruje náhodnou pozici 
    this.x = Math.floor(Math.random() * 25) * 20;
    this.y = Math.floor(Math.random() * 25) * 20;
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
