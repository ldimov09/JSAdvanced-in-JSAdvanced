function myLength(str1, str2, str3){
    let strArr = [str1, str2, str3];
    let resStr = "";
    let legths = [];
    let sum = 0;
    for(let i = 0; i < strArr.length; i++){
        resStr = resStr + "" + strArr[i];
        legths.push(strArr[i].length);
    }
    console.log(resStr.length);
    for(let i = 0; i < legths.length; i++){
        sum += legths[i];
    }
    console.log(Math.floor(sum / legths.length));
}
myLength('chocolate', 'ice cream', 'cake');