// Imports
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Modules
const inquirer = require('inquirer');
const fs = require('fs');

// Team
const team = [];

// Manager questions
const managerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "Please enter the team's Manager:",
  },
  {
    type: 'input',
    name: 'id',
    message: "Please enter the Manager's id number:",
  },
  {
    type: 'input',
    name: 'email',
    message: "Please enter the Manager's email address:",
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: "Please enter the Manager's office number:",
  },
];

// Create Team
const createTeam = () => {
  return inquirer.prompt([...managerQuestions])
  .then(input => {
    const {name, id, email, officeNumber} = input;
    const manager = new Manager(name, id, email, officeNumber);
    // Add to team
    team.push(manager);
    console.log(manager);
  })
}

createTeam();

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data, (err) =>
//       err ? console.log(err) : console.log('Successfully created README.md')
//   );
// }

// // TODO: Create a function to initialize app
// function init() {
//   inquirer
//     .prompt([...questions])
//     .then((answers) => {
//       writeToFile('README.md',generateMarkdown({...answers}));
//     })
// }

// // Function call to initialize app
// init();
