const person ={
    firstName:"john",
    lastname: "Doe",
    age: 30,
    occupation: "Engineer",
    sayHello: function(){
        console.log(`hello, my name is ${this.firstName} ${this.lastname}. i am ${this.age} years old.`);
    },
};

console.log(person.firstName);
console.log(person.lastname);
console.log(person.age);
console.log(person.occupation);
person.sayHello();