"use strict";
exports.__esModule = true;
var products = [{
        pId: 1001, pName: "mobile"
    },
    { pId: 1002, pName: "laptop" },
    { pId: 1003, pName: "toy" }];
for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
    var p = products_1[_i];
    console.log(p.pId);
    console.log(p.pName);
}
