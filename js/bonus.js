class BonusFood extends Food {
  constructor(obstacles = []) {
    super(); // zavolá se konstruktor z Food
    this.timer = 300; // jak dlouho bude bonus na mapě
    // bezpečný spawn mimo překážky
    this.spawn(obstacles);
  }

  draw(ctx) {
    ctx.fillStyle = "gold"; // zlatá barva, aby bylo poznat, že je to bonus
    ctx.fillRect(this.x, this.y, 20, 20); // vykreslení bonusového jídla
    this.timer--; // po každém vykreslení se zmenší čas, než zmizí
  }

  // spawn s kontrolou překážek
  spawn(obstacles = []) {
    let valid = false;
    // opakuje generování dokud se nenajde pozice, která není na žádné překážce.
    while (!valid) {
      this.x = Math.floor(Math.random() * 25) * 20;
      this.y = Math.floor(Math.random() * 25) * 20;

      valid = !obstacles.some(b => b.x === this.x && b.y === this.y);
    }
  }
}
