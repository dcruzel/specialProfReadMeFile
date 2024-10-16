//import inquirer for prompt
import newinquirer from 'inquirer';
//import fs for writing to file
import newfs from 'fs';

//license variable string
let pick; 

//create a function to generate README file string
const generateReadMeFile=({projectTitle, description, installInstructions, usage, contributing, tests, questions, licenseChoosen, gitHubUsername, email}) =>
`# ${projectTitle}
${pick}
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
${pick}
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
      //The project title prompt
      type: 'input',
      name: 'projectTitle',
      message: 'What is the project title?',
    },
    {
      //The project description prompt
        type: 'input',
        name: 'description',
        message: 'What is your project description?',
      },
    {
      //The install instructions prompt
      type: 'input',
      name: 'installInstructions',
      message: 'What is the installation instructions?',
    },
    {
      //The usage information prompt
      type: 'input',
      name: 'usage',
      message: 'What is the usage information?',
     
    },
    {
      //The contribution guidelines prompt
        type: 'input',
        name: 'contributing',
        message: 'What is the contribution guidelines?',
    },
    {
      //The test instructions prompt
        type: 'input',
        name: 'tests',
        message: 'What is the test instructions?',
    },
    {
      //The license selection 
        type: 'list',
        name: 'licenseChoosen',
        message: 'What is the license',
        choices: ['Apache', 'Boost', 'BSD 3-Clause License', 'Eclipse Public License 1.0', 
            'ISC License', 'The MIT License', 'Mozilla Public License 2.0',
            'The Perl License', 'The Unlicense']
    },
    {
      //The github username prompt
        type: 'input',
        name: 'gitHubUsername',
        message: 'What is your GitHub username?',
    },
    {
      //The email prompt
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },

  ])
  .then((data) => {
    // Update the data license string for the README file
  
    switch(data.licenseChoosen) {
        case 'Apache':
            pick='[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            break;
        case 'Boost':
            pick='[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
            break;
        case 'BSD 3-Clause License':
            pick='[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
            break;
        case 'Eclipse Public License 1.0':
            pick='[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
            break;
        case 'ISC License':
            pick='[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
            break;
        case 'The MIT License':
            pick='[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
        case 'Mozilla Public License 2.0':
            pick='[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
            break;
        case 'The Perl License':
            pick='[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
            break;
        default:
            pick='[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      }

     // Calls function to generate the readme file
    const mdPage = generateReadMeFile(data);
    newfs.writeFile('./sample/README.md', mdPage, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });