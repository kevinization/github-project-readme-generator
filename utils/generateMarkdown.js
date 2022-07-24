// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## License:
  [![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)

  ${licenseInfo(data.license)}

  ## Table of contents:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Contributing:
  ${data.contribution}
  
  ## Tests:
  ${data.test}

  ## Questions:
  - Github: [${data.username}](https://github.com/${data.username})
  - Email: ${data.email} 
  - How to reach me? My discord is ${data.username}#9872
  - Do you use any other social network? Yes, my Twitter is @${data.username}
  `;
}

function licenseInfo(license) {
  var mit = "The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology (MIT) in the late 1980s. As a permissive license, it puts only very limited restriction on reuse and has, therefore, high license compatibility."
  var apache20 = "The Apache License is a permissive free software license written by the Apache Software Foundation (ASF). It allows users to use the software for any purpose, to distribute it, to modify it, and to distribute modified versions of the software under the terms of the license, without concern for royalties. The ASF and its projects release their software products under the Apache License. The license is also used by many non-ASF projects."
  var gpl30 = "The GNU General Public License (GNU GPL or simply GPL) is a series of widely used free software licenses that guarantee end users the four freedoms to run, study, share, and modify the software. The license was the first copyleft for general use and were originally written by the founder of the Free Software Foundation (FSF), Richard Stallman, for the GNU Project. The license grant the recipients of a computer program the rights of the Free Software Definition."
  var bsd3 = "BSD licenses are a family of permissive free software licenses, imposing minimal restrictions on the use and distribution of covered software. The BSD license is a simple license that merely requires that all code retain the BSD license notice if redistributed in source code format, or reproduce the notice if redistributed in binary format."
  var none = "This program is not licensed."

  if (license == "MIT") {
    return mit;
  } else if (license == "APACHE2.0") {
    return apache20;
  } else if (license == "GPL3.0") {
    return gpl30;
  } else if (license == "BSD3") {
    return bsd3;
  } else {
    return none;
  }
}

module.exports = generateMarkdown;
