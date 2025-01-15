import { contractor, hireContractor } from "./contractor";
import { Department, Employee } from "./employee";

let istanza = new Employee("Domenigo", "Fortunato", 12, "occupato", Department.Engineering);

hireContractor(contractor);
console.log(istanza);
