// const dotenv = require('dotenv').config();

// const info = dotenv.parsed;

// console.log(info);

const key = "1234567890abcdef";

function fnt() {
    var email = document.getElementById('email-content').value;
    var password = document.getElementById('pw-content').value;

    var hashPw = '7sw8' + password + 'f7qd';
    var encryptePasswd = encryptor(password, key);

    if (email && password) {
        console.log(`Client email is ${email} and password is ${password} (${hashPw} => ${encryptePasswd})`);
    } else {
        console.log("Incomplete anwser");
    }
}

function strLength(str) {
    var len = 0;
    for (len; str[len]; len++);

    return len;
}

function encryptor(pw, key) {
    var newPass = new String('*****');
    var j = 0;

    for (var i = 0; pw[i]; i++) {
        if (i > strLength(key)) {
            newPass[j++] = pw[i];
            newPass[j++] = key["length" - i];
        } else {
            newPass[j++] = pw[i];
            newPass[j++] = key[i];
        }
    }

    return newPass;
}