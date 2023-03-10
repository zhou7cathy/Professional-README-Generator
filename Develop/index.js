// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'Please enter the description of your project:',
        name: 'Description',
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
        type: 'checkbox',
        message: 'Please select the license from below list of options:',
        name: 'License',
        choices: ['MIT', 'GPL v3', 'IPL 1.0','MPL 2.0','none'],
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
        message: 'Please enter your email for users to reach you with additional questions:',
        name: 'email',
      },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Input saved!'))
}

// function to initialize app
function init() {
    inquirer.prompt(questions).then((response)=>{
        console.log("Successfully created README.md file");
        var readmeMarkdown = generateMarkdown({...response});
        writeToFile("sampleREADME.md", readmeMarkdown);
    });
};

// Function call to initialize app
init();
