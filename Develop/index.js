// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// inquirer
//   .prompt([
//     {
//         type: 'input',
//         message: 'What is the title of your project?',
//         name: 'title',
//     },
//     {
//         type: 'input',
//         message: 'Please enter the description of your project:',
//         name: 'description',
//     },
//     {
//         type: 'input',
//         message: 'Please enter your installation instructions:',
//         name: 'Installation',
//     },
//       {
//         type: 'input',
//         message: 'Please enter your usage information:',
//         name: 'Usage',
//       },
//       {
//         type: 'input',
//         message: 'Please select the license from below list of options:',
//         name: 'License',
//       },
//       {
//         type: 'input',
//         message: 'Please enter the contribution guidelines of your project:',
//         name: 'Contributing',
//       },
//       {
//         type: 'input',
//         message: 'Please enter the test instructions for your project:',
//         name: 'Tests',
//       },
//       {
//         type: 'input',
//         message: 'Please enter your GitHub username for question:',
//         name: 'GitHub',
//       },
//       {
//         type: 'input',
//         message: 'Please enter instructions on how to reach me with additional questions:',
//         name: 'email',
//       },
//   ])
//   .then((response) =>
//     fs.appendFile('sampleREADME.md',`${JSON.stringify(response)}\n`, (err) =>
//     err ? console.log(err) : console.log('Input saved!'))
//   );

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please enter the description of your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please enter your installation instructions:',
        name: 'Installation',
    },
      {
        type: 'input',
        message: 'Please enter your usage information:',
        name: 'Usage',
      },
      {
        type: 'input',
        message: 'Please select the license from below list of options:',
        name: 'License',
      },
      {
        type: 'input',
        message: 'Please enter the contribution guidelines of your project:',
        name: 'Contributing',
      },
      {
        type: 'input',
        message: 'Please enter the test instructions for your project:',
        name: 'Tests',
      },
      {
        type: 'input',
        message: 'Please enter your GitHub username for question:',
        name: 'GitHub',
      },
      {
        type: 'input',
        message: 'Please enter instructions on how to reach me with additional questions:',
        name: 'email',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
