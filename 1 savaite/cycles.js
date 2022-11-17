/*
  Užduotis reikia atlikti 2 kartus
    * su for ciklu
    * su while ciklu
*/

const numbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

console.groupCollapsed('For');
{
  console.groupCollapsed('1. Sukurkite ciklą kuris 5 kartus atspausdintų "Sveikas Pasauli"');
  {
    for(i = 0; i < 5; i++){
      console.log('HELLO WORLD')
    }
  }
  console.groupEnd();
  console.groupCollapsed('2. Sukurkite ciklą kuris atspausdintų nuo 1 iki 5. Naudojant <');
  {
    for(i = 1; i < 6; i++){
      console.log(i);
    }


  }
  console.groupEnd();
  console.groupCollapsed('3. Sukurkite ciklą kuris atspausdintų nuo 3 iki 7. Naudojant <');
  {
    for(i = 3; i < 8; i++){
      console.log(i);
    }

  }
  console.groupEnd();
  console.groupCollapsed('4. Sukurkite ciklą kuris atspausdintų nuo -3 iki 2. Naudojant <');
  {
    for(i = -3; i < 3; i++){
      console.log(i);
    }

  }
  console.groupEnd();
  console.groupCollapsed('5. Sukurkite ciklą kuris atspausdintų nuo 1 iki 5. Naudojant <=');
  {
    for(i = 1; i <= 5; i++){
      console.log(i);
    }

  }
  console.groupEnd();
  console.groupCollapsed('6. Sukurkite ciklą kuris atspausdintų nuo 3 iki 7. Naudojant <=');
  {
    for(i = 3; i <= 7; i++){
      console.log(i);
    }

  }
  console.groupEnd();
  console.groupCollapsed('7. Sukurkite ciklą kuris atspausdintų nuo -3 iki 2. Naudojant <=');
  {
    for(i = -3; i <= 2; i++){
      console.log(i);
    }

  }
  console.groupEnd();
  console.groupCollapsed('8. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki -3. Naudojant >');
  {
    for(i = 2; i > -4; i--){
      console.log(i);
    }

  }
  console.groupEnd();
  console.groupCollapsed('9. Sukurkite ciklą kuris atspausdintų nuo -5 iki iki -10. Naudojant >');
  {
    for(i = -5; i > -11; i--){
      console.log(i);
    }

  }
  console.groupEnd();
  console.groupCollapsed('10. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki 1. Naudojant >');
  {
    for(i = 2; i > 0; i--){
      console.log(i);
    }

  }
  console.groupEnd();
  console.groupCollapsed('11. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki -3. Naudojant >=');
  {
    for(i = 2; i >= -3; i--){
      console.log(i);
    }

  }
  console.groupEnd();
  console.groupCollapsed('12. Sukurkite ciklą kuris atspausdintų nuo -5 iki iki -10. Naudojant >=');
  {
    for(i = -5; i >= -10; i--){
      console.log(i);
    }

  }
  console.groupEnd();
  console.groupCollapsed('13. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki 1. Naudojant >=');
  {
    for(i = 2; i >= 1; i--){
      console.log(i);
    }

  }
  console.groupEnd();
  console.groupCollapsed('14. Sukurkite ciklą kuris atspausdintų 2, 4, 6, 8, 10. Naudojant žingsnį +2');
  {
    for(i = 2; i <= 10; i+=2){
      console.log(i);
    }

  }
  console.groupEnd();
  console.groupCollapsed('15. Sukurkite ciklą kuris atspausdintų 2, 4, 6, 8, 10. Tikrinant ar kintamasis yra lyginis. Naudokite liekanos operatorių');
  {
    for(i = 2; i <= 10; i+=2){
      console.log(i);
      if( i%2 === 0){
        console.log('even')
      }else(console.log("odd"));
    }

  }
  console.groupEnd();
  console.groupCollapsed('16. Sukurkite ciklą kuris atspausdintų 4, 1, -2, -5, -8. Naudojant žingsnį -3');
  {
    for(i = 4; i >= -8; i-=3){
      console.log(i);
    }

  }
  console.groupEnd();
  console.groupCollapsed('17. Sukurkite ciklą kuris atspausdintų 3, 0, -3, -6, -9. Tikrinant ar kintamojo liekana dalinant iš 3 yra lygi 0?');
  {
    for(i = 3; i >= -9; i-=3){
      console.log(i);
      if(i % 3 === 0){
        console.log('good')
      }else(console.log('nop'));
    }

  }
  console.groupEnd();
  console.groupCollapsed('18. Sukurkite ciklą kuris atspausdintų 2, 0, -2, -4, -6. Naudojant kintamojo liekaną');
  {
   
   for(i = 8%6 ; i >= -6; i-=2){
    console.log(i)
   }
   

  }
  console.groupEnd();
  console.groupCollapsed('19. Sukurkite ciklą kuris atspausdintų 2, -1, -4, -7, -10. Naudojant kintamojo liekaną');
  {
    for(i = 8%6 ; i >= -10; i-=3){
      console.log(i)
     }

  }
  console.groupEnd();
  console.groupCollapsed('20. Atspausdinkite <numbers> masyvo elementus nuo pirmo iki paskutinio');
  {

  }
  console.groupEnd();
  console.groupCollapsed('21. Atspausdinkite <numbers> masyvo elementus nuo 3 iki paskutinio');
  {

  }
  console.groupEnd();
  console.groupCollapsed('22. Atspausdinkite <numbers> masyvo elementus nuo 2 iki prieš paskutinio');
  {

  }
  console.groupEnd();
  console.groupCollapsed('23. Atspausdinkite <numbers> masyvo elementus nuo paskutinio iki pirmo');
  {

  }
  console.groupEnd();
  console.groupCollapsed('24. Atspausdinkite <numbers> masyvo elementus nuo paskutinio iki antro');
  {

  }
  console.groupEnd();
  console.groupCollapsed('25. Atspausdinkite <numbers> masyvo elementus nuo prieš paskutinio iki trečio');
  {

  }
  console.groupEnd();
  console.groupCollapsed('26. Atspausdinkite <numbers> masyvo kas antrą elementą iš kairės į dešinę');
  {

  }
  console.groupEnd();
  console.groupCollapsed('27. Atspausdinkite <numbers> masyvo kas trečią elementą iš kairės į dešinę');
  {

  }
  console.groupEnd();
  console.groupCollapsed('28. Atspausdinkite <numbers> masyvo kas antrą elementą iš kairės į dešinę, pradedant trečiu');
  {

  }
  console.groupEnd();
  console.groupCollapsed('29. Atspausdinkite <numbers> masyvo kas antrą elementą iš dešinės');
  {

  }
  console.groupEnd();
  console.groupCollapsed('30. Atspausdinkite <numbers> masyvo kas trečią elementą iš dešinės');
  {

  }
  console.groupEnd();
  console.groupCollapsed('31. Atspausdinkite <numbers> masyvo kas antrą elementą iš dešinės, pradedant prieš prieš paskutiniu');
  {

  }
  console.groupEnd();
}
console.groupEnd();

