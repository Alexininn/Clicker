'use strict';

class Obser {
  constructor () {
    this.observers = []
  }

  subscribe (fn) {
    this.observers.push(fn)  //  fn(param) {}
  }

  unsubscribe (fn) {
    this.observers = this.observers.filter(subscriber => subscriber !== fn)
  }

  broadcast (data) {
    this.observers.forEach(subscriber => subscriber(data))
  }
}

class Hero {
  constructor (hp = 30, dmg = 5) { 
    this.Curhp = hp;   // current hp (текущее здоровье) 
    this.maxHp = hp;    
    this.dmg = dmg;
    this.hpBar = null;
    this.isAlive = true;
    this.num = 0;
  };

  attack(dmg, i){
    arrayObservers[i].broadcast(dmg);
    };

  takeDMG(dmg) {
    this.Curhp -= dmg;
    if (this.Curhp <= 0) {
      this.death();
    }
      let hpLeft = this.Curhp * 100 / this.maxHp;
      this.hpBar.style.width = hpLeft + "%";
      this.hpBar.textContent = `${this.Curhp}/${this.maxHp}`;
  };

  death() {
    this.Curhp = 0;
    this.isAlive = false;
    createFinalScreen("You're DEAD", "onion");
    heroDeath.broadcast(true);
    const soundAttack = new Audio(ArrMusic[4]);///
    soundAttack.volume = 0.1;
    soundAttack.play();
    musicBack.pause();
  };
};

class Enemy {
  constructor (hp, dmg, dmgPS) { 
    this.Curhp = hp;
    this.maxHp = hp; 
    this.hpBar = null; // В фабрике сюда передаем div class = "hp" который относится к врагу
    this.dmg = dmg;
    this.dmgPerSec = dmgPS;
    this.isAlive = true;
    this.wrap = null;  // В фабрике сюда передаем div class = "wrap_enemy"
    this.div = null; // В фабрике сюда передаем div class = "enemy"
    this.lvl = null; // При создании задаем номер уровня
  }
  
  attack(dmg) { //Метод врага атаки по герою
    if (this.isAlive) {
      const soundAttack = new Audio(ArrMusic[6]);///
      soundAttack.volume = 0.1;
      soundAttack.play();
      heroTakesDMG.broadcast(dmg);
      redScreen();
    }
  }

  takeDMG(dmg) {
    this.Curhp -= dmg;
    if (this.Curhp <= 0) {
      this.death();
    }
    let hpLeft = this.Curhp * 100 / this.maxHp;
    this.hpBar.style.width = hpLeft + "%";
    this.hpBar.textContent = `${this.Curhp}/${this.maxHp}`;
    }

  death() {
    this.Curhp = 0;
    this.isAlive = false;
    const soundAttack = new Audio("../audio/damage.mp3");///
    soundAttack.volume = 1;
    soundAttack.currentTime = 0.3;
    soundAttack.play();
    this.div.setAttribute("isAlive", "");
    this.wrap.classList.add("anime_death");
    stage1Observer.broadcast(this.lvl);
    setTimeout(() => {this.wrap.remove("wrap_enemy")}, 2000);
  }
};

class Game {
  constructor() {
    this.start = false;
    this.arrLvls = [];
  }

  lvlIsEnd(lvl) {
    switch (lvl) {
      case 1: {
        this.arrLvls.push(lvl);
        if ( this.arrLvls.length === 3) {
          this.arrLvls.length = 0;
          stage2();
        }
      break;
      }
      case 2: {
        this.arrLvls.length = 0;
        stage3();
      break;
      }
      case 3: {
        this.arrLvls.push(lvl);
        if ( this.arrLvls.length === 5) {
          this.arrLvls.length = 0;
          createFinalScreen("You Win!", "sun_knight");
          musicBack.pause();
          const soundAttack = new Audio(ArrMusic[5]);///
          soundAttack.volume = 0.1;
          soundAttack.play();
        }
      break;
      }
    }
  }
};