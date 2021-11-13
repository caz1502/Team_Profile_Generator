const generateTeam = (team) => {
    console.log(team);
    // Create an empty array to push html elements on to and loop through the team data
    const html = [];
    // Create functions for each type of employee that returns HTML data
    // Manager Card
    const generateManager = manager => {
        console.log(manager);
        let managerHtml = `  
        <div class="card" style="width: 25rem;">            
            <div class="hero">
                <div class="image">
                    <img src="${manager.profilePic}">
                    </div>
            </div>
                <br>
                    <div class="name">${manager.name}</div>
                    <div class="title">Manager</div>
                    <div class="id">ID:${manager.id}</div>
                    <div class="email">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></div>
                    <div class="phone">Phone: ${manager.officeNumber}</div>         
        </div>`;
        html.push(managerHtml);
    }

    // Engineer card
    const generateEngineer = engineer => {
        console.log(engineer);
        let engineerHtml = ` 
        <div class="card" style="width: 25rem;">  
            <div class="hero">
                <div class="image">
                    <img src="${engineer.profilePic}">
                </div>
            </div>
                <br>
                    <div class="name"> ${engineer.name} </div>
                    <div class="title">Engineer</div>
                    <div class="id">ID:${engineer.id}</div>
                    <div class="email">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></div>
                    <div class="github">Username: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a> </div>                       
        </div>`;

        html.push(engineerHtml);
    }

    // Intern card
    const generateIntern = intern => {
        console.log(intern);
        let internHtml = ` 
        <div class="card" style="width: 25rem;">        
            <div id ="intern" class="hero">
                <div class="image">
                    <img src="${intern.profilePic}">
                </div>    
            </div>         
                <br>
                    <div class="name">${intern.name} </div>
                    <div class="title">Intern</div>
                    <div class="id">ID:${intern.id}</div>
                    <div class="email">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></div>
                    <div class="school">School: ${intern.school}</div>                        
        </div>`;
        html.push(internHtml);
    }

    // create a loop for all of the employees
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            generateIntern(team[i]);
        }
    }

    // join the HTML blocks
    return html.join('');
}
// export function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
    <html lang="en" dir="ltr">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../dist/style.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
        <title>Team Profile Generator</title>
    </head>
<body>
<!-- team-->
<div class="intro">Our Team
    <hr>
        <br>
            <br>
</div>


    <main> ${generateTeam(team)} </main>
     
</body>
</html>
    `;
}