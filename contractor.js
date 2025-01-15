"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contractor = void 0;
exports.hireContractor = hireContractor;
function hireContractor(c) {
    let x;
    return x = c.companyName, c.hourlyRate.toString();
}
exports.contractor = {
    companyName: "CodeArchitects",
    hourlyRate: 30,
};
console.log(exports.contractor.companyName, exports.contractor.hourlyRate);
