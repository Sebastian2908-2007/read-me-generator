const licensesBadge = {
        "ISC": "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]",
        "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        "Mozzilla":"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]",
        "(BY)": "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)]",
        "(ODbl)": "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)]",
        "(PDDL)": "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)]"
}
const licenseLink = {
        "ISC":"(https://www.isc.org/licenses/)",
        "MIT":"(https://www.mit.edu/)",
        "Mozzilla":"(https://www.mozilla.org/en-US/MPL/1.1/)",
        "(BY)":"(https://creativecommons.org/licenses/by/2.0/)",
        "(ODbl)": "(https://opendatacommons.org/licenses/odbl/)",
        "(PDDL)":"(https://opendatacommons.org/licenses/pddl/1-0/)"
}
function renderLicenseBadge(data) {
   return `
      ${licensesBadge[data.License]}
                 #License
              ${data.License} 
      ` 
};

/*function renderLicenseLink(data) {
return `
${licenseLink[data.License]}`
};*/
function renderLicenseSection(data) {
        return `
                  ##License
                    ${data.License} 
 ${licensesBadge[data.License]}
              ## License link
   ${licenseLink[data.License]}  `
}


function generateMarkDown(data) {
    return`
    ${renderLicenseBadge(data)}
    #${data.Title}
    https://github.com/${data.username}/${data.Title}
    ##Description
    ${data.Description}
    ## Table Of Contents
    *[Description](#description)
    *[Installation](#installation)
    * [Usage](#usage)
    * [Contributors](#contributors)
    * [Test](#test)
    * [Contact](#contact)
    * [Questions](#questions)
    
    ##Installation
    ${data.Installation}
    ##Usage
    ${data.usage}
    ##Contributors
    ${data.Contributors}
    ##Test 
    ${data.testing}
    ##Contact
    ${data.Contact}
    ##Questions
    ${data.username}
    If you Have any Questions email me @
    ${data.email}
    ${renderLicenseSection(data)} `
};
module.exports = generateMarkDown