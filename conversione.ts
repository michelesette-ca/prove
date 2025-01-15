interface Person 
{
    firstName: string;
    lastName: string;
}

class Student 
{
    fullName: string;
    constructor (
        public firstName: string,
        public middleInitial: string,
        public lastName: string
    ){
        this.fullName = firstName + "" + middleInitial + "" + lastName;
    }
}

function greeter(person: string)
{
    return "Hello, " + person;
}

let user = "Jane User";

console.log(greeter(user));
