module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 == 0) {
        for (let i = 0; i <= str.length; i++) {
            str = str.replaceAll('()', '');
        }
    }
    else {
        return false;
    }
    return str;
}
