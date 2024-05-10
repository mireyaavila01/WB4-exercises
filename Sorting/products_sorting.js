"use strict";

let candys = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Life Savers", price: 2.50},
    {product: "Sour Worms", price: 4.25},
    {product: "Hersheys", price: 5.00},
    {product: "Nerds", price: 3.25},
    {product: "Twix", price:6.25},
    {product: "KitKat", price: 4.75}
]

//calculation for sorting products is alphabetical order
function  candysSorted(a,b){
    if (a.product < b.product) {
        return -1;
    }
    else if (a.product == b.product) {
        return 0;
    }
    else return 1;

   }

   candys.sort(candysSorted);
   console.log(candys);
   
   console.log("-----------------------");

//calculation for sorting it by descending price
function candysPriceSorted(a,b){
    if(a.price > b.price){
        return -1;
    }
    else if (a.price == b.price){
        return 0;
    }
    else return 1;
}

candys.sort(candysPriceSorted);
console.log(candys);