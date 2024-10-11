//import inquirer for prompt
import newinquirer from 'inquirer';
//import fs for writing to file
import newfs from 'fs';

//create a function to generate README file string
const generateReadMeFile=({projectTitle, description, installInstructions, usage, contributing, tests, questions, licenseChoosen, gitHubUsername, email}) =>
    `# 📖 ${projectTitle}
     ## Description
     ${description}
     ## Table of Contents
     - [Installation](#installation)
     - [Usage](#usage)
     - [License](#license)
     - [Contributing](#contributing)
     - [Tests](#tests)
     - [Questions](#questions)
     ## Installation
     ${installInstructions}
     ## Usage
     ${usage}
     ## License
     ${licenseChoosen}
     ## Contributing
     ${contributing}

     ## Tests
     ${tests}
     ## Questions
     For additional questions, please reach me at ${email} or [${gitHubUsername}](https://github.com/${gitHubUsername})`;

     // Get the inputs through the inquirer prompt function
    newinquirer
  .prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project description?',
      },
    {
      type: 'input',
      name: 'installInstructions',
      message: 'What is the installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage information?',
     
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What is the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What is the test instructions?',
    },
    {
        type: 'list',
        name: 'licenseChoosen',
        message: 'What is the license',
        choices: ['Apache', 'Boost', 'BSD 3-Clause License', 'Eclipse Public License 1.0', 
            'ISC License', 'The MIT License', 'Mozilla Public License 2.0',
            'The Perl License', 'The Unlicense']
    },
    {
        type: 'input',
        name: 'gitHubUsername',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },

  ])
  .then((data) => {
    // Update the data license string for the README file
    switch(data.licenseChosen) {
        case 'Apache':
            data.licenseChosen='[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            break;
        case 'Boost':
            data.licenseChosen='[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
            break;
        case 'BSD 3-Clause License':
            data.licenseChosen='[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
            break;
        case 'Eclipse Public License 1.0':
            data.licenseChosen='[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
            break;
        case 'ISC License':
            data.licenseChosen='[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
            break;
        case 'The MIT License':
            data.licenseChosen='[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
        case 'Mozilla Public License 2.0':
            data.licenseChosen='[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
            break;
        case 'The Perl License':
            data.licenseChosen='[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
            break;
        default:
            data.licenseChosen='[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      }


     // Calls function to generate the readme file
    const mdPage = generateReadMeFile(data);
    newfs.writeFile('./sample/README.md', JSON.stringify(mdPage, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });