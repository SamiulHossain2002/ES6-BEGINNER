const numbers = [5,6,7,8,9,3,4,3];

// numbers.map(number => console.log(number));


/* 
const doubleit= number => number *2;

const output = numbers.map(doubleit)
console.log(output);  */

//map: condition ছাড়াই কোন কোন কিছু রিটার্ন করার দরকার হলে map() ইউজ করব.
const products = [
    {name:'t-shirt',price:4000, color:'yellow'},
    {name:'barger',price:400, color:'black'},
    {name:'singara',price:10, color:'white'},
    {name:'chop',price:15, color:'halka vaja'}
]

// products.map(product => console.log(product));
const productName= products.map(product => console.log(product));
console.log(productName);