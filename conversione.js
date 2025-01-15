"use strict";
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + "" + middleInitial + "" + lastName;
    }
}
function greeter(person) {
    return "Hello, " + person;
}
let user = "Jane User";
console.log(greeter(user));
