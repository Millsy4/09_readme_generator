// function to generate markdown for README
function generateMarkdown(data) {
  //JSON.stringify(data)
  return `# ${data.title}
  
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)

  * [Usage](#usage)
  
  * [License](#license)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Installation
  
  To install necessary dependencies, run the following command:
  
  ---
  ${data.install}
  ---`;
}

module.exports = generateMarkdown;
