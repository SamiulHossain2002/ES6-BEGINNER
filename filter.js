const numbers = [55,67,78,87,99,34,45,33];
const bigNumber = numbers.filter(number => number <= 70);
//console.log(bigNumber);

//filter: condition সহ  একাধিক জিনিস রিটার্ন করতে হলে find() ইউজ করব.
const products = [
    {name:'t-shirt',price:4000, color:'yellow'},
    {name:'barger',price:400, color:'black'},
    {name:'singara',price:10, color:'white'},
    {name:'chop',price:15, color:'halka vaja'}
]

const price = products.filter(item => item.price <5 );
//console.log(price);// filter returns [array].


const myNumbers = [55,67,78,87,99,34,45,99,33];

const findNumber= myNumbers.find(number => number == 99)
//console.log(findNumber);


//forEach: => কখনো রিটার্ন করতে পারে না .তাই শুধু LOOP করার কাজে forEach() ব্যবহার করা যায়.
const yourNumbers = [55,67,78,87,99,34,45,99,33];
const allNewNumber=yourNumbers.forEach(yourNumber => yourNumber);
console.log(allNewNumber);