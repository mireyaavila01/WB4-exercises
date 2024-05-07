"use strict";

let myInfo = {
    name: "Mireya Avila",
    address: "123 Cherry Lane",
    city: "Atlanta",
    state: "GA",
    zip: "30312"
};

printContact(myInfo);

function printContact(contactInfo){
    console.log(contactInfo.name);
    console.log(contactInfo.address);
    console.log(`${contactInfo.city}, ${contactInfo.state} ${contactInfo.zip}`);

}   

    

