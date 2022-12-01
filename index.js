// TODO: Include packages needed for this application
// Required: Inquirer Package | https://www.npmjs.com/package/inquirer/v/8.2.4 //
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        // For title input //
        type: "input",
        name: "title",
        message: "Please enter the title of your project/application. (Required)",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log ("Please enter a title to continue.")
                return false;
            }
        }
    },
    {
        // For description input //
        type: "input",
        name: "description",
        message: "Please enter a description about your project/application. (Required)",
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
        // For installation input //
        type: "input",
        name: "installation",
        message: "Please enter any installation instructions if needed.",
    },
    {
        // For usage input //
        type: "input",
        name: "usage",
        message: "How is the application used?",
    },
    {
        // For contribution guidelines input //
        type: "input",
        name: "contribution",
        message: "What are the contribution guidelines?",
    },
    {
        // For test instructions input //
        type: "input",
        name: "test",
        message: "What are the test instructions for the project/application?",
    },
    {
        // For license input; 'MIT' is set as the default choice //
        type: "list",
        name: "license",
        message: "What is the license for the project/application?",
        choices: ["MIT", "Apache 2.0", "Eclipse PL", "GNU GPL v3.0", "Unlicense", "None"],
        default: "MIT"
    },
    {
        // For GitHub username input //
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
        // For email input //
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
const writeToFile = data => {
    return new Promise((resolve,reject) => {
        fs.writeFile("./genREADME.md", data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: console.log ("Your README file has been successfully created!")
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("./genREADME.md", generateMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();
