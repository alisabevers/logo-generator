function LogoGenerator () {};

LogoGenerator.prototype.charLength = (chars) => {
    return chars.length < 4
};

const hexidecimal = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C', 'D', 'E', 'F'];

const colorChoices = [
    `aliceBlue`,
    `antiqueWhite`,
    `aqua`,
    `aquamarine`,
    `azure`,
    `beige`,
    `bisque`,
    `black`,
    `blanchedAlmond`,
    `blue`,
    `blueViolet`,
    `brown`,
    `burlyWood`,
    `cadetBlue`,
    `chartreuse`,
    `chocolate`,
    `coral`,
    `cornflowerBlue`,
    `cornsilk`,
    `crimson`,
    `cyan`,
    `darkBlue`,
    `darkCyan`,
    `darkGoldenRod`,
    `darkGray`,
    `darkGrey`,
    `darkGreen`,
    `darkKhaki`,
    `darkMagenta`,
    `darkOliveGreen`,
    `darkorange`,
    `darkOrchid`,
    `darkRed`,
    `darkSalmon`,
    `darkSeaGreen`,
    `darkSlateBlue`,
    `darkSlateGray`,
    `darkSlateGrey`,
    `darkTurquoise`,
    `darkViolet`,
    `deepPink`,
    `deepSkyBlue`,
    `dimGray`,
    `dimGrey`,
    `dodgerBlue`,
    `fireBrick`,
    `floralWhite`,
    `forestGreen`,
    `fuchsia`,
    `gainsboro`,
    `ghostWhite`,
    `gold`,
    `goldenRod`,
    `gray`,
    `grey`,
    `green`,
    `greenYellow`,
    `honeyDew`,
    `hotPink`,
    `indianRed`,
    `indigo`,
    `ivory`,
    `khaki`,
    `lavender`,
    `lavenderBlush`,
    `lawnGreen`,
    `lemonChiffon`,
    `lightBlue`,
    `lightCoral`,
    `lightCyan`,
    `lightGoldenRodYellow`,
    `lightGray`,
    `lightGrey`,
    `lightGreen`,
    `lightPink`,
    `lightSalmon`,
    `lightSeaGreen`,
    `lightSkyBlue`,
    `lightSlateGray`,
    `lightSlateGrey`,
    `lightSteelBlue`,
    `lightYellow`,
    `lime`,
    `limeGreen`,
    `linen`,
    `magenta`,
    `maroon`,
    `mediumAquaMarine`,
    `mediumBlue`,
    `mediumOrchid`,
    `mediumPurple`,
    `mediumSeaGreen`,
    `mediumSlateBlue`,
    `mediumSpringGreen`,
    `mediumTurquoise`,
    `mediumVioletRed`,
    `midnightBlue`,
    `mintCream`,
    `mistyRose`,
    `moccasin`,
    `navajoWhite`,
    `navy`,
    `oldLace`,
    `olive`,
    `oliveDrab`,
    `orange`,
    `orangeRed`,
    `orchid`,
    `paleGoldenRod`,
    `paleGreen`,
    `paleTurquoise`,
    `paleVioletRed`,
    `papayaWhip`,
    `peachPuff`,
    `peru`,
    `pink`,
    `plum`,
    `powderBlue`,
    `purple`,
    `red`,
    `rosyBrown`,
    `royalBlue`,
    `saddleBrown`,
    `salmon`,
    `sandyBrown`,
    `seaGreen`,
    `seaShell`,
    `sienna`,
    `silver`,
    `skyBlue`,
    `slateBlue`,
    `slateGray`,
    `slateGrey`,
    `snow`,
    `springGreen`,
    `steelBlue`,
    `tan`,
    `teal`,
    `thistle`,
    `tomato`,
    `turquoise`,
    `violet`,
    `wheat`,
    `white`,
    `whiteSmoke`,
    `yellow`,
    `yellowGreen`,
  ]

LogoGenerator.prototype.charColor = (color) => {
    if(color.length === 7 && color[0] === '#') {
        for(let i = 1; i < 7; i++) {            
            if(!hexidecimal.includes(color[i])) {
                return false;
            }
        }
        return true;
    }

    if(colorChoices.includes(color)) {
        return true;
    } 

    return false;
};

const shapes = ['circle', 'triangle', 'square'];
LogoGenerator.prototype.shapeChoice = (shape) => {
    if(shapes.includes(shape)) {
        return true;
    }
};

module.exports = LogoGenerator;