// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
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
    },

]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

