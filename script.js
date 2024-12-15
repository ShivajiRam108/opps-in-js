
 // Q -1
 class book{
    title;
    author;
    isbn;
    constructor (title,author, isbn ){
        this.title = title;
        this. author = author;
        this. isbn = isbn;
    }
    chackout(){
        console.log(this.title,"ravindranth has been taken");
    }
    return(){
        console.log(this.title,"He is return the book");
    }
    updatedtitle(newtitle){
        this.title = newtitle;

    }

 }
 var bookone = new book ("vandemathar" , "ravindranth" , "152");
 bookone.chackout();
 bookone.return();
 bookone.updatedtitle("Ramayanam");
 console.log(bookone);
 var booktwo = new book ("html", "lee", "1995") 
 console.log(booktwo);
 

 // Q-2 
 class product{
    name;
    price;
    category;
    
    constructor(name , price , category){
       this.  name = name;
         this. price = price;
         this. category = category;
    }
    discount(){
        console.log(this. name, "The sirt price will be decreased , i will given discount of 10% of this shirt");
    }
    totalprice(newname){
        console.log(newname);
    }
}

var productone = new product ("shirt" ,"699" , "baseball");
productone.discount();
productone.totalprice("630");
console.log(productone);

// Q -3
class bankaccount{
    accountHolderName;
    accountNumber;
    balance;

    constructor ( accountHolderName , accountNumber , balance ){
        this. accountHolderName = accountHolderName;
        this. accountNumber = accountNumber;
        this. balance = balance;
    }
    deposit(amount){
        this.balance = this.balance+amount;
        console.log(" I deposit in your account 30,000 . current balance in my account  40,000");
    }
    withdraw(amount){
        this.finalbalance = this.balance-amount;
        console.log(" I was withdrew in my account  10,000. ofter that my current balance in my account 40,000 - 10,000 = 30,000.");
    }
    balance1(newnumber){
        console.log(newnumber);
    }

}
var account1 = new bankaccount ("Ram", "123567880838", "40,000");
account1.deposit();
account1.withdraw();
account1.balance1("30,000");
console.log(account1);
// Q -4
class  VehicleManagement{
    model;
    licenseplate;
    mileage;

    constructor( model , licenseplate , mileage){
        this. model = model;
        this. licenseplate = licenseplate;
        this. mileage = mileage;
    }
    drive(){
        console.log(this.model, "when you put in key in bike, and click the start button it will start");
    }
    mileage11(){
        console.log( this. mileage , "The pulsar given the mileage of 1leter  70 kph it is a new model of pulsar.");
    }
    mileage11(newname){
        console.log(newname);
    }

    

}

var bike1 = new VehicleManagement ("pulsar" , "5856" , "60kph" );
bike1.drive();
bike1.mileage11("70kph");
console.log(bike1);
// Q -5
class gradingsystem{
    name;
    grade;
    subject;

    constructor(name, grade, subject){
        this.name = name;
        this. grade = grade;
        this. subject = subject;

    }
    updategrade(){
       console.log("The grade is updated for B")
    }
    currentgrade(newgrade){
        console.log(newgrade);
    }

}
var mom = new gradingsystem("ram","A", "english");
mom.updategrade();
mom.currentgrade();
console.log(mom); 

