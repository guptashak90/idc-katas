export const toUpper = (str) => {
    var ret = "";
    for (i = 0; i < str.length; i++) {
        ret += String.fromCharCode(str.charCodeAt(i) & 223);
    }
    return ret;
}
