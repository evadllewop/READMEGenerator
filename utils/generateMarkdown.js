// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Author](#author)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}
  See video below:

  [![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/ZUpn8nDRRzY/0.jpg)](http://www.youtube.com/watch?v=ZUpn8nDRRzY)

  ## Credits
  ${data.credits}

  ## License
  ${data.license}

  ## Author

  Dave Powell

  ![Dave Powell](./images/dPowell.png "Dave Powell")

  * [Github Profile](https://github.com/evadllewop)
  * [Project Repo](https://github.com/evadllewop/READMEGenerator)

`;
}

module.exports = generateMarkdown;
