
//create variables for all of the 'requires'
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path')

// array of questions for user
const questions = [
    {

        type: `input`,
        name: `title`,
        message: `What is the title of your project?`,
        trim: function (answer) {
            this.question.trim();
        },
    }, {
        type: `input`,
        name: `description`,
        message: `Please provide a short description of your project.`,
        trim: function (answer) {
            this.question.trim();
        },
    }, {
        type: `input`,
        name: `install`,
        message: `What are the steps required to install your project?`,
        trim: function (answer) {
            this.question.trim();
        },
    }, {
        type: `input`,
        name: `usage`,
        message: `Please provide a small supporting description on how this project works.`,
        trim: function (answer) {
            this.question.trim();
        },
    }, {
        type: `input`,
        name: `credits`,
        message: `List any documentation or contributors in the making of this project.`,
        trim: function (answer) {
            this.question.trim();
        },
    }, {
        type: 'list',
        name: 'license',
        message: `What license will you be using for your project?`,
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal'],

    }

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(path.join(process.cwd(), fileName), data, err => {
        if (err) {
            console.log(err);
        }

        console.log("Your README.md file has been generated successfully")
    });
}

// function to initialize program
function init() {
    // console.log("hello");
    inquirer.prompt(questions)

        .then(answers => {
            // Use user feedback for... whatever!!
            console.log(answers)
            writeToFile('README.md', generateMarkdown(answers))
        })
        .catch(error => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else when wrong
            }
        });
}


// function call to initialize program
init();
