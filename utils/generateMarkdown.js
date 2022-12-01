// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// For license badges | https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba //

function renderLicenseBadge(license) {
  let badge = "";
  if (license === "MIT") {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === "Apache 2.0") {
    badge = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === "Eclipse PL 2.0") {
    badge = "![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)"
  } else if (license === "GNU GPL v3.0") {
    badge = "![License GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else if (license === "Unlicense") {
    badge = "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  } else {
    badge = ""
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT"
  } else if (license === "Apache 2.0") {
    return "https://opensource.org/licenses/Apache-2.0"
  } else if (license === "Eclipse PL") {
    return "https://opensource.org/licenses/EPL-2.0"
  } else if (license === "GNU GPL v3.0") {
    return "https://www.gnu.org/licenses/gpl-3.0"
  } else if (license === "Unlicense") {
    return "http://unlicense.org/"
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return ` #### This project/application is covered under the ${license} license. For more information, please click on the link or license badge above.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

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
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  
  ## Tests
  ${data.test}

  ## Questions
  Have any questions about this project/application?
  Please contact:
  GitHub | https://github.com/${data.userName}
  Email | ${data.email}

  ## Credits
  Created by:
  ${data.credits}
`;
}

module.exports = generateMarkdown;
