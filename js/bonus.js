class BonusFood extends Food {
  constructor() {
    super(); // zavolá se konstruktor z Food, aby se nastavila pozice jídla
    this.timer = 300; // jak dlouho bude bonus na mapě 
  }

  draw(ctx) {
    ctx.fillStyle = "gold"; // zlatá barva, aby bylo poznat, že je to bonus
    ctx.fillRect(this.x, this.y, 20, 20); // vykreslení bonusového jídla
    this.timer--; // po každém vykreslení se zmenší čas, než zmizí
  }
}
