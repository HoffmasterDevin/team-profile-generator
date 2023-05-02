const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');


const teamMembers = [];

function runApp() {
    function addManager() {
      inquirer.prompt([
        {
          type: 'input',
          name: 'managerName',
          message: "What is the team manager's name?"
        },
        {
          type: 'input',
          name: 'managerId',
          message: "What is the manager's ID?"
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: "What is the team manager's email?"
        },
        {
          type: 'input',
          name: 'managerOfficeNum',
          message: "What is the manager's office number?"
        }
      ])
        .then((answers) => {
          const manager = new Manager(
            answers.managerName,
            answers.managerId,
            answers.managerEmail,
            answers.managerOfficeNum
          );
          teamMemebers.push(manager);
          idArray.push(answers.managerId);
          generateTeam();
        });
    }
  
    function generateTeam() {
      inquirer.prompt([
        {
          type: 'list',
          name: 'teamMemberChoice',
          message: 'Which type of team member would you like to add?',
          choices: [
            'Engineer',
            'Intern',
            "I don't want to add any more team memebers",
          ],
        },
      ])
      .then((userChoice) => {
        switch (userChoice.memberChoice) {
          case 'Engineer':
            addEngineer();
            break;
          case 'Intern':
            addIntern();
            break;
          default:
            buildTeam()
        }
      });
    }
  }