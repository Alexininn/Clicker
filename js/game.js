"use strict"

// Функция первого уровня
  function stage1()  {

  const enemy1 = FabricaEnemies(0, 0, 41.5, 17, 40, "skeleton", 20, 2, 5); // index bottom left, width, height, type, hp, dmg, dmgPerSecond
  const enemySkeletontakeDmg = enemy1.takeDMG.bind(enemy1);
  const enemy2 = FabricaEnemies(1, 48, 83, 17, 40,"frog", 10, 10, 2);  // index bottom left, width, height, type, hp, dmg, dmgPerSecond
  const enemySkeleton2takeDmg = enemy2.takeDMG.bind(enemy2);

  body.classList.add("stage1");
  enemy1DMG.subscribe(enemySkeletontakeDmg);
  enemy2DMG.subscribe(enemySkeleton2takeDmg);
  setInterval(() => {enemy1.attack(enemy1.dmg)}, enemy1.dmgPerSec * 1000); // первый враг атакует героя раз в n секунд
  setInterval(() => {enemy2.attack(enemy2.dmg)}, enemy2.dmgPerSec * 1000); // первый враг атакует героя раз в n секунд 
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
    console.log(1);
    clearInterval(newStage);
    body.classList.add("stage2");
  }
}


