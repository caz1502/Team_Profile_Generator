const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const generateSite = require('./src/generate-site.js');
const fs = require('fs');
const path = require("path");
const Employee = require('./lib/Employee');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'A name is required, please ender your name.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console, log('A name is required, please ender your name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Your office ID should be entered here.',
            validate: employeeID => {
                if (employeeID) {
                    return true;
                } else {
                    console.log('Your office ID should be entered here.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Your office email address should be entered here.',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Your office email address should be entered here.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Your office telephone number should be entered here.',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Your office telephone number should be entered here');
                    return false;
                }

            }

        },
        {
            type: 'list',
            name: 'profilePic',
            message: 'Choose the applicable path to display a profile photo.',
            choices: ['../dist/images/femaleprofile1.png', '../dist/images/femaleprofile2.png', '../dist/images/femaleprofile3.png', '../dist/images/femaleprofile4.png', '../dist/images/maleprofile1.png', '../dist/images/maleprofile2.png', '../dist/images/maleprofile3.png', '../dist/images/maleprofile4.png'],
            validate: profilePic => {
                if (profilePic) {
                    return true;
                } else {
                    console.log('Choose the applicable path to display a profile photo.');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeID, answers.email, answers.officeNumber, answers.profilePic);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'If you wish to continue, select an option',
            choices: ['Create an Engineer profile.', 'Create an Intern profile.', 'Team build complete.']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "Create an Engineer profile.":
                    promptEngineer();
                    break;
                case "Create an Intern profile.":
                    promptIntern();
                    break;
                default:
                    buildTeam();
            }
        });

}; const promptEngineer = () => {
    console.log(' === Creating an Engineer profile === ');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the full name of the Engineer.',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('Please enter the full name of the Engineer');
                } return false;
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'The Engineer`s office ID should be entered here.',
            validate: employeeID => {
                if (employeeID) {
                    return true;
                } else {
                    console.log('The Engineer`s office ID should be entered here.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'The Engineer`s office email address should be entered here.',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('The Engineer`s office email address should be entered here.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'The Engineer`s Github username should be entered here.',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log('The Engineer`s Github username should be entered here.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'profilePic',
            message: 'Choose the applicable path to display a profile photo.',
            choices: ['../dist/images/femaleprofile1.png', '../dist/images/femaleprofile2.png', '../dist/images/femaleprofile3.png', '../dist/images/femaleprofile4.png', '../dist/images/maleprofile1.png', '../dist/images/maleprofile2.png', '../dist/images/maleprofile3.png', '../dist/images/maleprofile4.png'],
            validate: profilePic => {
                if (profilePic) {
                    return true;
                } else {
                    console.log('Choose the applicable path to display a profile photo.');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeID, answers.email, answers.github, answers.profilePic);
        teamMembers.push(engineer);
        promptMenu();
    })
};

const promptIntern = () => {
    console.log(' === Creating an Intern profile === ');
    return inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: 'Please enter the full name of the Intern.',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('Please enter the full name of the Intern');
                } return false;
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'The Intern`s office ID should be entered here.',
            validate: employeeID => {
                if (employeeID) {
                    return true;
                } else {
                    console.log('The Intern`s office ID should be entered here.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'The Intern`s office email address should be entered here.',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('The Inrern`s office email address should be entered here.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'The Intern`s School should be entered here.',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('The Intern`s school should be entered here.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'profilePic',
            message: 'Choose the applicable path to display a profile photo.',
            choices: ['../dist/images/femaleprofile1.png', '../dist/images/femaleprofile2.png', '../dist/images/femaleprofile3.png', '../dist/images/femaleprofile4.png', '../dist/images/maleprofile1.png', '../dist/images/maleprofile2.png', '../dist/images/maleprofile3.png', '../dist/images/maleprofile4.png'],
            validate: profilePic => {
                if (profilePic) {
                    return true;
                } else {
                    console.log('Choose the applicable path to display a profile photo.');
                    return false;
                }
            }
        },

    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeID, answers.email, answers.school, answers.profilePic);
        teamMembers.push(intern);
        promptMenu();
    })
};

const buildTeam = () => {
    console.log('Finished with the Team Build !');

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generateSite(teamMembers));
}

promptManager();

