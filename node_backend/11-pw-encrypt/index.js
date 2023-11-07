const crypto = require("crypto");


function createHashedPw() {
    return crypto.createHash("sha512").update(password).digest("base64");
}

console.log(createHashedPw("pw 1234: ", createHashedPw("1234")));
console.log(createHashedPw("pw 1235: ", createHashedPw("1235")));
// 한 사람만 유출되어도 다 유출 

const input = "1234";
const db_pw = "";


console.log("compare rusult: ", createHashedPw(input) == db_pw);

// 전체에 소금 쳐주기 
function createHashedPwWithSalt(pw) {
    const salt = crypto.randomBytes(16).toString("base64");
    console.log("salt: ", salt);
    const iterations = 100;
    const keylen = 64;
    const digest = "sha512"
    return crypto
        .pbkdf25Sync(pw, salt, iterations, keylen, digest)
        .toString("base64");
    // 암호화할 문자열, salt, 반복횟수, 키의 길이, 알고리즘
}

console.log("pw 1234 withsalt: ", createHashedPwWithSalt("1234"));