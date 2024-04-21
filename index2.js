const personPrototype = {
    greet: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};
const person = Object.create(personPrototype);
person.name = 'John';
person.age = 30;
person.email = 'john@example.com';


personPrototype.greet()

// console.log("hello")



// arrarys 


let selectedColors=['red','green'];
selectedColors[2]='blue';
selectedColors[3]=10;
console.log(selectedColors.length);



function demo(){

console.log("today is Sunday")

}
demo();
function add(num1,num2){

    console.log(num1+num2);
}

add(3,4);


function hello(name,lastName){

    console.log("hello, "+name+" "+lastName);
}

hello("abhishek","khare")