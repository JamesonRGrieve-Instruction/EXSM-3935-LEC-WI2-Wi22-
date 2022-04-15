async function main() {
    let theEmployee = {
        firstName: "John",
        lastName: "Doe",
        employeeNumber: 1001,
        department: "Shipping and Recieving",
        subordinates: [
            {
                firstName: "Jane",
                lastName: "Doe",
                employeeNumber: 1002,
                department: "Shipping and Recieving",
                subordinates: []
            },
            {
                firstName: "Bob",
                lastName: "Doe",
                employeeNumber: 1002,
                department: "Shipping and Recieving",
                subordinates: []
            },
            {
                firstName: "Sally",
                lastName: "Doe",
                employeeNumber: 1002,
                department: "Shipping and Recieving",
                subordinates: []
            }
        ]

    };

    output(`Employee ${theEmployee.firstName} ${theEmployee.lastName} with employee number ${theEmployee.employeeNumber} is currently working in the ${theEmployee.department} department.`);

    theEmployee.department = "Sales";

    output(`Employee ${theEmployee.firstName} ${theEmployee.lastName} with employee number ${theEmployee.employeeNumber} is currently working in the ${theEmployee.department} department.`);

    output(theEmployee.subordinates[0].firstName);

    for (employee of theEmployee.subordinates)
    {
        output(employee.firstName);
    }

    let objectString = JSON.stringify(theEmployee);

    let anotherObject = JSON.parse(objectString);

    
    output(`Employee ${anotherObject.firstName} ${anotherObject.lastName} with employee number ${anotherObject.employeeNumber} is currently working in the ${anotherObject.department} department.`);

    theEmployee.department = "Management";

    output(`Original: Employee ${theEmployee.firstName} ${theEmployee.lastName} with employee number ${theEmployee.employeeNumber} is currently working in the ${theEmployee.department} department.`);
    output(`Imported: Employee ${anotherObject.firstName} ${anotherObject.lastName} with employee number ${anotherObject.employeeNumber} is currently working in the ${anotherObject.department} department.`);
    
}