console.groupCollapsed('WHILE');
{
  console.groupCollapsed('1. Sukurkite ciklą kuris 5 kartus atspausdintų "Sveikas Pasauli"');
  {

  }
  console.groupEnd();
  console.groupCollapsed('2. Sukurkite ciklą kuris atspausdintų nuo 1 iki 5. Naudojant <');
  {

  }
  console.groupEnd();
  console.groupCollapsed('3. Sukurkite ciklą kuris atspausdintų nuo 3 iki 7. Naudojant <');
  {

  }
  console.groupEnd();
  console.groupCollapsed('4. Sukurkite ciklą kuris atspausdintų nuo -3 iki 2. Naudojant <');
  {

  }
  console.groupEnd();
  console.groupCollapsed('5. Sukurkite ciklą kuris atspausdintų nuo 1 iki 5. Naudojant <=');
  {

  }
  console.groupEnd();
  console.groupCollapsed('6. Sukurkite ciklą kuris atspausdintų nuo 3 iki 7. Naudojant <=');
  {

  }
  console.groupEnd();
  console.groupCollapsed('7. Sukurkite ciklą kuris atspausdintų nuo -3 iki 2. Naudojant <=');
  {

  }
  console.groupEnd();
  console.groupCollapsed('8. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki -3. Naudojant >');
  {

  }
  console.groupEnd();
  console.groupCollapsed('9. Sukurkite ciklą kuris atspausdintų nuo -5 iki iki -10. Naudojant >');
  {

  }
  console.groupEnd();
  console.groupCollapsed('10. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki 1. Naudojant >');
  {

  }
  console.groupEnd();
  console.groupCollapsed('11. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki -3. Naudojant >=');
  {

  }
  console.groupEnd();
  console.groupCollapsed('12. Sukurkite ciklą kuris atspausdintų nuo -5 iki iki -10. Naudojant >=');
  {

  }
  console.groupEnd();
  console.groupCollapsed('13. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki 1. Naudojant >=');
  {

  }
  console.groupEnd();
  console.groupCollapsed('14. Sukurkite ciklą kuris atspausdintų 2, 4, 6, 8, 10. Naudojant žingsnį +2');
  {

  }
  console.groupEnd();
  console.groupCollapsed('15. Sukurkite ciklą kuris atspausdintų 2, 4, 6, 8, 10. Tikrinant ar kintamasis yra lyginis. Naudokite liekanos operatorių');
  {

  }
  console.groupEnd();
  console.groupCollapsed('16. Sukurkite ciklą kuris atspausdintų 4, 1, -2, -5, -8. Naudojant žingsnį -3');
  {

  }
  console.groupEnd();
  console.groupCollapsed('17. Sukurkite ciklą kuris atspausdintų 3, 0, -3, -6, -9. Tikrinant ar kintamojo liekana dalinant iš 3 yra lygi 0?');
  {

  }
  console.groupEnd();
  console.groupCollapsed('18. Sukurkite ciklą kuris atspausdintų 2, 0, -2, -4, -6. Tikrinant ar kintamojo liekana');
  {

  }
  console.groupEnd();
  console.groupCollapsed('19. Sukurkite ciklą kuris atspausdintų 2, -1, -4, -7, -10. Tikrinant ar kintamojo liekana');
  {

  }
  console.groupEnd();
  console.groupCollapsed('20. Atspausdinkite <numbers> masyvo elementus nuo pirmo iki paskutinio');
  {

  }
  console.groupEnd();
  console.groupCollapsed('21. Atspausdinkite <numbers> masyvo elementus nuo 3 iki paskutinio');
  {

  }
  console.groupEnd();
  console.groupCollapsed('22. Atspausdinkite <numbers> masyvo elementus nuo 2 iki prieš paskutinio');
  {

  }
  console.groupEnd();
  console.groupCollapsed('23. Atspausdinkite <numbers> masyvo elementus nuo paskutinio iki pirmo');
  {

  }
  console.groupEnd();
  console.groupCollapsed('24. Atspausdinkite <numbers> masyvo elementus nuo paskutinio iki antro');
  {

  }
  console.groupEnd();
  console.groupCollapsed('25. Atspausdinkite <numbers> masyvo elementus nuo prieš paskutinio iki trečio');
  {

  }
  console.groupEnd();
  console.groupCollapsed('26. Atspausdinkite <numbers> masyvo kas antrą elementą iš kairės į dešinę');
  {

  }
  console.groupEnd();
  console.groupCollapsed('27. Atspausdinkite <numbers> masyvo kas trečią elementą iš kairės į dešinę');
  {

  }
  console.groupEnd();
  console.groupCollapsed('28. Atspausdinkite <numbers> masyvo kas antrą elementą iš kairės į dešinę, pradedant trečiu');
  {

  }
  console.groupEnd();
  console.groupCollapsed('29. Atspausdinkite <numbers> masyvo kas antrą elementą iš dešinės');
  {

  }
  console.groupEnd();
  console.groupCollapsed('30. Atspausdinkite <numbers> masyvo kas trečią elementą iš dešinės');
  {

  }
  console.groupEnd();
  console.groupCollapsed('31. Atspausdinkite <numbers> masyvo kas antrą elementą iš dešinės, pradedant prieš prieš paskutiniu');
  {

  }
  console.groupEnd();
}
console.groupEnd();
