const inquirer = require("inquirer");
const generatorMarkdown = require("./generateMarkdown")
const fs = require("fs"); 

// User prompts
const questions = [
  {
    type: "input",
    message: "What's your GitHub username?",
    name: "UserName",
  },
  {
    type: "input",
    message: "What's your email address?",
    name: "Email",
  },
  {
    type: "input",
    message: "What's the name of your project?",
    name: "Title",
  },
  {
    type: "input",
    message: "Please describe your project.",
    name: "Description",
  },
  {
    type: "input",
    message: "What necessary dependencies must be installed to run this app?",
    name: "Installation",
  },
  {
    type: "input",
    message: "What is this app used for?",
    name: "Usage",
  },
  {
    type: "input",
    message: "What license was used for this README?",
    name: "License",
  },
  {
    type: "input",
    message: "Please add contributors",
    name: "Contributor",
  },
  {
    type: "input",
    message: "What command do you use to test this App?",
    name: "Test",
  }
];

// Writing to a file 
function writeToFile(fileName, data) {

fs.writeFile(fileName, data, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log ("Successfully wrote: " + fileName);
})

}


// initialization function
function init() {
  inquirer.prompt(questions)
  .then(function(data) {
    writeToFile("README.md", generatorMarkdown(data));
  })
}


// run the app
init();