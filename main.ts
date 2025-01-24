import { contractor, hireContractor } from "./contractor";
import { Department, Employee } from "./employee";
import { Person } from "./person";

let istanza = new Employee("Domenigo", "Fortunato", 12, "occupato", Department.Engineering);

let leonardo = hireContractor(contractor);
console.log(leonardo);

console.log(istanza);

let ilenia = new Person("ilenia", "taccogna", 55);
console.log(ilenia.denomination);
