var randomstring = require("randomstring");

export const generateString = () => {
    let string = randomstring.generate({
        length: 5,
        charset: 'alphabetic'
    });

    return string;
}
