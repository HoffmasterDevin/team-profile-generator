const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');
const render = require('./src/htmlTemplateLiteral.js');
const directoryDist = require(__dirname, 'dist');
const distPath = path.join('directoryDist', 'team.html','');



const teamMembers = [];
const teamIds = [];

function runApp() {
    function addManager() {
      inquirer.prompt([
        {
          type: 'input',
          name: 'managerName',
          message: "What is the manager's name?"
        },
        {
          type: 'input',
          name: 'managerId',
          message: "What is the manager's ID?"
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: "What is the manager's email?"
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
          teamMembers.push(manager);
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
            "I don't want to add any more team members",
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
            compileTeam()
        }
      });
    }

    function addEngineer() {
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name?"
          },
          {
            type: 'input',
            name: 'engineerId',
            message: "What is the engineer's id?"
          },
          {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the engineer's email?"
          },
          {
            type: 'input',
            name: 'enginnerGithub',
            message: "What is the engineer's Github username?"
          }
        ])
        .then((answers) => {
          const engineer = new Engineer(
            answers.engineerName,
            answers.engneerId,
            answers.engineerEmail,
            answers.engineerGithub
          );
        })
        teamMembers.push(engineer);
        idArray.push(answers.engineerId);
        compileTeam();
    }
    function addIntern() {
      inquirer
      .prompt([
        {
          type: 'input',
          name: 'internName',
          message: "What is the intern's name?"
        },
        {
          type: 'input',
          name: 'internId',
          message: "What is the intern's id?"
        },
        {
          type: 'input',
          name: 'internEmail',
          message: "What is the intern's email?"
        },
        {
          type: 'input',
          name: 'internSchool',
          message: "What is the intern's school?"
        }
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        teamMembers.push(intern);
        idArray.push(internId);
        compileTeam();
      });
    }
    function compileTeam() {
      if (!fs.existsSync(directoryDist)) {
        fs.mkdirSync(distPath, render(teamMembers))
      }
    }
    addManager();
  }

  runApp();