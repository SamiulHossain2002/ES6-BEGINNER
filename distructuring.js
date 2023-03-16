const book = {name:'learn-programming',id:101, price:500,color:'green'};

// const price = book.price;
// const color = book.color;
// console.log(color);

//distructuring:
//const {id,color,price}=book;
//console.log(id,color,price);

const company ={
    name:'web-developer',
    ceo:{
        name:"ALI-VAI",
        id:1,
        food:'kacchi',
    },
    web:{
        work:'website developer',
        employee:11,
        framework:'react',
        tech:{
            first:'HTML',
            second:'CSS',
            third:'bootstrap',
            final:'JAVASCRIPT',

        }
    }
}
// const js=company.web.tech.final; //chaining:
// const js=company.web.tech.final; //chaining:
const framework=company.web.tech.third; //chaining:
console.log(framework);

// ?=ternary operator: কোন একটা পজিশনে error আসবে এমন সন্দেহ হলে এই (?)অপারেটর ব্যবহার করা হয় .

const framework2=company.web.thech?.third; 
console.log(framework2);