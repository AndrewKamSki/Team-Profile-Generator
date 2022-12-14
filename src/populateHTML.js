// Cards
const managerTemplate = function (manager) {
    return `
    <div class="card m-3" style="width: 18rem;">
      <div class="card-header text-white bg-primary mb-3">
        <h3>${manager.name}</h3>
        <h4>Manager</h4>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.id}</li>
          <li class="list-group-item">Email: <a href = "mailto:${manager.email}">${manager.email}</a></li>
          <li class="list-group-item">Office number: ${manager.officeNumber}</li>
        </ul>
      </div>
    </div>
    `;
}

const engineerTemplate = function (engineer) {
  return `
  <div class="card m-3" style="width: 18rem;">
    <div class="card-header text-white bg-primary mb-3">
      <h3>${engineer.name}</h3>
      <h4>Engineer</h4>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <a href = "mailto:${engineer.email}">${engineer.email}</a></li>
        <li class="list-group-item">GitHub: <a href = "https://github.com/${engineer.gitHub}" target="_blank">${engineer.gitHub}</a></li>
      </ul>
    </div>
  </div>
  `;
}

const internTemplate = function (intern) {
  return `
  <div class="card m-3" style="width: 18rem;">
    <div class="card-header text-white bg-primary mb-3">
      <h3>${intern.name}</h3>
      <h4>Intern</h4>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: <a href = "mailto:${intern.email}">${intern.email}</a></li>
        <li class="list-group-item">School: ${intern.school}</li>
      </ul>
    </div>
  </div>
  `;
}

const htmlTemplate = function (teamCards) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="./style.css">

    <title>My Team</title>
  </head>
  <body>
    <header>
    <div class="jumbotron text-center">
      <h1 class="display-4">My Team</h1>
    </div>
    </header>

    <div class="container">
      <div class="row justify-content-center" id="cards">
        ${teamCards}
      </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"></script>
  </body>
  </html>
  `
};

populateHTML = (team) => {
  
  const teamArray = [];
  
  for (let i=0;i<team.length;i++) {
    const member = team[i];
    const role = member.getRole();
    if (role === 'Manager') {
      const manager = managerTemplate(member);
      teamArray.push(manager);
    } else if (role === 'Engineer') {
      const engineer = engineerTemplate(member);
      teamArray.push(engineer);
    } else if (role === 'Intern') {
      const intern = internTemplate(member);
      teamArray.push(intern);
    }
  }

  const teamCards = teamArray.join('');
  const htmlPage = htmlTemplate(teamCards);
  // console.log(teamCards)
  return htmlPage;
}

module.exports = populateHTML;