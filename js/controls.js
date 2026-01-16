document.addEventListener("keydown", e=>{
  // nasluchač stisknutí klávesy na klávesnici
  // e = jaká klávesa byla stisknuta

  e.preventDefault();
  // zruší výchozí chování prohlížeče 

  const s = game.snake;
  // uloží si hada do proměnné 

  if(e.key===" ") game.togglePause();
  // mezerník pozastaví nebo znovu spustí hru

  if(e.key==="ArrowUp" && s.dy===0){ s.dx=0; s.dy=-1; }
  if(e.key==="ArrowDown" && s.dy===0){ s.dx=0; s.dy=1; }
  if(e.key==="ArrowLeft" && s.dx===0){ s.dx=-1; s.dy=0; }
  if(e.key==="ArrowRight" && s.dx===0){ s.dx=1; s.dy=0; }
  // šipky mění směr pohybu hada
});
