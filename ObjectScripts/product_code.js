"use strict";


let partcode1 = "ABC:1234-M";
let partcode2 = "XYZ:322-L";
let partcode3 = "ACME:6-S"



let thispartcode = partcode2;



function parsePartCode(partcode){
    let result = {
        code: partcode,
        supplier: getSupplier(partcode),
        productNumber: getProductNumber(partcode),
        size: getSize(partcode)
    };
    return result;
}

function getSupplier(code) {
    let supplierIndexEnd = code.indexOf(":");
    let supplierName = code.substring(0 , supplierIndexEnd);
    return supplierName;
 }

function getProductNumber(code) {
    let productNumberIndexBegining = code.indexOf(":")
    let productNumberIndexEnd = code.indexOf("-");
    let productNumber = code.substring(productNumberIndexBegining + 1, productNumberIndexEnd);
    return productNumber;
}

function getSize(code) {
   let productSizeIndexStart = code.indexOf("-");
   let productSize = code.substring(productSizeIndexStart + 1); 

//    console.log(productSize);

   if (productSize == "L") {
    let sizeName = "large"
    let result = sizeName + " (" + productSize + ")" ;

    return result;
   } else if (productSize == "M") {
    let sizeName = "medium"
    let result = sizeName + " (" + productSize + ")" ;

    return result;
   } else if (!isNaN(productSize)) {
    let sizeName = "size"
    let result = sizeName + " (" + productSize + ")" ;

    return result;
   };
}


console.log(getSupplier(thispartcode));
console.log(getProductNumber(thispartcode));
console.log(getSize(thispartcode));

console.log("--------------------");



console.log(parsePartCode(thispartcode).supplier);
console.log(parsePartCode(thispartcode).productNumber);
console.log(parsePartCode(thispartcode).size);

console.log("-------------------")

let thispart = parsePartCode(thispartcode);

console.log(thispart.supplier);
console.log(thispart.productNumber);
console.log(thispart.size);


console.log(thispart);