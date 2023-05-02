const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
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
// <${shape} cx="150" cy="100" r="80" fill="${shapeColor}" />
// <${shape} polygon points="150, 18 244, 182 56, 182" fill="${shape.color}" />
// <${shape} rect x="90" y="40" width="120" height="120" fill="${shape.color}" />
.then(({ chars, textColor, shape, shapeColor }) => {
    switch (shape) {
        case 'circle':
            shapeSvg = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
            break;
        case 'triangle':
            shapeSvg = `<polygon points="75,25 25,175 175,175" fill="${shapeColor}" />`;
            break;
        case 'square':
            shapeSvg = `<rect x="75" y="50" width="150" height="100" fill="${shapeColor}" />`;
            break;
        default:
            console.log('Invalid shape.');
            return;
    }
    
const template =
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<${shape} ${shapeSvg} fill="${shapeColor}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${chars}</text>

</svg>`;

createNewFile('yourGeneratedLogo', template);
});

function createNewFile(fileName, data) {
    fs.appendFile(`./${fileName}.svg`, data, (err)=> {
        if (err) {
            console.log(err)
        }
        console.log('Generated logo.svg');
    });
}