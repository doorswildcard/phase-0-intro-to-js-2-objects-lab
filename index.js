// Write your solution in this file!
const employee = {

    employee: {
        name: "Eduardo",
        address: "Jersey City"
    }

}

function updateEmployeeWithKeyAndValue(employee, key , value){
    const newEmp = {...employee};
    newEmp[key] = value;

    return newEmp;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key , value){
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newEmpl = {...employee};
    delete newEmpl[key];
    return newEmpl;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
