module.exports = function check(str, bracketsConfig) {
    if (!(str.length % 2 == 0)) {
        return false;
    }
    str_brackets = bracketsConfig.flat().join('');

    for (let i = 0; i <= str.length; i++) {
        str = str.replaceAll(str_brackets, '');
        console.log(str);
    }
    
    if (str.length == 0) {
        return true;
    }
    else { return false; }
}
