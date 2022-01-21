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
  constructor () { 
    this.Curhp = 30;   // current hp (текущее здоровье) 
    this.maxHp = 30;    
    this.hpStep = 100 / this.maxHp;  // Для определения потери хп в Баре
    this.dmg = 2;
  }

  attack(dmg){
   enemy1DMG.broadcast(dmg);
  }
 
}

class Enemy {
  constructor () { 
    this.Curhp = 5;
    this.maxHp = 5; 
    this.hpStep = 100 / this.maxHp;
    hp1Enemy.textContent = `${this.Curhp}/${this.maxHp}`;
  }
  
  takeDMG(dmg) {
    this.Curhp -= dmg;
    if (this.Curhp <= 0) {
      this.Curhp = 0;
    }
    let hpLeft = this.Curhp * this.hpStep;
    hp1Enemy.style.width = hpLeft + "%";
      hp1Enemy.textContent = `${this.Curhp}/${this.maxHp}`;
    }

  death(isdead) {
    if (isdead) {
      this.dealDMG()
    }
  }
}

