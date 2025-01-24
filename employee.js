"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = exports.Department = void 0;
const person_1 = require("./person");
var Department;
(function (Department) {
    Department["HR"] = "HR";
    Department["Engineering"] = "Engineering";
    Department["Marketing"] = "Marketing";
})(Department || (exports.Department = Department = {}));
class Employee extends person_1.Person {
    constructor(name, surname, age, position, department) {
        super(name, surname, age);
        this.position = position;
        this.department = department;
    }
    getDetails() {
        //  string = `${this.name}, ${this.surname}, ${this.age}, ${this.position}, ${this.department}`
        return super.getDetails() + `${this.position}, ${this.department}`;
    }
    performTask(task) {
        return __awaiter(this, void 0, void 0, function* () {
            task = ["a", "b"];
            console.log("juan sta eseguendo il " + task);
        });
    }
}
exports.Employee = Employee;
