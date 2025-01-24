export class Person {

    constructor(private name: string, private surname: string, public age: number){}

    public getDetails(){
        return `il nome è ${this.name}, il cognome è ${this.surname} l'età è: ${this.age}` 
    }

    get denomination(){
        return `${this.name} ${this.surname}`.toUpperCase();  
    }
}