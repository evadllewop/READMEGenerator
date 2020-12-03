
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = () =>
    inquirer.prompt([
        {

            type: `input`,
            name: `title`,
            message: `What is the title of your project?`,
            trim: function (answer) {
                this.question.trim();
            },

            type: `input`,
            name: `description`,
            message: `Please provide a short description of your project.`,
            trim: function (answer) {
                this.question.trim();
            },

            type: `input`,
            name: `install`,
            message: `What are the steps required to install your project?`,
            trim: function (answer) {
                this.question.trim();
            },

            type: `input`,
            name: `usage`,
            message: `What are the steps required to install your project?`,
            trim: function (answer) {
                this.question.trim();
            },

            type: 'list',
            name: 'license',
            message: `What liscense will you be using for your project?`,
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal'],

        },

    ]);

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Your README.md file has been generated successfully");
    });
}

// function to initialize program
function init() {
    console.log("hello");

};


// function call to initialize program
init();
