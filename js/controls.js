document.addEventListener("keydown", e=>{
  e.preventDefault();
  const s = game.snake;

  if(e.key===" ") game.togglePause();
  if(e.key==="ArrowUp" && s.dy===0){ s.dx=0; s.dy=-1; }
  if(e.key==="ArrowDown" && s.dy===0){ s.dx=0; s.dy=1; }
  if(e.key==="ArrowLeft" && s.dx===0){ s.dx=-1; s.dy=0; }
  if(e.key==="ArrowRight" && s.dx===0){ s.dx=1; s.dy=0; }
});
