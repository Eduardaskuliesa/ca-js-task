console.groupCollapsed('https://edabit.com/challenge/2FF7RKw9RLwc3EBY9');
{
 class Challenge{
  id;
  level;
  constructor(id, level){
    this.id = id,
    this.level = level
  }
  get points(){
    if(this.level  === 'VE'){
      return 5;
    }else if(this.level === 'EA'){
      return 10;
    }else if(this.level === 'ME'){
      return 20;
    }else if(this.level === 'HA'){
      return 40;
    }else if(this.level === 'VH'){
      return 80;
    }else(this.level === 'EX')
    return 120;
  }
 }
 class User{
  name;
  xp;
  log;
  constructor(name, xp, log){
    this.name = name,
    this.xp = xp,
    this.log = log
  }
   newSolvedChallenge(challenge){
    this.xp += challenge.points
    this.log.push(challenge.id)
  }
 }
 let user1 = new User('Madam', 0, []);
 let user2 = new User('Steve', 0, []);

 let challenge1 = new Challenge(1, 'VE');
 let challenge2 = new Challenge(2, 'EA');
 let challenge3 = new Challenge(3, 'ME');
 let challenge4 = new Challenge(4, 'HA');
 let challenge5 = new Challenge(5, 'VH');
 let challenge6 = new Challenge(6, 'EX');
 
 user1.newSolvedChallenge(challenge1);
 user1.newSolvedChallenge(challenge4);
 user1.newSolvedChallenge(challenge6);
 user2.newSolvedChallenge(challenge5);
 user2.newSolvedChallenge(challenge3);
 user2.newSolvedChallenge(challenge2)




console.log(user1.name, "Madam")
console.log(user1.xp, 165)
console.log(user1.log, [1, 4, 6])
// Test user2
console.log(user2.name, "Steve")
console.log(user2.xp, 110)
console.log(user2.log, [5, 3, 2])
// Test challenges
console.log(challenge1.id, 1);
console.log(challenge2.level, "EA")
console.log(challenge3.points, 20)
console.log(challenge4.id, 4)
console.log(challenge5.level, "VH")
console.log(challenge6.points, 120)
// Trivial tests
console.log(user1.xp > user2.xp, true)
console.log(challenge6.points < challenge1.points, false)
}
console.groupEnd();

console.groupCollapsed('https://edabit.com/challenge/ifDM26p25bqS8EsFu');
{
  class Player{
    hp;
    maxHp;
    en;
    maxEn;
    constructor(hp, maxHp, en, maxEn){
      this.hp = hp,
      this.maxHp = maxHp,
      this.en = en,
      this.maxEn = maxEn
    }
    get hp(){
      return this.hp;
    }
    get en(){
      return this.en;
    }
    set hp(hp){
      if(hp === 0){
        return `you dead`
      }else if(hp > this.maxHp){
        return `you cannot have more hp when your maximum`
      }
    }
    set en(en){
      if(en === 0){
        return 'you dont have enoutgh energy to cast a spell'
      }else if(en > this.maxEn){
        return `you cannot have more en when your maximum hello ?`
      }
      
    }
  }
}
console.groupEnd();

