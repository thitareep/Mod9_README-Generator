// TODO: Include packages needed for this application
// Required: Inquirer Package | https://www.npmjs.com/package/inquirer/v/8.2.4 //
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// title, description, installation instructions, usage information, contribution guidelines, and test instructions
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the title of your project. (Required)",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log ("Please a enter title to continue.")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "Description",
        message: "Please enter a description about your project. (Required)",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
            console.log ("Please enter a description to continue.")
            return false;
            }
        }
    },
    {
        type: "input",
        name: "Installation",
        message: "Please enter any installation instructions if needed.",
    },
    {
        type: "input",
        name: "Usage",
        message: "How is the application used?",
    },
    {
        type: "input",
        name: "contribution",
        message: "What are the contribution guidelines?",
    },
    {
        type: "input",
        name: "test",
        message: "What are the test instructions for the project?",
    },
    {
        type: "input",
        name: "license",
        message: "What is the license for the project?",
        choices: ["MIT", "APACHE 2.0", "Eclipse PL", "GNU GPL", "GNU AGPL", "GNU GPL", "GNU LGPL", "Mozilla Public 2.0", "Unlicense", "None"]
        default: "MIT"
    },
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username for contact in case of any questions?",
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
            console.log ("Please enter your GitHub username to continue.")
            return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address for contact in case of any questions?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
            console.log ("Please enter an email address to continue.")
            return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
