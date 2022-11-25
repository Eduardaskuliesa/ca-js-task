// ----------------------Užduotys--------------------------
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

console.group('1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve');
console.log('---');
{
  
  function mulArrBy2(numbers) {
    let newMasyvas = numbers.map((x) => x * 2);
    return newMasyvas;
  }
  console.log({
    numbers,
    result: mulArrBy2(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('2. Pakelti masyvo narius kvadratu ir išsaugoti naujame masyve');
console.log('---');
{
  
  function powerArrBy2(numbers) {
    let newMasyvas = numbers.map((x) => x * x);
    return newMasyvas;
  }
  console.log({
    numbers,
    result: powerArrBy2(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('3. Padauginti masyvo narius iš jų index\'o (vietos masyve) ir išsaugoti naujame masyve');
console.log('---');
{
    function mulArrElementsByIndex(numbers){
      let newMasyvas = numbers.map((item, index) => item * index);
      return newMasyvas
    }
    
  }
  console.log({
    numbers,
    result: mulArrElementsByIndex(numbers)
  });

console.log('---');
console.groupEnd();
console.log();

console.group('4. Atrinkti tiktai teigimų elementų masyvą');
console.log('---');
{
  function filterPositives(numbers) {
   let newMasyvas = numbers.filter((item) => item > 0);
   return newMasyvas
  }
  
  console.log({
    numbers,
    result: filterPositives(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('5. Atrinkti tiktai neigiamų elementų masyvą');
console.log('---');
{
  function filterNegatives(numbers) {
    let newMasyvas = numbers.filter((item) => item < 0);
    return newMasyvas
  }
   console.log({
     numbers,
     result: filterNegatives(numbers)
   });
}
console.log('---');
console.groupEnd();
console.log();

console.group('6. Atrinkti tiktai lyginių skaičių masyvą');
console.log('---');
{
  function filterEquals(numbers) {
    let newMasyvas = numbers.filter((item) => item % 2 === 0);
    return newMasyvas
  }
   console.log({
     numbers,
    result: filterEquals(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('7. Atrinkti tiktai nelyginių skaičių masyvą');
console.log('---');
{
  function filterOdds(numbers) {
    let newMasyvas = numbers.filter((item) => item % 2 !== 0);
    return newMasyvas
  }
   console.log({
     numbers,
     result: filterOdds(numbers)
   });
}
console.log('---');
console.groupEnd();
console.log();

console.group("8. Visas neigiamas vertes masyve padaryti teigiamomis ir išsaugoti į naują masyvą");
{
  function arrAbsoluteValues(numbers) {
    let newMasyvas = numbers.map((item) => Math.abs(item));
    return newMasyvas
  }

  console.log('---');
  console.log({
    numbers,
    result: arrAbsoluteValues(numbers)
  });
  console.log('---');
}
console.groupEnd();
console.log();

console.group('9. Pakelti visas masyvo reikšmes laipsniu \'index\' ir išsaugoti naujame masyve');
console.log('---');
{
  function powArrElementsByIndex(numbers) {
    let newMasyvas = numbers.map((item, index) => item ** index);
    return newMasyvas
  }
   console.log({
     numbers,
     result: powArrElementsByIndex(numbers)
   });
}
console.log('---');
console.groupEnd();
console.log();

console.group('10. Atrinkti tik natūralių skaičių masyvą');
console.log('---');
{
  function filterNaturals(numbers) {
    const newMasyvas = numbers.filter((item) => item > 0 && item % 1 === 0);
    return newMasyvas;
  }
   console.log({
     numbers,
     result: filterNaturals(numbers)
   });
}
console.log('---');
console.groupEnd();
console.log();

console.group('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių ir išsaugoti naujame masyve');
console.log('---');
{
  function absArrElements(numbers) {
    const newMasyvas = numbers.map((item) => Math.round(item));
    return newMasyvas;
  }
  console.log({
     numbers,
     result: absArrElements(numbers)
   });
}
console.log('---');
console.groupEnd()

console.group('12. Atrinkti kas antrą elementą');
console.log('---');
{
  function filterEverySecond(numbers) {
    const newMasyvas = numbers.filter((_, index) => index % 2 === 0 );
    return newMasyvas;
    }
  
  }
   console.log({
    numbers,
     result: filterEverySecond(numbers)
   });

console.log('---');
console.groupEnd();

console.group('13. Atrinkti kas penktą elementą');
console.log('---');
{
  function filterEveryFifth(numbers) {
    const newMasyvas = numbers.filter((_, index) => index % 2 === 1 + 4 );
    return newMasyvas;
  }
   console.log({
     numbers,
     result: filterEveryFifth(numbers)
   });
}
console.log('---');
console.groupEnd();


console.group('14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)');
console.log('---');
{
  function printArr(numbers) {
    const newMasyvas = numbers.map((item, index) => index + '=>' + item);
    return newMasyvas;
  }
    
    

  
  console.log(numbers);
  printArr(numbers);

}
console.log('---');
console.groupEnd();

console.group('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
console.log('---');

  function sumArr(numbers) {
    const newMasyvas = numbers.reduce((accumulator, item) => accumulator + item, 0)
    return newMasyvas;
  }
   console.log({
     numbers,
     result: sumArr(numbers)
   });

console.log('---');
console.groupEnd()

console.group('16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį');
console.log('---');
{
  function avgArr(numbers) {
    const newMasyvas = numbers.reduce((accumulator, item) => accumulator + item, 0) / numbers.length;
    return newMasyvas;
  }

  console.log({
     numbers,
     result: avgArr(numbers)
   });
}
console.log('---');
console.groupEnd()

console.group('17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
console.log('---');

  
  function arrMax(numbers) {
    const newMasyvas = numbers.reduce((accumulator, item) => Math.max(accumulator, item));
    return newMasyvas;
  }
  console.log({
     numbers,
    result: arrMax(numbers)
  });

console.log('---');
console.groupEnd()

console.group('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
console.log('---');
{
  function arrMin(numbers) {
    const newMasyvas = numbers.reduce((accumulator, item) => Math.min(accumulator, item));
    return newMasyvas;
  }

   console.log({
     numbers,
     result: arrMin(numbers)
   });
}
console.log('---');
console.groupEnd();
