"use strict"

// Функция первого уровня

  stage3Observer.subscribe(stage1);

  function stage1()  {
    if (game.start === false) {
      game.start = true;
      body.classList.remove("stage3");
      body.classList.add("stage1");

      const enemy1 = FabricaEnemies(1, 0, 2, 41.5, 20, 50, "knight", 75, 5, 5); //lvl index bottom left, width, height, type, hp, dmg, dmgPerSecond
      const enemySkeletontakeDmg = enemy1.takeDMG.bind(enemy1);
      const enemy2 = FabricaEnemies(1, 1, 20, 73, 10, 20,"wolf", 30, 4, 3, 13);  //lvl index bottom left, width, height, type, hp, dmg, dmgPerSecond
      const enemySkeleton2takeDmg = enemy2.takeDMG.bind(enemy2);
      const enemy3 = FabricaEnemies(1, 2, 10, 20, 16, 35,"wolf", 30, 4, 3);  //lvl index bottom left, width, height, type, hp, dmg, dmgPerSecond
      const enemySkeleton3takeDmg = enemy3.takeDMG.bind(enemy3);
      
      enemy3.div.classList.add("rotate_180");
      enemy1DMG.subscribe(enemySkeletontakeDmg);
      enemy2DMG.subscribe(enemySkeleton2takeDmg);
      enemy3DMG.subscribe(enemySkeleton3takeDmg);
    
      const at1 = setInterval(() => {
        if (!enemy1.isAlive) {
          clearInterval(at1);
        }
        enemy1.attack(enemy1.dmg)}, enemy1.dmgPerSec * 1000); // враг атакует героя раз в n секунд
      const at2 = setInterval(() => {
        if (!enemy2.isAlive) {
        clearInterval(at2);
      }
      enemy2.attack(enemy2.dmg)}, enemy2.dmgPerSec * 1000); 
      const at3 = setInterval(() => {
        if (!enemy3.isAlive) {
          clearInterval(at3);
        }
        enemy3.attack(enemy3.dmg)}, enemy3.dmgPerSec * 1000); 

        const stopAll = (obs) => { 
          if (obs){
            clearInterval(at1);
            clearInterval(at2);
            clearInterval(at3);
        }
      };
        heroDeath.subscribe(stopAll);
        game.start = false;
    }
};

(() => {stage1()})();

function stage2() {
    body.classList.remove("stage1");
    body.classList.add("stage2");

    const enemy4 = FabricaEnemies(2, 3, 0, 41.5, 40, 90, "yorn", 125, 10, 4); 
    const enemySkeleton4takeDmg = enemy4.takeDMG.bind(enemy4);
    enemy4DMG.subscribe(enemySkeleton4takeDmg);
    
    const stopAttack = setInterval(() => {
      if (!enemy4.isAlive) {
        clearInterval(stopAttack);
      }
      enemy4.attack(enemy4.dmg)}, enemy4.dmgPerSec * 1000); 

      const stopInterval = (obs) => { 
        if (obs){
          clearInterval(stopAttack);
      }
    };
      heroDeath.subscribe(stopInterval);

}

stage2Observer.subscribe(stage3);  // Подписка третьего уровня на конец второго

function stage3() {
    body.classList.remove("stage2");
    body.classList.add("stage3");

    const enemy5 = FabricaEnemies(3, 4, 24, 72, 9, 15, "nito", 40, 2, 7, 12); //3
    const enemySkeleton5takeDmg = enemy5.takeDMG.bind(enemy5);
    const enemy6 = FabricaEnemies(3, 5, 20, 82, 15, 30, "nito", 40, 2, 4); 
    const enemySkeleton6takeDmg = enemy6.takeDMG.bind(enemy6);
    const enemy7 = FabricaEnemies(3, 6, 25, 0, 10, 20, "pontifik", 20, 3, 3, 13); 
    const enemySkeleton7takeDmg = enemy7.takeDMG.bind(enemy7);
    const enemy8 = FabricaEnemies(3, 7, 15, 20, 20, 42, "pontifik", 20, 3, 6); 
    const enemySkeleton8takeDmg = enemy8.takeDMG.bind(enemy8);
    const enemy9 = FabricaEnemies(3, 8, 0, 41.5, 35, 75, "knight", 55, 4, 2); //4
    const enemySkeleton9takeDmg = enemy9.takeDMG.bind(enemy9);

    enemy5DMG.subscribe(enemySkeleton5takeDmg);
    enemy6DMG.subscribe(enemySkeleton6takeDmg);
    enemy7DMG.subscribe(enemySkeleton7takeDmg);
    enemy8DMG.subscribe(enemySkeleton8takeDmg);
    enemy9DMG.subscribe(enemySkeleton9takeDmg);

    enemy9.div.classList.add("rotate_180");

    const at5 = setInterval(() => {
      if (!enemy5.isAlive) {
        clearInterval(at5);
      }
      enemy5.attack(enemy5.dmg)}, enemy5.dmgPerSec * 1000); 
    const at6 = setInterval(() => {
      if (!enemy6.isAlive) {
        clearInterval(at6);
      }
      enemy6.attack(enemy6.dmg)}, enemy6.dmgPerSec * 1000); 
    const at7 = setInterval(() => {
      if (!enemy7.isAlive) {
        clearInterval(at7);
      }
      enemy7.attack(enemy7.dmg)}, enemy7.dmgPerSec * 1000); 
    const at8 = setInterval(() => {
      if (!enemy8.isAlive) {
        clearInterval(at8);
      }
      enemy8.attack(enemy8.dmg)}, enemy8.dmgPerSec * 1000); 
    const at9 = setInterval(() => {
      if (!enemy9.isAlive) {
        clearInterval(at9);
      }
      enemy9.attack(enemy9.dmg)}, enemy9.dmgPerSec * 1000); 
  
      const stopAttack = (obs) => { 
        if (obs){
          clearInterval(at5);
          clearInterval(at6);
          clearInterval(at7);
          clearInterval(at8);
          clearInterval(at9);
      }
    };

    heroDeath.subscribe(stopAttack);
};