console.log("hello world")
// variable rules
// Rules:
// can't be a reserved keyword
// should have a meaning
// they can't start with a number
// they can't contain space or hphen (-)
// they should follow camel notation (the first letter should be noncapital and next word should be capital ex:firstName)

let firstName="Abhishek";
console.log(firstName);

// Cosntants

let interestRate=0.3; //the value cant be changesd
const interestRate2=7.25;
// interestRate2=9.0; will throw error
console.log(interestRate);
console.log(interestRate2);



function something(name){

    console.log(`Hello, ${name}!`);
}

something("Abhishek");


// objects in JavaScript

let person={
    name:"abhishek",
    age:24,

};

// console.log(person);

// changing the value of key-value pair

person.name="isha";
// or
person['name']='sumit';
console.log(person);


// arrays
const personPrototype = {
    greet: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};
const person = Object.create(personPrototype);
person.name = 'John';
person.age = 30;
person.email = 'john@example.com';



