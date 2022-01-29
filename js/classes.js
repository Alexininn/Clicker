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
  }

  attack(dmg, i){
    arrayObservers[i].broadcast(dmg);
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
  }
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
  }
  
  attack(dmg) { //Метод врага атаки по герою
    if (this.isAlive) {
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
    this.div.setAttribute("isAlive", "");
    this.wrap.classList.add("anime_death");
    console.log(this.wrap);
    setTimeout(() => {this.wrap.remove("wrap_enemy")}, 2000);
  }
  
};

