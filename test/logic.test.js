const LogoGenerator = require('./logic.js');

describe('LogoGeneratorTests', () => {

    describe('char length', () => {
        it('should be valid if the length is less than 4 chars', () => {
            const chars = "abc";
            const logoGenerator = new LogoGenerator;
            expect(logoGenerator.charLength(chars)).toBeTruthy();
        });
    });

    describe('text color', () => {
        it('should be a valid keyword color or hexidecimal value', () => {
            const colorInput = '#FF0033';
            const logoGenerator = new LogoGenerator;
            expect(logoGenerator.charColor(colorInput)).toBeTruthy();
        });
    });

    describe('shape', () => {
        it('should be a valid shape if either circle, triangle, or square is selected', () => {
            const shapeChoice = 'triangle';
            const logoGenerator = new LogoGenerator;
            expect(logoGenerator.shapeChoice(shapeChoice)).toBeTruthy();
        });
    });

    describe('shape color', () => {
        it('should be a valid keyword color or hexidecimal value', () => {
            const shapeColor = 'blue';
            const logoGenerator = new LogoGenerator;
            expect(logoGenerator.shapeColor(shapeColor)).toBeTruthy();
        })
    })

});
