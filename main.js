"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contractor_1 = require("./contractor");
const employee_1 = require("./employee");
const person_1 = require("./person");
let istanza = new employee_1.Employee("Domenigo", "Fortunato", 12, "occupato", employee_1.Department.Engineering);
let leonardo = (0, contractor_1.hireContractor)(contractor_1.contractor);
console.log(leonardo);
console.log(istanza);
let ilenia = new person_1.Person("ilenia", "taccogna", 55);
console.log(ilenia.denomination);
