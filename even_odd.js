function evenOddCheck(number) {
    var num = number;
    var num = JSON.stringify(num);
    var evenSum = 0, oddSum = 0, value;
    var tempArr = num.split('');
    for (var i = 0; i < num.length; i++) {
        if (i % 2 === 0) {
            value = JSON.parse(tempArr[i])
            evenSum =+ value;
        } else {
            value = JSON.parse(tempArr[i])
            oddSum =+ value;
        }
    }
    if (evenSum == oddSum) {
        console.log(true)
    } else {
        console.log(false);
    }
}

evenOddCheck(121);
