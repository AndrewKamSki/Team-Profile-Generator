const Manager = require('../lib/Manager');


describe( "Manager", () => {
    describe("Initialization", () => {
        it("create an object with a name, id, email, and office number if provided vaild arguments",() => {
            const manager = new Manager('Andy', 20, 'andy.kaminski42@gmail.com', 123);
            
            expect (manager.officeNumber).toEqual(123);
        });

        it("tests getRole() method to retrieve manager role",() => {
            const manager = new Manager('Andy', 20, 'andy.kaminski42@gmail.com', 123);
            
            expect (manager.getRole()).toEqual( "Manager");
        });
    });
});