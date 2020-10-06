module.exports = function toReadable(number) {
    let result = "",
        H = (number - (number % 100)) / 100,
        D = number % 100,
        Dn = ((number % 100) - (number % 10)) / 10,
        N = D % 10;
    console.log(H, D, Dn, N);
    const NumberName = (num) => {
        switch (num) {
            case 1:
                return "one";
                break;
            case 2:
                return "two";
                break;
            case 3:
                return "three";
                break;
            case 4:
                return "four";
                break;
            case 5:
                return "five";
                break;
            case 6:
                return "six";
                break;
            case 7:
                return "seven";
                break;
            case 8:
                return "eight";
                break;
            case 9:
                return "nine";
                break;
            default:
                return;
                break;
        }
    };
    if (number > 99) {
        number % 100 == 0
            ? (result += `${NumberName(H)} hundred`)
            : (result += `${NumberName(H)} hundred `);
    }
    if (D >= 10 && D <= 13) {
        switch (D) {
            case 10:
                result += "ten";
                N = 0;
                break;
            case 11:
                result += "eleven";
                N = 0;
                break;
            case 12:
                result += "twelve";
                N = 0;
                break;
            case 13:
                result += "thirteen";
                N = 0;
                break;
            default:
                return;
                break;
        }
    } else if (D >= 14 && D < 20) {
        D == 15
            ? (result += "fifteen")
            : D == 18
            ? (result += "eighteen")
            : (result += `${NumberName(N)}teen`);
        N = 0;
    } else if (D >= 20 && D < 30) {
        result += "twenty";
    } else if (D >= 30 && D < 40) {
        result += "thirty";
    } else if (D >= 40 && D < 50) {
        result += "forty";
    } else if (D >= 50 && D < 60) {
        result += "fifty";
    } else if (D >= 80 && D < 90) {
        result += "eighty";
    } else if (Dn != 0) {
        result += `${NumberName(Dn)}ty`;
    }
    if (N > 0) {
        D < 10
            ? (result += `${NumberName(N)}`)
            : (result += ` ${NumberName(N)}`);
    }

    return number != 0 ? result : (result = "zero");
};
