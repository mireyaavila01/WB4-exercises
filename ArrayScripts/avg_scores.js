"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100]; 



function getAverage(scores){
 let sum = 0;
 let i;

 for( i = 0; i < scores.length; i++) {
 sum += scores[i]
 console.log(sum);
    
} 
let theaverage = sum / scores.length
console.log("The average of the scores is " + theaverage.toFixed(2));

}

getAverage(myScores);
getAverage(yourScores);
