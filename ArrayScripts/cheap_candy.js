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


   function getCandyCost(candys, lookCandyCost){
    let matching = [];
    for(let i = 0; i < candys.length; i++){
        if(candys[i].price < lookCandyCost){
            matching.push(candys[i].product);
        }
    
    }
       return matching;
   }
    console.log("The candys that are less than $4.00 are " + getCandyCost(candys, 4.00));
  
   

    //calculation to get products that include M&M
        let matching = [];
        for(let i = 0; i < candys.length; i++){
            if(candys[i].product.indexOf("M&M") >= 0 ){
                matching.push(candys[i].product);
            }
           
        }
        console.log("the products that include 'M&M' are " + matching);
    
    
    //calculation to see if we carry the product 
        let yesOrNo = "no"; 
        for(let i = 0; i < candys.length; i++){
            if (candys[i].product == "Swedish Fish"){
              yesOrNo = "yes" ;
            }
        }
   
    console.log("Do we carry Swedish Fish ? " + yesOrNo);