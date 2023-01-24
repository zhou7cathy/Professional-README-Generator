// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  if (License == "MIT"){
    return `![License: ${License}](https://img.shields.io/badge/License-${License}-yellow.svg)`;
  }else if(License == "GPL v3" ){
    return `![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)`
  }else if (License == "IPL 1.0"){
    return `![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)`
  }else if (License == "MPL 2.0"){
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`
  }else if (License == "none"){
    return " ";
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  if (License == "MIT"){
    return `https://opensource.org/licenses/${License}`;
  }else if(License == "GPL v3" ){
    return `https://www.gnu.org/licenses/gpl-3.0`
  }else if (License == "IPL 1.0"){
    return `https://opensource.org/licenses/IPL-1.0`
  }else if (License == "MPL 2.0"){
    return `https://opensource.org/licenses/MPL-2.0)`
  }else if (License == "none"){
    return " ";
  }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {
  if(License !== "none"){
    return `Application is covered under ${License}`;
  }else{
    return " ";
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ${renderLicenseBadge(data.License)}
  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Description
  ${data.Description}
  ## Installation
  ${data.Installation}
  ## Usage
  ${data.Usage}  
  ## License
  ${renderLicenseSection(data.License[0])} ${renderLicenseLink(data.License[0])}
  ## Contributing
  ${data.Contributing}
  ## Tests
  ${data.Tests}
  ## Questions
  - Link to my GitHub profile: https://github.com/${data.GitHub}
  - Email me with additional questions: ${data.email}
  
`;
}

module.exports = generateMarkdown;
