const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

inquirer.prompt(
  [{
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
  {
    type: 'input',
    message: "What is your project's name?",
    name: 'projectName',
  },
  {
    type: 'input',
    message: 'Give a short description of your project.',
    name: 'description',
  },
  {
    type: 'list',
    message: 'What kind of license will your project have?',
    name: 'license',
    choices: ['MIT', 'APACHE2.0', 'GPL3.0', 'BSD3']
  },
  {
    type: 'input',
    message: 'What command should be run to install dependencies?',
    name: 'install',
    default: 'npm i',
  },
  {
    type: 'input',
    message: 'What command should be run to run tests?',
    name: 'tests',
    default: 'npm test'
  },
  {
    type: 'input',
    message: 'What does the user need to know about using the repo?',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'What does the user need to know about contributing to the repo?',
    name: 'contributions',
  },
]).then(function (data) {
  fs.writeFile('./sample/README.md', generateMarkdown(data), err => err ? console.error(err) : console.log('Success!'));
});
