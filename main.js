"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contractor_1 = require("./contractor");
const employee_1 = require("./employee");
let istanza = new employee_1.Employee("Domenigo", "Fortunato", 12, "occupato", employee_1.Department.Engineering);
(0, contractor_1.hireContractor)(contractor_1.contractor);
console.log(istanza);
