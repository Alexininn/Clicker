"use strict"

// Функция создания Элементов врага
const createEnemyElements = (type, bottom, left, width, height) => {
  const divWrapEnemy = document.createElement("div");
  const divHpBar = document.createElement("div");
  const divHp = document.createElement("div");
  const divEnemy = document.createElement("div");

  divWrapEnemy.classList.add("wrap_enemy");
  divWrapEnemy.style.height = height + "%";
  divWrapEnemy.style.width = width + "%";
  divWrapEnemy.style.bottom = bottom + "%";
  divWrapEnemy.style.left = left + "%";
  divHpBar.classList.add("hp_bar");
  divHp.classList.add("hp");
  divEnemy.classList.add("enemy");
  divEnemy.setAttribute("isAlive", "true");

  switch (type) {
    case "knight" : {
      divEnemy.classList.add("knight");
      break;
    }
    case "wolf" : {
      divEnemy.classList.add("wolf");
      break;
    }
    case "yorn" : {
      divEnemy.classList.add("yorn");
      break;
    }
  }
  divWrapEnemy.append(divHpBar);
  divHpBar.append(divHp);
  divWrapEnemy.append(divEnemy);
  wrap.append(divWrapEnemy);
  return {hp:divHp, wrap:divWrapEnemy, div:divEnemy,};
};

// Фабрика врагов 
function FabricaEnemies(index = 0, bottom = 100, left = 0, width = 10, height = 10, type = "knight", hp = 50, dmg = 3, dmgPS = 3) {
  const newEnemy = new Enemy(hp, dmg, dmgPS);
  let enemyTags = createEnemyElements(type, bottom, left, width, height);

  newEnemy.hpBar = enemyTags.hp;
  newEnemy.wrap = enemyTags.wrap;
  newEnemy.div = enemyTags.div;
  newEnemy.div.setAttribute("number_enemy", index);
  enemyTags.hp.textContent = `${newEnemy.Curhp}/${newEnemy.maxHp}`;
  return newEnemy;
};

function FabricaPlayer(hp = 50, dmg = 4) {
  const player = new Hero(hp, dmg);
  
  player.hpBar = hpHero;
  player.hpBar.textContent = `${player.Curhp}/${player.maxHp}`;
  return player;
}