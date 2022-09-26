// Import html helper code
const populateHTML = require('./src/populateHTML');

// Class Imports
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
    message: "Please enter the Manager's ID number:",
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

// Employee Questions
const employeeQuestions = [
  {
    type: 'list',
    name: 'role',
    message: "Please select employee's role:",
    choices: ['Engineer', 'Intern'],
  },
  {
    type: 'input',
    name: 'name',
    message: "Please enter the employee's name:",
  },
  {
    type: 'input',
    name: 'id',
    message: "Please enter the employee's ID number:",
  },
  {
    type: 'input',
    name: 'email',
    message: "Please enter the employee's email address:",
  },
  {
    type: 'input',
    name: 'gitHub',
    message: "Please enter the employee's github username:",
    when: (input) => input.role === 'Engineer',
  },
  {
    type: 'input',
    name: 'school',
    message: "Please enter the employee's school name:",
    when: (input) => input.role === 'Intern',
  },
  {
    type: 'confirm',
    name: 'checkAddEmployee',
    message: 'Would you like to add more members to the team?'
  }
]

// Create Team
const createTeam = () => {
  return inquirer.prompt([...managerQuestions])
  .then(input => {
    const {name, id, email, officeNumber} = input;
    const manager = new Manager(name, id, email, officeNumber);
    // Add to team
    team.push(manager);
  })
}

// Check Adding Team Members
const checkAddEmployee = () => {
  return inquirer.prompt ([
    {
      type: 'confirm',
      name: 'checkAddEmployee',
      message: 'Would you like to add more members to the team?'
    }
  ])
  .then(check => {
    let {checkAddEmployee} = check;
    if (checkAddEmployee) {
      return addTeamMembers(team);
    } else {
      console.log(team)
      return team;
    }
  })
}

// Adding to Team
const addTeamMembers = () => {
  return inquirer.prompt ([...employeeQuestions])
  .then(input => {
    let {name, id, email, role, gitHub, school, checkAddEmployee} = input;
    let employee;

    if (role === 'Engineer') {
      employee = new Engineer(name, id, email, gitHub);
    }
    if (role === 'Intern') {
      employee = new Intern(name, id, email, school);
    }

    team.push(employee);

    if (checkAddEmployee) {
      return addTeamMembers(team);
    } else {
      console.log(team)
      return team;
    }
  })
}

// Write HTML file
const writeToFile = data => {
  fs.writeFile('./dist/index.html', data, (err) => {
    err ? console.log(err) : console.log('Team profile created successfully in index.html file')
  })
}

createTeam()
  .then(checkAddEmployee)
  .then(team => {
    return populateHTML(team);
  })
  // .then(htmlPage => {
  //   return writeToFile(htmlPage);
  // })
