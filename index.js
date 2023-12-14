// NPM Packages needed:
// 'fs' file system helps us access the file system in Node
const fs = require('fs');
// Inquirer allows us to gain user Input and be able to use it through CLI "Command Line Interaction"
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title for your project?'
    },
    // DESCRIPTION
    {
        type: 'input',
        name: 'description',
        message: 'Give a brief description of your project?'
    },
    // INSTALLATION
    {
        type: 'input',
        name: 'installation',
        message: 'Are there any installation needed for your project?'
    },
    // USAGE
    {
        type: 'input',
        name: 'usage',
        message: 'Any instructions for how to use your project?'
    },
    // CREDITS
    {
        type: 'input',
        name: 'credits',
        message: 'Any Tutorials, Any Contributors or Third-party assets that you would like to credit?'
    },
    // LICENSE
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GNU GPL v3', 'Apache 2.0', 'BSD 3-Clause']
    },
    // FEATURES
    {
        type: 'input',
        name: 'features',
        message: 'Does your project contain any features that you would like to indclude?'
    },
    // CONTRIBUTION
    {
        type: 'input',
        name: 'contribution',
        message: 'How can Users contribute to the project?'
    },
    // TESTS
    {
        type: 'input',
        name: 'tests',
        message: 'Any Tests that you would to run for this project?'
    },
    // USER INFO
    {
        type: 'input',
        name: 'user',
        message: 'What is your GitHub username?'
    },
    // EMAIL
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }

];

// A function to write README file with the collected user data
function writeToFile(fileName, data) {
    const licenses = data.license || [];
    
    const newData = {
        ...data,
        license: licenses.join(', '),
    };

    fs.writeFile(fileName, generateMarkdown(newData), (err) => {
        err ? console.log(err) : console.log("Success!")
    });
}


// A function that initalizes making the README.md file with the user data (Calls the writeToFile function)
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile("README.md", data);
        })
}

// Function Declared
init();
