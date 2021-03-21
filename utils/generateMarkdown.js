function generateMarkDown(data) {
    return`
    #${data.Title}
    https://github.com/${data.username}/${data.Title}
    #Description
    ${data.Description}
    # Table Of Contents
    ${data.TableOfContents}
    The following dependencies must be used for this project.
    #Installation
    ${data.Installation}
    #usage
    This ap is used for,${data.usage}
    #license
    This app is Licensed under${data.License}
    #Contributors
    ${data.Contributors}
    #Test Commands
    ${data.testing}
    #Creators Contact Info
    ${data.Contact}
    #GitHub User Name
    ${data.username}
    #Creators Email
    ${data.email}`
};
module.exports = generateMarkDown;