"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contractor = void 0;
exports.hireContractor = hireContractor;
function hireContractor(c) {
    return `l'azienda è: ${c.companyName} e la paga oraria è: ${c.hourlyRate.toString()}`;
}
exports.contractor = {
    companyName: "CodeArchitects",
    hourlyRate: 30,
};
// console.log(contractor.companyName, contractor.hourlyRate);
