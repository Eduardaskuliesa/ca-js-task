console.groupCollapsed('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
  class Player {
    constructor(name, age, height, weight) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
    }
    
    getAge() {
      return `${this.name} is age ${this.age}`
    }
  
    getHeight() {
      return `${this.name} is ${this.height}cm`
    }
      
    getWeight() {
      return `${this.name} weighs ${this.weight}kg`
    }
  }		
}
console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
  class Calculator {
    constructor(){
      
    }
    add(a, b){
      return a + b;
    }
    subtract(a, b){
      return a - b;
    }
    multiply(a, b){
      return a * b
    }
    divide(a, b){
      return a / b;
    }
  }
  
  
}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
  class Employee {
    constructor (firstname, lastname) {
      this.firstname = firstname
      this.lastname = lastname
      this.fullname =`${this.firstname} ${this.lastname}`;
      this.email = `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`
    }
  }
}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    compareAge(other) {
      if(this.age > other.age){
        return `${this.name} is older than me.`
      }else if(this.age === other.age){
        return `${this.name} is the same age as me.`
      }
      return `${this.name} is younger then me.`
    }
  }
}

console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
  class Rectangle {
    constructor(sideA, sideB) {
      this.sideA = sideA
      this.sideB = sideB
    }
    getArea(){return this.sideA*this.sideB}
    getPerimeter(){return (this.sideA + this.sideB) *2}
  }
  
  
  class Circle {
    constructor(circumference){
      this.circumference = circumference;
      this.radius = circumference / 3.14 / 2;

    }
    getArea(){
      return 3.14 * Math.pow(this.radius, 2);
    }
    getPerimeter(){
      return 2 * 3.14 * this.radius;
    }
  }
  
  
  // unquote and use run to test these cases:
  
  let q = new Circle(11);
  console.log(q.getArea());
  console.log(q.getPerimeter());
  
}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
  class Name {
    constructor(fname, lname){
      this.fname = this.capitulaze(fname);
      this.lname = this.capitulaze(lname);
      this.fullname = `${this.fname} ${this.lname}`
      this.initials = `${fname.charAt(0).toUpperCase()}.${lname.charAt(0).toUpperCase()}`
    }
    capitulaze(name){
      let lowName = name.toLowerCase()
      let normal = name.charAt(0).toUpperCase() + lowName.slice(1);
      return normal;
    }
	
  }

  a1 = new Name("john", "SMITH")
console.log(a1.fname, "John")
console.log(a1.lname, "Smith")
console.log(a1.fullname, "John Smith")
console.log(a1.initials, "J.S")

