const LogoGenerator = require('./logic.js');

describe('LogoGenerator', () => {
    describe('length', () => {
        it('should throw an error if the length is greater than 3 chars'), () => {
            const chars = "abcd";
            const LogoGenerator = new LogoGenerator;
            const errorMsg = "Please enter a max of 3 characters"
            expect(LogoGenerator.charLength(chars)).toThrow(errorMsg);
        };
    });
});
