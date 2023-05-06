const generateTeam = team => {
  // HTML for Manager with template literals
  const generateManager = manager => {
    return `  
    <div class="card employee" style="width: 18rem;">
    <div class="card-body">
      <h2 class="card-title">${manager.returnName()}</h2>
      <h3 class="card-subtitle mb-2">${manager.returnRole()}</h3>
    </div>
    <div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${manager.returnId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${manager.returnEmail()}">${manager.returnEmail()}</a></li>
    <li class="list-group-item">Office Number: ${manager.returnManagerOfficeNum()}</li>
  </ul>
</div>
  </div>
    `;
  }
  // HTML for Engineer with template literals
  const generateEngineer = engineer => {
    return `
    <div class="card employee" style="width: 18rem;">
    <div class="card-body">
      <h2 class="card-title">${engineer.returnName()}</h2>
      <h3 class="card-subtitle mb-2">${engineer.returnRole()}</h3>
    </div>
    <div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${engineer.returnId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${engineer.returnEmail()}">${engineer.returnEmail()}</a></li>
    <li class="list-group-item">GitHub: <a href="https//:github.com/${engineer.returnGitHub()}" target="_blank">${engineer.returnGitHub()}</a></li>
  </ul>
</div>
  </div>
    `;
  }
// HTML for Intern with template literals
  const generateIntern = intern => {
    return `
    <div class="card employee" style="width: 18rem;">
    <div class="card-body">
      <h2 class="card-title">${intern.returnName()}</h2>
      <h3 class="card-subtitle mb-2">${intern.returnRole()}</h3>
    </div>
    <div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${intern.returnId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${intern.returnEmail()}">${intern.returnEmail()}</a></li>
    <li class="list-group-item">School: ${intern.returnSchool()}</li>
  </ul>
</div>
  </div>
    `;
  };
  //Empty array which html will be pushed into
  const html = [];
//Push Manager HTML into html array
  html.push(team
    .filter(employee => employee.returnRole() === 'Manager')
    .map(manager => generateManager(manager))
  );

//Push Engineer HTML into html array
  html.push(team
    .filter(employee => employee.returnRole() === 'Engineer')
    .map(engineer => generateEngineer(engineer))
    .join('')
  );

//Push Intern HTML into html array
  html.push(team
    .filter(employee => employee.returnRole() === 'Intern')
    .map(intern => generateIntern(intern))
    .join('')
  );
  //join html array data to combine it
    return html.join('')
}
// boilerplate HTML that 
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
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 p-5 mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
  `
}