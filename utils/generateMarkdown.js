// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// MIT", "APACHE", "Eclipse PL", "GNU GPL v3.0"
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Tests](#test)
  * [Contribution](#contribution)
  * [Questions](#questions)
  * [Credits](#credits)

  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}
  
  ## Tests
  ${data.test}

  ## Questions
  Have any questions about this project/application?
  Contact:
  GitHub | https://github.com/${data.userName}
  Email | ${data.email}

  ## Credits
  Created by:
  ${data.credits}
`;
}

module.exports = generateMarkdown;
