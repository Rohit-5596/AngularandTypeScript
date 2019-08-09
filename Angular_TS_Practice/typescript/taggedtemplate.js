var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var ename = "rohit";
var age = 22;
function mytag(str1, str2, str3) {
    var s1 = str1[0]; //That
    var s2 = str1[1]; //is
    var agestr;
    if (str3 > 18) {
        agestr = 'Adult';
    }
    else {
        agestr = 'Child';
    }
    return s1 + " " + str2 + " " + s2 + " " + str3 + " " + agestr;
}
var output = mytag(__makeTemplateObject(["That ", " is ", ""], ["That ", " is ", ""]), ename, age);
console.log(output);
