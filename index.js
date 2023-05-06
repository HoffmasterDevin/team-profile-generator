const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');

const DIST_DIR = require(__dirname, 'dist');
const distPath = path.join('DIST_DIR', 'team.html');

//Require html generation js file
const render = require('./src/htmlTemplateLiteral.js');

//Empty Arrays that data will be pushed into
const teamMembers = [];
const idArray = [];
// Questions 
function menuApp() {
//Questions to generate Manager info
  function genManager() {
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
    //Generate manager info from inquirer prompts
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNum
        );
        teamMembers.push(manager);
        idArray.push(answers.managerId);
        createTeam();
      });
  }
  //Menu options for choosing what kind of team member to generate
  function createTeam() {
    inquirer.prompt([
      {
        type: 'list',
        name: 'memberChoice',
        message: 'Which type of team member would you like to add?',
        choices: [
          'Engineer',
          'Intern',
          "I don't want to add any more team members",
        ],
      },
    ])
    //Switch statements to determine which set of questions to return 
      .then((userChoice) => {
        switch (userChoice.memberChoice) {
          case 'Engineer':
            addEngineer();
            break;
          case 'Intern':
            addIntern();
            break;
          default:
            generateTeam();
        }
      });
  }
  //Inquirer prompts for adding Engineer
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
          name: 'engineerGithub',
          message: "What is the engineer's Github username?"
        }
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamMembers.push(engineer);
        idArray.push(answers.engineerId);
        createTeam();
      })

  }
  //Inquirer prompts for adding Intern 
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
        idArray.push(answers.internId);
        createTeam();
      });
  }
  //File System checks for directory to generate HTML into
  function generateTeam() {
    if (!fs.existsSync('DIST_DIR')) {
      fs.mkdirSync('DIST_DIR')
    }
    //Render HTML template into actual HTML file
    fs.writeFileSync(distPath, render(teamMembers), 'utf-8');
  }
  //Generate Manager from info
  genManager();
}
//Initialize application
menuApp();