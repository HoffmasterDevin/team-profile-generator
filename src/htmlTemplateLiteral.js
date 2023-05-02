const generateTeam = team => {
    const genManager = manager => {
      return `  
      <div class="card managerCard" style="width: 18rem;">
      <div class="card-body">
        <h2 class="card-title">${manager.returnName()}</h2>
        <h3 class="card-subtitle mb-2 text-muted">${manager.returnRole()}</h3>
      </div>
      <div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${manager.returnId()}/li>
      <li class="list-group-item">Email: <a href="mailto:${manager.returnEmail()}">${manager.returnEmail()}</li>
      <li class="list-group-item">Office Number: ${manager.returnManagerOfficeNum()}</li>
    </ul>
  </div>
    </div>
      `;
    }
  
    const genEngineer = engineer => {
      return `
      <div class="card employeeCard" style="width: 18rem;">
      <div class="card-body">
        <h2 class="card-title">${engineer.returnName()}</h2>
        <h3 class="card-subtitle mb-2 text-muted">${engineer.returnRole()}</h3>
      </div>
      <div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${engineer.returnId()}/li>
      <li class="list-group-item">Email: <a href="mailto:${engineer.returnEmail()}">${engineer.returnEmail()}</li>
      <li class="list-group-item">GitHub: <a href="https//:github.com/${engineer.returnGithub()}" target="_blank">${engineer.returnGithub()}</li>
    </ul>
  </div>
    </div>
      `;
    }
  
    const genIntern = intern => {``
      return `
      <div class="card employeeCard" style="width: 18rem;">
      <div class="card-body">
        <h2 class="card-title">${intern.returnName()}</h2>
        <h3 class="card-subtitle mb-2 text-muted">${intern.returnRole()}</h3>
      </div>
      <div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${intern.returnId()}/li>
      <li class="list-group-item">Email: <a href="mailto:${intern.returnEmail()}">${intern.returnEmail()}</li>
      <li class="list-group-item">GitHub: <a href="https//:github.com/${intern.returnSchool()}" target="_blank">${intern.returnGithub()}</li>
    </ul>
  </div>
    </div>
      `;
    };
  
    const html = [];
  
    html.push(team
      .filter(employee => employee.returnRole() === 'Manager')
      .map(manager => genManager(manager))
    );
  
    html.push(team
      .filter(employee => employee.returnRole() === 'Engineer')
      .map(engineer => genEngineer(engineer))
      .join('')
    );
  
    html.push(team
      .filter(employee => employee.returnRole() === 'Intern')
      .map(intern => genIntern(intern))
      .join('')
    );
      return html.join('')
  }
  
  module.exports = team => {
  
    return `
    <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
      <link rel="stylesheet" href="style.css">
      <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>
  
  <body>
      <div class="container-fluid">
          <div class="row">
              <div class="col-12 p-5 mb-3 teamHeading">
                  <h1 class="text-center">My Team</h1>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="row">
              <div class="teamDiv col-12 d-flex justify-content-center">
                  ${compileTeam(team)}
              </div>
          </div>
      </div>
  </body>
  </html>
    `
  }