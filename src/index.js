module.exports = function check(str, bracketsConfig) {
    if (!(str.length % 2 == 0)) {
        return false;
    }
    let str_brackets = [];
    let str_length = str.length;
    for (let i = 0; i < bracketsConfig.length; i++) {
        str_brackets.push(bracketsConfig[i].join(''));
    }

    for (let i = 0; i <= str_length; i++) {
        for (let j = 0; j < str_brackets.length; j++) {
            str = str.replaceAll(str_brackets[j], '');
        }
    }

    if (str.length == 0) {
        return true;
    }
    else { return false; }
}
