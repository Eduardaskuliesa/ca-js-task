console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  const list = ['pirmas', 2 ,'trecias']
  function pirmasElementas(list){
    return list[0]
  }
  console.log(pirmasElementas(list));
}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
var array = ['bigfoot', 'momfoot', 'smallfoot', 'richfoot']
function firstElementDelet(array){
  let delet = array.shift();
  return(delet);
}
console.log(firstElementDelet(array))
  
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  var array = ['bigfoot', 'momfoot', 'smallfoot', 'richfoot']
  function lastElementDelet(array){
    return array[3];
  }
  console.log(lastElementDelet(array))
    
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
  var array = ['bigfoot', 'momfoot', 'smallfoot', 'richfoot']
  function lastElementDelet(array){
    let delet = array.pop();
    return(delet);
  }
  console.log(lastElementDelet(array))
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
  var array = ['bigfoot', 'momfoot', 'smallfoot', 'richfoot'];
  function countElements(array){
    let total = array.length;
    return total;
  }
  console.log(countElements(array));
}

console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  var array = ['bigfoot', 'momfoot', 'smallfoot', 'richfoot'];
 function lastIndex(array){
  let last = array.indexOf('richfoot')
  return last;
 }
 console.log(lastIndex(array));
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  const masyvas = [-111, 2, -9, 48]
  function printAll(masyvas){
    for(let i = 0; i < masyvas.length; i++){
      console.log(i);
    }
  }
  printAll(masyvas);


}
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  const masyvas = ['bigfoot', 'momfoot', 'smallfoot', 'richfoot']
  function printAll(masyvas){
    for(let i = 0; i < masyvas.length; i++){
      console.log(masyvas[i]);
    }
  }
  printAll(masyvas);
}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  const masyvas = ['bigfoot', 'momfoot', 'smallfoot', 'richfoot']
  function printAll(masyvas){
    for(let i = 0; i < masyvas.length; i++){
      console.log(i + " " + '=>'+ " " + masyvas[i]);
    }
  }
  printAll(masyvas);
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  const masyvas = ['bigfoot', 'momfoot', 'smallfoot', 'richfoot']
  function printAll(masyvas){
    for(let i = masyvas.length -1; i >= 0; i--){
      console.log(masyvas[i])
    }
  }
  printAll(masyvas);
}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  
}
console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
  const masyvas = [-111, 2, -9, 48]
  function printAll(masyvas){
    for(let i = 3; i < masyvas.length; i++){
      let str = masyvas.join(' ');
      console.log(str);
    }
  }
  printAll(masyvas)
}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{
  const masyvas = [-111, 2, -9, 48]
  function printAll(masyvas){
    for(let i = 3; i < masyvas.length; i++){
      let str = masyvas.join(' ');
      let b = i - 3; 
      console.log(b + str);
    }
  }
  printAll(masyvas)
}
console.groupEnd();
