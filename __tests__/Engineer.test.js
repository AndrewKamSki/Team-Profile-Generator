const Engineer = require('../lib/Engineer');


describe("Engineer", () => {
    describe("Initialization", () => {
        it("create an object with a name, id, email, and github if provided vaild arguments",() => {
            const engineer = new Engineer('Andy', 20, 'andy.kaminski42@gmail.com', 'AndrewKamSki');
            
            expect(engineer.gitHub).toEqual("AndrewKamSki");
        });

        it("tests getGitHub() method to retrieve github username",() => {
            const engineer = new Engineer('Andy', 20, 'andy.kaminski42@gmail.com', 'AndrewKamSki');
            
            expect(engineer.getGitHub()).toEqual("AndrewKamSki");
        });

        it("tests getRole() method to retrieve engineer role",() => {
            const engineer = new Engineer('Andy', 20, 'andy.kaminski42@gmail.com', 'AndrewKamSki');
            
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});