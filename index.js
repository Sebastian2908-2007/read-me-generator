// req. packages
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

const generateMarkDown = require('./utils/generateMarkdown.js');

// question Array

const questions = [{
        type: "input",
        message: "what is your Project Title?",
        name: "Title"
}, {
    type: "input",
    message: "Please give a detailed discription of your project",
    name: "Description"
}, {
    type: "input",
    message: "Make your content table",
    name: "TableOfContents"
}, {
    type: "input",
    message: "Which packages must be installed for app functionality?",
    name: "Installation"
}, {
    type: "input",
    message: "How is your Application used? Be detailed.",
    name: "usage"
}, {
    type: "input",
    message: "what type of license does your program use?(isc,MIT...etc.)",
    name: "License"
}, {
    type: "input",
    message: "Name some contributors to your project",
    name: "Contributors"
}, {
    type: "input",
    message: "What commands are needed for this applications testing?",
    name: "testing"
}, {
    type: "input",
    message: "Enter Some contact information for inquiries",
    name: "Contact"
}, {
    type: "input",
    message: "Please enter GitHub UserName?",
    name: "username"
}, {
    type: "input",
    message: "Enter A valid E-Mail please.",
    name: "email"
},

];

// read me file writer logic

function writeToFile(fileName, data) {

    fs.writeFile( fileName, data, function(err) {
        console.log(fileName);
        console.log(data);

        if (err) {
            return console.log(err);
        }else{
            console.log("successful Run!");
        }
    })
};

// run program
function init() {
    inquirer.prompt(questions)
       .then(function(data) {
           writeToFile("ReadMe.md", generateMarkDown (data));
           console.log(data);
       })
};

// function call to run program
init();


