export class Person {

    constructor(public name: string, public surname: string, public age: number){}

     getDetails(){
        let risultato: string = `il nome è ${this.name}, il cognome è ${this.surname} l'età è: ${this.age}`
        return risultato;
    }

    public getDenomination(){
        let denomination: string = `${this.name} ${this.surname}`.toUpperCase();
        return denomination;
    }
}