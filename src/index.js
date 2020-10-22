module.exports = check = (str, bracketsConfig) => {
    let ckeckArray = bracketsConfig.map((item) => item.join(""));
    for (let i = 0; i < ckeckArray.length; i++) {
        if (str.includes(ckeckArray[i])) {
            str = str.replace(ckeckArray[i], "");
            i = -1;
        }
    }
    return str.length === 0;
};
