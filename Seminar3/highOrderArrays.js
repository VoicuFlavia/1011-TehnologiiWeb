const arr=[123,54,323,564]

const filterArr=arr.filter(el=>el%2===0);

console.log(filterArr)

const newForEachArray=arr.forEach((el,index)=>{
    // console.log(el);
    // console.log(index);

    return el*10;
})

const newMapArray=arr.map(async(el)=>{
    return el*10;
})

// console.log(newForEachArray);
// console.log(newMapArray);

const sum = arr.reduce( (acumulator,el) => acumulator+el, 0);
console.log(sum);

const foundNumber= arr.find(el=>el===54)
console.log(foundNumber)