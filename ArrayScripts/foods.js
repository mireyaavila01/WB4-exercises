"use strict";

let mylunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
    ];

function getMealCost(orders){
    let sum = 0;

    for(let i = 0; i < orders.length; i++) {
        sum += orders[i].price;
        }
        return sum;

}
let mealCostSubtotal = getMealCost(mylunch);
let tax = mealCostSubtotal * .08;
let tip = mealCostSubtotal  * .18;
let totalDue = mealCostSubtotal + tax + tip;
console.log("The total due is " + totalDue.toFixed(2));
console.log("The tax amount: " + tax.toFixed(2));
console.log("The tip amount: " + tip.toFixed(2));