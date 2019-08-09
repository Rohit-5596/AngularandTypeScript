import {product} from "./product";
let products:product[]=[{
    pId:1001,pName:"mobile"},
    {pId:1002,pName:"laptop"},
    {pId:1003,pName:"toy"}]

    for(let p of products){
        console.log(p.pId);
        console.log(p.pName);
    } 