a2 = new Name("sARah", "fRolliE")
console.log(a2.fname, "Sarah")
console.log(a2.lname, "Frollie")
console.log(a2.fullname, "Sarah Frollie")
console.log(a2.initials, "S.F")
}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
  class IceCream {
    constructor(flavor, numSprinkles) {
      this.flavor = flavor
      this.numSprinkles = numSprinkles
    }
  }
  function sweetestIcecream(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(returnSweetnest(arr[i]));
    }
    return Math.max(...newArr);
  }
  function returnSweetnest(arr){
    if(arr.flavor === 'Plain'){
        return 0 + arr.numSprinkles;
    }else if(arr.flavor === 'Vanilla' ||  arr.flavor === 'Strawberry'){
        return 5 + arr.numSprinkles;
    }else if(arr.flavor === 'ChocolateChip' ||  arr.flavor === 'Chocolate'){
        return 10 + arr.numSprinkles;
    }
  }

  ice1 = new IceCream("Chocolate", 13)
  ice2 = new IceCream("Vanilla", 0)
  ice3 = new IceCream("Strawberry", 7)
  ice4 = new IceCream("Plain", 18)
  ice5 = new IceCream("ChocolateChip", 3)
  ice6 = new IceCream("Chocolate", 23)
  ice7 = new IceCream("Strawberry", 0)
  ice8 = new IceCream("Plain", 34)
  ice9 = new IceCream("Plain", 81)
  ice10 = new IceCream("Vanilla", 12)
  
  
  console.log(sweetestIcecream([ice1, ice2, ice3, ice4, ice5]), 23)
  console.log(sweetestIcecream([ice7, ice10, ice1, ice6, ice8, ice10, ice2, ice2]), 34)
  console.log(sweetestIcecream([ice10, ice10, ice6, ice8, ice4]), 34)
  console.log(sweetestIcecream([ice2, ice10, ice6, ice9, ice7]), 81)
  console.log(sweetestIcecream([ice10, ice6, ice4, ice1, ice7, ice8, ice6]), 34)
  console.log(sweetestIcecream([ice3, ice1]), 23)
  console.log(sweetestIcecream([ice6, ice7, ice5, ice4, ice3]), 33)
  console.log(sweetestIcecream([ice4, ice8, ice9]), 81)
  console.log(sweetestIcecream([ice5, ice7]), 10)
  console.log(sweetestIcecream([ice5, ice3, ice6, ice2, ice7, ice2, ice7, ice2]), 33)
  console.log(sweetestIcecream([ice1, ice9, ice10, ice9, ice7, ice1, ice9]), 81)
  console.log(sweetestIcecream([ice1, ice4]), 23)
  console.log(sweetestIcecream([ice7, ice4]), 18)
  console.log(sweetestIcecream([ice1, ice8, ice6, ice7, ice3, ice2, ice3, ice7]), 34)
  console.log(sweetestIcecream([ice7, ice8, ice4, ice4, ice5, ice1]), 34)
  console.log(sweetestIcecream([ice10, ice10, ice9, ice4, ice7, ice9]), 81)
  console.log(sweetestIcecream([ice3, ice10, ice1]), 23)
  console.log(sweetestIcecream([ice3, ice4, ice7, ice3, ice7, ice10, ice2]), 18)
  console.log(sweetestIcecream([ice5, ice9, ice9, ice9, ice7, ice5, ice9, ice7]), 81)
  console.log(sweetestIcecream([ice4, ice9, ice2]), 81)
  console.log(sweetestIcecream([ice8, ice2, ice2, ice2, ice4, ice8]), 34)
  console.log(sweetestIcecream([ice4, ice9, ice4, ice3, ice3, ice2, ice5, ice2]), 81)
  console.log(sweetestIcecream([ice8, ice10, ice5]), 34)
  console.log(sweetestIcecream([ice10, ice3, ice2, ice1, ice9]), 81)
  console.log(sweetestIcecream([ice8, ice3, ice4, ice5]), 34)
  console.log(sweetestIcecream([ice10, ice8, ice6, ice7, ice9, ice4]), 81)
  console.log(sweetestIcecream([ice5, ice4, ice6, ice6, ice1]), 33)
  console.log(sweetestIcecream([ice6, ice8, ice2, ice10, ice7, ice10]), 34)
  console.log(sweetestIcecream([ice1, ice9, ice7, ice3]), 81)
  console.log(sweetestIcecream([ice7, ice1, ice9, ice6, ice7, ice10, ice2, ice3]), 81)
  console.log(sweetestIcecream([ice5, ice1, ice7, ice6, ice8, ice1, ice8]), 34)
  console.log(sweetestIcecream([ice10, ice9, ice2, ice4, ice10]), 81)
  console.log(sweetestIcecream([ice3, ice7, ice10]), 17)
  console.log(sweetestIcecream([ice10, ice5, ice4]), 18)
  console.log(sweetestIcecream([ice9, ice2, ice4, ice8, ice3, ice3]), 81)
  console.log(sweetestIcecream([ice6, ice3, ice9, ice8, ice2, ice6]), 81)
  console.log(sweetestIcecream([ice10, ice3]), 17)
  console.log(sweetestIcecream([ice10, ice7, ice5, ice2, ice9]), 81)
  console.log(sweetestIcecream([ice10, ice10, ice4, ice1, ice9]), 81)
  console.log(sweetestIcecream([ice9, ice2, ice6, ice4, ice10, ice3]), 81)
  console.log(sweetestIcecream([ice8, ice10, ice1, ice7, ice8, ice9, ice1]), 81)
  console.log(sweetestIcecream([ice7, ice5, ice3, ice8, ice1, ice9]), 81)
  console.log(sweetestIcecream([ice2, ice6, ice3]), 33)
  console.log(sweetestIcecream([ice6, ice6]), 33)
  console.log(sweetestIcecream([ice9, ice6, ice8, ice3, ice2, ice2]), 81)
  console.log(sweetestIcecream([ice1, ice3, ice3, ice6]), 33)
  console.log(sweetestIcecream([ice8, ice6]), 34)
  console.log(sweetestIcecream([ice1, ice1]), 23)
  console.log(sweetestIcecream([ice4, ice2, ice3, ice9, ice5, ice10, ice6]), 81)
  console.log(sweetestIcecream([ice10, ice8, ice4, ice3, ice9, ice8, ice1, ice10]), 81)
  console.log(sweetestIcecream([ice5, ice8, ice5]), 34)
  
}
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
  class OnesThreesNines {
    constructor(number){
      this.ones = Math.floor(number / 1)
      this.threes = Math.floor(number / 3)
      this.nines = Math.floor(number / 9)
    }

  }
  const probs = [{
    num:0,
    which:'ones',
    expect:0
  },{
    num:1,
    which:'threes',
    expect:0
  },{
    num:2,
    which:'nines',
    expect:0
  },{
    num:3,
    which:'ones',
    expect:3
  },{
    num:4,
    which:'threes',
    expect:1
  },{
    num:10,
    which:'nines',
    expect:1
  },{
    num:13,
    which:'ones',
    expect:13
  },{
    num:15,
    which:'threes',
    expect:5
  },{
    num:17,
    which:'nines',
    expect:1
  },{
    num:20,
    which:'nines',
    expect:2
  }];
  probs.forEach(prob=>{
      let testInstance = new OnesThreesNines(prob.num);
      console.log(testInstance[prob.which], prob.expect)
  })
}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
  class User {
	static userCount = 0;
  constructor(username){
    this.username = username;
    User.userCount += 1
  }
  }
 console.log(User.userCount, 0)

