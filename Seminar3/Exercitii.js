const birthYears = [1990, 2000, 1985, 1995, 2005, 2010];
const currentYear= new Date().getFullYear();
const arr=birthYears.map(
    year =>currentYear-year
).filter(age => age>18)

console.log(arr);

// Implementați o funcție care primește ca parametrii un array de numere și un număr și returnează
// suma tuturor numerelor din array divizibile cu cel de-al doilea parametru.

const arr2=[1,2,3,5,6,12,14]

 const sumDivisibleBy = (arr,divizor) =>{
    return arr.filter( el => el%divizor===0).reduce((acc,el)=>acc+el, 0)
 }

 console.log(sumDivisibleBy(arr2,2))
 
 console.log(sumDivisibleBy(arr2,3))