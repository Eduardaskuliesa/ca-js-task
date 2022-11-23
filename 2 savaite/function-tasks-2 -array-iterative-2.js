// ----------------------Užduotys--------------------------
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

console.group('1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve');
console.log('---');
{
  let newMasyvas = []
  function mulArrBy2(numbers) {
    for (let i = 0; i < numbers.length; i+= 1) {
      newMasyvas[i] = numbers[i] * 2;
      
    }
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
  let newMasyvas = []
  function powerArrBy2(numbers) {
    for (let i = 0; i < numbers.length; i+= 1) {
      newMasyvas[i] = numbers[i] * numbers[i];
      
    }
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
    function mulArrElementsByIndex(numbers) {
      const resultArr = [];
      for (let i = 0; i < numbers.length; i += 1) {
        resultArr[i] = numbers[i] * i;
        // result.push(arr[i] * i);
      }
  
      return resultArr;
  }
  console.log({
    numbers,
    result: mulArrElementsByIndex(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('4. Atrinkti tiktai teigimų elementų masyvą');
console.log('---');
{
  function filterPositives(array) {
    let pos = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 0) {
        pos.push(array[i]);
      }
    }
    return pos;
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
  function filterNegatives(array) {
    let pos = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] < 0) {
        pos.push(array[i]);
      }
    }
    return pos;
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
  function filterEquals(array) {
    let pos = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        pos.push(array[i]);
      }
    }
    return pos;
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
  function filterOdds(array) {
    let pos = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 1) {
        pos.push(array[i]);
      }else if (array[i] % 2 === -1){
        pos.push(array[i])
      }
    }
    return pos;
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
  function arrAbsoluteValues(array) {
    let pos = [];
    for (let i = 0; i < array.length; i++) {
      element = array[i];
      if (element < 0) element *= -1;
      pos.push(element)
    }
    return pos;
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
  function powArrElementsByIndex(array) {
    let pos = [];
    for (let i = 0; i < array.length; i++) {
        pos.push(array[i] * i);
      
    }
    return pos;
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
  function filterNaturals(array) {
    let pos = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 0 && array[i] % 1 ===0) {
        pos.push(array[i]);
      }
    }
    return pos;
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
  function absArrElements(array) {
    let pos = [];
    for (let i = 0; i < array.length; i++) {
      
        pos.push(Math.round(array[i]));
      
    }
    return pos;
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
  function filterEverySecond(array) {
    let pos = [];
    for (let i = 0; i < array.length; i+= 2) {
        pos.push(array[i]);

    }
    return pos;
  }
   console.log({
    numbers,
     result: filterEverySecond(numbers)
   });
}
console.log('---');
console.groupEnd();

console.group('13. Atrinkti kas penktą elementą');
console.log('---');
{
  function filterEveryFifth(array) {
    let pos = [];
    for (let i = 0; i < array.length; i+= 5) {
        pos.push(array[i]);
      
    }
    return pos;
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
  function printArr(array) {
    for(let i = 0; i < array.length; i++){
      console.log(i + " " + '=>'+ " " + array[i]);
    }
  }
    
    

  
  console.log(numbers);
  printArr(numbers);

}
console.log('---');
console.groupEnd();

console.group('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
console.log('---');

  function sumArr(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i+= 1) {
      sum += array[i];
    }
    return(sum);
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
  function avgArr(array) {
    let sum = 0;
    let vidurkis = 0;
    for (let i = 0; i < array.length; i+= 1) {
      let suma = sum  += array[i];
      vidurkis = suma / (i + 1); 
    }
    
    return(vidurkis);
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
{
  
  function arrMax(array) {
    let largest = array[0];
    for (let i = 0; i < array.length; i+=1) {
      if (largest < array[i]){
        largest = array[i];
      }
  }
  return largest;
  }

  console.log({
     numbers,
    result: arrMax(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
console.log('---');
{
  function arrMin(array) {
    let smallest = array[0];
    for (let i = 0; i < array.length; i+=1) {
      if (smallest > array[i]){
        smallest = array[i];
      }
    }
    return smallest;
  }

   console.log({
     numbers,
     result: arrMin(numbers)
   });
}
console.log('---');
console.groupEnd();
