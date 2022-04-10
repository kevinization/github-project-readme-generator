// TODO: Include packages needed for this application
<<<<<<< HEAD
=======
var generateMarkdown = require('./utils/generateMarkdown.js');
var inquirer = require('inquirer');
var fs = require('fs');
>>>>>>> 18e71dd (update repo)

// TODO: Create an array of questions for user input
const questions = [
    {
<<<<<<< HEAD
        type:'input',
        name: 'title',
        message:'What is the name of your project?',
    },
    {
        type:'input',
        name: 'Description',
        message:'Please give a description of your project',
    },
    {
        type:'input',
        name: 'installation',
        message:'What necessary dependencies must be imstalled to run this app?',
    },
    {
        type:'input',
        name: 'usage',
        message:'What does the user needs to know about this repo?',
    },
    {
        type:'input',
        name: 'license',
        message:'What kind of license should your repo use?',
        choices: ["MIT","APACHE 2.0","GLP 3.0","BSD 3", "None"]
    },
    {
        type:'input',
        name: 'contribution',
        message:'How can other users contribute to this app?',

    },
    {
        type:'input',
        name: 'test',
        message:'How can the user test the application?',
    },
    {
        type:'input',
        name: 'username',
        message:'Add your Github Username:',
    },
    {
        type:'input',
        name: 'email',
        message:'Add your email address:',
=======
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: function titleInput(titleInput) {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter a project name. try again.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a description of your project',
        validate: function descriptionInput(descriptionInput) {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to enter a project description. Try again.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What necessary dependencies must be installed to run this app?',
        validate: function installationInput(installationInput) {
            if (installationInput) {
                return true;
            } else {
                console.log('You need to enter installation information. Try again.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user needs to know about this repo?',
        validate: function usageInput(usageInput) {
            if (usageInput) {
                return true;
            } else {
                console.log('You need to enter usage installation of the project. Try again.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your repo use?',
        choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3", "None"],
        validate: function licenseInput(licenseInput) {
            if (licenseInput) {
                return true;
            } else {
                console.log('You need to pick a license of the project. Try again.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can other users contribute to this app?',
        validate: function contributionInput(contributionInput) {
            if (contributionInput) {
                return true;
            } else {
                console.log('You need to enter information about how the users contribute to the project. Try again.');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'test',
        message: 'How can the users test the application?',
        validate: function testInput(testInput) {
            if (testInput) {
                return true;
            } else {
                console.log('You need to enter information about the testing of the project. Try again.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'Add your Github Username:',
        validate: function usernameInput(usernameInput) {
            if (usernameInput) {
                return true;
            } else {
                console.log('You need to enter your Github username. Try again.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Add your email address:',
        validate: function emailInput(emailInput) {
            if (emailInput) {
                return true;
            } else {
                console.log('You need to enter your email. Try again.');
                return false;
            }
        }
>>>>>>> 18e71dd (update repo)
    },

]

// TODO: Create a function to write README file
<<<<<<< HEAD
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}
=======
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function err(err) {
        if (err) {
            throw err;
        }
        console.log('The README.md has been created with the information provided.');
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function userInput(userInput) {
            console.log(userInput);
            writeToFile('README.md', generateMarkdown(userInput));
        });
};
>>>>>>> 18e71dd (update repo)

// Function call to initialize app
init();
