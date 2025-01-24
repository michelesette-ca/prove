import { Person } from "./person"

export enum Department {
    HR = "HR",
    Engineering = "Engineering",
    Marketing = "Marketing"
}

export class Employee extends Person {
    constructor(name: string, surname: string, age: number, public position: string, public department: Department) {
        super(name, surname, age);
    }

    override getDetails() {
        //  string = `${this.name}, ${this.surname}, ${this.age}, ${this.position}, ${this.department}`
        return super.getDetails() + `${this.position}, ${this.department}`
    }

    async performTask(task: string | string[]) {
        task = [ "a", "b"]
        console.log("juan sta eseguendo il " + task)
    }
}