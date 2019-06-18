export const luckyNumber = (num) => {
    var count;

    for (var i = 0; i < num.length; i++) {
        count = 0;
        for (var j = 0; j < num.length; j++) {
            if (num.charAt(i) == num.charAt(j)) {
                count++;
            }
        }
        if (count > 1) {
            return false;
        }
    }

    return true;
}
