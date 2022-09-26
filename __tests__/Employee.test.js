const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("create an object with a name, id, and email if provided vaild arguments",() => {
            const employee = new Employee('Andy', 20, 'andy.kaminski42@gmail.com');
            
            expect(employee.name).toEqual("Andy");
            expect(employee.id).toEqual(20);
            expect(employee.email).toEqual("andy.kaminski42@gmail.com");
        })
    })
})