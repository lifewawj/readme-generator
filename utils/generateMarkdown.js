// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "") {
    switch (license) {
      case "MIT":
        return `![License: ${license}](https://img.shields.io/badge/License-MIT-yellow.svg)`;
      case "GNU GPL v3":
        return `![License: ${license}](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
      case "Apache 2.0":
        return `![License: ${license}](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
      case "BSD 3-Clause":
        return `![License: ${license}](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
      default:
        return "";
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "") {
    switch (license) {
      case "MIT":
        return "(https://opensource.org/licenses/MIT)"
      case "GNU GPL v3":
        return "(https://www.gnu.org/licenses/gpl-3.0)"
      case "Apache 2.0":
        return "(https://opensource.org/licenses/Apache-2.0)"
      case "BSD 3-Clause":
        return "(https://opensource.org/licenses/BSD-3-Clause)"
      default:
        return "";
    }
  }
}

function renderUserLink(user) {
  return "https://github.com/" + user;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "") {
    return `This project is licensed under the ${license} license.`
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ${renderLicenseSection(data.license)} <br>
  ${renderLicenseBadge(data.license)} <br>
  ${renderLicenseLink(data.license)}

  ## Features
  ${data.features}

  ## How to Contribute?
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, please contact me at ${data.email}.
  You can also visit my GitHub page at ${renderUserLink(data.user)}.
  
`;
}

module.exports = generateMarkdown;
