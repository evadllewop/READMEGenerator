// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * 

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Liscense
  ${data.license}

`;
}

module.exports = generateMarkdown;