const u1 = new User("johnsmith10")
console.log(User.userCount, 1)
console.log(u1.username, "johnsmith10")


const u2 = new User("marysue1989")
console.log(User.userCount, 2)
console.log(u2.username, "marysue1989")

const u3 = new User("milan_rodrick")
console.log(User.userCount, 3)
console.log(u3.username, "milan_rodrick")

const user4 = new User("joshua_senoron")
console.log(User.userCount, 4)
console.log(user4.username, "joshua_senoron")

const user10 = new User("LuckyLootCrate123")
console.log(User.userCount, 5)
console.log(user10.username, "LuckyLootCrate123")
}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
  class Book{
    constructor(title, author){
      this.title = title;
      this.author = author;
    }
    getTitle(){
      return `Title: ${this.title}`

    }
    getAuthor(){
      return `Author: ${this.author}`
    }
  }
  PP = new Book('Pride and Prejudice', 'Jane Austen')
  H = new Book('Hamlet', 'William Shakespeare')
  WP = new Book('War and Peace', 'Leo Tolstoy')
  console.log(PP.title, "Pride and Prejudice")
console.log(PP.author, "Jane Austen")
console.log(PP.getTitle(), 'Title: Pride and Prejudice')
console.log(PP.getAuthor(), 'Author: Jane Austen')

console.log(H.title, "Hamlet")
console.log(H.author, "William Shakespeare")
console.log(H.getTitle(), 'Title: Hamlet')
console.log(H.getAuthor(), 'Author: William Shakespeare')

console.log(WP.title, "War and Peace")
console.log(WP.author, "Leo Tolstoy")
console.log(WP.getTitle(), 'Title: War and Peace')
console.log(WP.getAuthor(), 'Author: Leo Tolstoy')
}
console.groupEnd();
