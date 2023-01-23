// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  if (License !== "none"){
    return `![License: ${License}](https://img.shields.io/badge/License-${License}-yellow.svg)`;
  }else{
    return " ";
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  if (License !== "none"){
    return `https://opensource.org/licenses/${License}`;
  }else{
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
