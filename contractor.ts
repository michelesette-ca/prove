interface Contractor {
    companyName: string,
    hourlyRate: number
}


export function hireContractor(c: Contractor): string {
    let x: string;
    return x = c.companyName, c.hourlyRate.toString();
}

export let contractor: Contractor = {
    companyName: "CodeArchitects",
    hourlyRate: 30,
};

console.log(contractor.companyName, contractor.hourlyRate);
