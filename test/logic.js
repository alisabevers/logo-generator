function LogoGenerator () {};

LogoGenerator.prototype.charLength = (chars) => {
    return chars.length < 4
};

module.exports = LogoGenerator;