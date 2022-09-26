const Intern = require('../lib/Intern');


describe("Intern", () => {
    describe("Initialization", () => {
        it("create an object with a name, id, email, and school if provided vaild arguments",() => {
            const intern = new Intern('Andy', 20, 'andy.kaminski42@gmail.com', 'Ohio State');
            
            expect(intern.school).toEqual("Ohio State");
        });

        it("tests getSchool() method to retrieve school information",() => {
            const intern = new Intern('Andy', 20, 'andy.kaminski42@gmail.com', 'Ohio State');
            
            expect(intern.getSchool()).toEqual("Ohio State");
        });

        it("tests getRole() method to retrieve intern role",() => {
            const intern = new Intern('Andy', 20, 'andy.kaminski42@gmail.com', 'Ohio State');
            
            expect(intern.getRole()).toEqual("Intern");
        });
    });
});