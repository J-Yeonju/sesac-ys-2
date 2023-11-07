const bcrypt = require("bcrypt");

const salt = 10;

function bcryptPw(pw) {
    return bcrypt.hashSync(pw, salt);
}

function comparePw(pw, dbPw) {
    return bcrypt.compareSync(pw, dbPw);
}

const dbPw = bcryptPw("1234");

console.log("pw 1234: ", dbPw);
console.log("compare pw 1234: ", comparePw("1234", dbPw));