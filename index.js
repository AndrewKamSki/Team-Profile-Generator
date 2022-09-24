// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title? ',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please give a brief description of the project: ',
  },
  {
    type: 'input',
    name: 'install',
    message: 'Please provide installation instructions: ',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information: ',
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'Please list any contributors to the project: ',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please provide test instructions: ',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose a license: ',
    choices: [
      'MIT',
      'ISC',
      'Mozilla',
      'Apache',
      'Boost'
    ]
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please provide your Github username: ',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please provide your email address: ',
  }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([...questions])
    .then((answers) => {
      writeToFile('README.md',generateMarkdown({...answers}));
    })
}

// Function call to initialize app
init();
