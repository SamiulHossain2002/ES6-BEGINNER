class support {
    name;
    desingnation='support wed dev';
    address = 'bangladesh';
    phone=123913928;
    
    //constructor works same like a function.
    constructor(name, address, phone){
      this.name= name;
      this.address=address;
      this.phone=phone;  
    } 
}
const me= new support('samiul','pabna',1581121360);
const he= new support('siam','khulna',1732381360);
console.log(he);