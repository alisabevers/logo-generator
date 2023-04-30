const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
// const jest = require('jest');
const fs = require('fs');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

inquirer
.prompt([
    {
        type: 'maxlength-input',
        message: 'Please enter up to 3 characters, which you would like for your logo.',
        name: 'chars',
        maxLength: 3,
    },
    {
        type: 'input',
        message: 'Please enter a color (or hexidecimal number) for your text.',
        name: 'textColor',
        // need to validate user input
    },
    {
        type: 'list',
        message: 'Please choose from the following shapes.',
        name: 'shape',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        message: 'Please enter a color (or hexidecimal number) for your shape.',
        name: 'shapeColor',
    }
])
.then(({
    chars,
    textColor,
    shape,
    shapeColor
}) => {const template = 

`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<${shape} cx="150" cy="100" r="80" fill="${shapeColor}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${chars}</text>

</svg>`;

createNewFile('yourGeneratedLogo', template);
});

function createNewFile(fileName, data) {
    fs.appendFile(`./${fileName}.svg`, data, (err)=> {
        if (err) {
            console.log(err)
        }
        console.log('Your LOGO.svg file was generated!');
    });
}

// need to run tests for certain conditions (hexidecimal numbers, validate input, etc)