//normal function
function add(x, y) {
    return x + y;
}
//using arrow
var add1 = function (x, y) { return x + y; };
var add2 = function (x, y) { return x + y; }; //braces is must in return statement
var add3 = function (x, y) {
    return x + y;
}; //the third "number" is return type
console.log("sum= " + add(32, 54));
console.log("sum= " + add1(32, 54));
console.log("sum= " + add2(32, 54));
console.log("sum= " + add3(32, 54));
var printname = function (name) { return console.log("welcome " + name); };
printname("rohit"); //printname is like a function with "name" as parameter.Also it,s like Consumer functional interface in
//lambda , taking input and returns nothing
var hi = function () { return console.log("hi"); };
hi(); //hi is like a function with no parameter.Also it,s like Supplier functional interface in
//lambda , takes nothing and returns value
