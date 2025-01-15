"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    getDetails() {
        let risultato = `il nome è ${this.name}, il cognome è ${this.surname} l'età è: ${this.age}`;
        return risultato;
    }
    getDenomination() {
        let denomination = `${this.name} ${this.surname}`.toUpperCase();
        return denomination;
    }
}
exports.Person = Person;
