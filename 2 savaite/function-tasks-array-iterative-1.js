const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false
  }
];
console.groupCollapsed('1. Atspausdinkite visus žmones eilutėmis');
{
  function allPeople(people){
    console.log(people.name, people.surname, '-', people.sex, people.age, people.income, people.married, people.hasCar)
  }
  people.forEach(allPeople);
}
console.groupEnd();

console.groupCollapsed('2. Atpausdinkite visus žmonių varus ir pavardes, atskirtus brūkšneliu');
{
  function allPeople(people){
    console.log(people.name, '-' ,people.surname)
  }
  people.forEach(allPeople);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą');
{
  function nameSecondNameStatus(people){
    console.log(people.name, people.surname, people.married)
  }
  people.forEach(nameSecondNameStatus);
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');

  function allMan(people){
  const all = people.filter(people => people.sex === 'male')
  return all;
}
console.log(allMan(people));
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');

  function allWoman(people){
    const all = people.filter(people => people.sex === 'female')
    return all;
  }
  console.log(allWoman(people));

console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  function allCars(people){
    if(people.hasCar === true)
    console.log(`${people.name}  ${people.surname}`)
  }
  people.forEach(allCars);
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  function allMarried(people){
    if(people.married === true)
    console.log(people.name)
  }
  people.forEach(allMarried);
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  let vyrai = 0;
  let moterys = 0;
  people.forEach((people) => {
    if(people.sex === 'male' && people.hasCar === true) vyrai += 1;
    else if(people.sex === 'female' && people.hasCar === true) moterys +=1
  });  
console.log('vyrai turi:' + vyrai  + 'moterys turi:' + moterys)
}


console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  let newArray = people
  

  newArray = newArray.map((e) =>{
    return{
    name: e.name,
    surname: e.surname,
    sex: e.sex,
    age: e.age,
    salary: e.income,
    married: e.married,
    hasCar: e.hasCar
    }
  });
  console.log(newArray);
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą iš objektų, kuriuose nebūtų lyties, vardo ir pavardės');
{
  let newArray = people
  

  newArray = newArray.map((e) =>{
    return{
    age: e.age,
    income: e.income,
    married: e.married,
    hasCar: e.hasCar
    }
  });
  console.log(newArray);
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą  iš objektų, kuriuose "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  let newArray = people
  

  newArray = newArray.map((e) =>{
    return{
    fullname: e.name + ' ' + e.surname,
    sex: e.sex,
    age: e.age,
    salary: e.income,
    married: e.married,
    hasCar: e.hasCar
    }
  });
  console.log(newArray);
}
console.groupEnd();

