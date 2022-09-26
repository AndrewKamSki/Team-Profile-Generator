const Employee = require('../lib/Employee');

fdescribe("Employee", () => {
    describe("Initialization", () => {
        it("create an object with a name, id, and email if provided vaild arguments",() => {
            const employee = new Employee('Andy', 20, 'andy.kaminski42@gmail.com');
            
            expect(employee.name).toEqual("Andy");
            expect(employee.id).toEqual(20);
            expect(employee.email).toEqual("andy.kaminski42@gmail.com");
        });

        it("retrieve an employee name",() => {
            const employee = new Employee('Andy', 20, 'andy.kaminski42@gmail.com');

            expect(employee.getName()).toEqual("Andy");
        });

        it("retrieve an employee id",() => {
            const employee = new Employee('Andy', 20, 'andy.kaminski42@gmail.com');

            expect(employee.getID()).toEqual(20);
        });

        it("retrieve an employee name",() => {
            const employee = new Employee('Andy', 20, 'andy.kaminski42@gmail.com');

            expect(employee.getEmail()).toEqual("andy.kaminski42@gmail.com");
        });

        it("retrieve a role",() => {
            const employee = new Employee('Andy', 20, 'andy.kaminski42@gmail.com');

            expect(employee.getRole()).toEqual("Employee");
        });
    });
});