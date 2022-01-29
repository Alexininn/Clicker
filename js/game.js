"use strict"

// Функция первого уровня
  function stage1()  {

  const enemy1 = FabricaEnemies(0, 2, 41.5, 17, 40, "knight", 20, 4, 5); // index bottom left, width, height, type, hp, dmg, dmgPerSecond
  const enemySkeletontakeDmg = enemy1.takeDMG.bind(enemy1);
  const enemy2 = FabricaEnemies(1, 48, 83, 17, 40,"wolf", 10, 2, 3);  // index bottom left, width, height, type, hp, dmg, dmgPerSecond
  const enemySkeleton2takeDmg = enemy2.takeDMG.bind(enemy2);
  const enemy3 = FabricaEnemies(2, 10, 20, 17, 40,"wolf", 10, 2, 3);  // index bottom left, width, height, type, hp, dmg, dmgPerSecond
  const enemySkeleton3takeDmg = enemy3.takeDMG.bind(enemy3);
  enemy3.div.classList.add("rotate_180");
  enemy3.div.classList.add("change_size");

  body.classList.add("stage1");
  enemy1DMG.subscribe(enemySkeletontakeDmg);
  enemy2DMG.subscribe(enemySkeleton2takeDmg);
  enemy3DMG.subscribe(enemySkeleton3takeDmg);
  setInterval(() => {enemy1.attack(enemy1.dmg)}, enemy1.dmgPerSec * 1000); // враг атакует героя раз в n секунд
  setInterval(() => {enemy2.attack(enemy2.dmg)}, enemy2.dmgPerSec * 1000); 
  setInterval(() => {enemy3.attack(enemy3.dmg)}, enemy3.dmgPerSec * 1000); 
  return {e1:enemy1, e2:enemy2,}
};

let enemies = stage1();  // запускаем первый уровень

let newStage = setInterval(() => { // проверяем каждые пять секунд живы ли враги, если нет, то даем сигнал переходить на второй уровень
  if (!enemies.e1.isAlive && !enemies.e2.isAlive){
    stage1Observer.broadcast(true);
  }
}, 5000);

stage1Observer.subscribe(stage2);

function stage2(obs) {
  if (obs) {
    clearInterval(newStage);
    body.classList.add("stage2");

    const enemy4 = FabricaEnemies(3, 0, 41.5, 40, 90, "yorn", 100, 10, 5); // index bottom left, width, height, type, hp, dmg, dmgPerSecond
    const enemySkeleton4takeDmg = enemy4.takeDMG.bind(enemy4);
    enemy4DMG.subscribe(enemySkeleton4takeDmg);
    setInterval(() => {enemy4.attack(enemy4.dmg)}, enemy4.dmgPerSec * 1000); 
    return {e4:enemy4,}
  }
}


