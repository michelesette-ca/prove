interface Contractor {
    companyName: string,
    hourlyRate: number
}


export function hireContractor(c: Contractor): string { 
    return `l'azienda è: ${c.companyName} e la paga oraria è: ${c.hourlyRate.toString()}`;
}

export let contractor: Contractor = {
    companyName: "CodeArchitects",
    hourlyRate: 30,
};

// console.log(contractor.companyName, contractor.hourlyRate);
