"use strict";

let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ];



   //calculation for the academy member whose ID is 187
   function getMember(academyMembers, academyID){

   for(let i = 0; i < academyMembers.length; i++){
    if(academyMembers[i].memID == academyID){
        return academyMembers[i].name;
    }
   }
   }
   console.log("The Academy Member whose ID is 187 is " + getMember(academyMembers, 187));

   //calculation for the ones that been in at least 3 films
   function getFilmLength(academyMembers, lookFilmNumber){
    
    let matching = [];
    let filmNumber = lookFilmNumber;
   for (let i = 0; i < academyMembers.length; i++){
    if(academyMembers[i].films.length >= filmNumber){
        matching.push(academyMembers[i].name);
    }
        
   }
    return matching;
   }
   console.log("The ones that been in at least 3 films are " + getFilmLength(academyMembers, 3));

   //calculation for who has a name that start with "Bob"
   function getName(academyMembers){
    let matching =[];

    for(let i = 0; i < academyMembers.length; i++){
        if(academyMembers[i].name.substring(0,3) == "Bob"){
            matching.push(academyMembers[i].name);
        }
    }
    return matching;
   }
   console.log("start with 'Bob': " + (getName(academyMembers)));